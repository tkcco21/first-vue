<template lang="html">
  <div class="book-form">
    <v-form>
      <v-text-field
        v-model="bookTitle"
        v-validate="'required'"
        data-vv-name="bookTitle"
        :error-messages="errors.collect('bookTitle')"
        label="本のタイトル"
        required
      />
      <v-text-field
        v-model="bookImage"
        data-vv-name="bookImage"
        label="本の画像のURL"
      />
      <v-text-field
        v-model="bookUrl"
        v-validate="'required'"
        data-vv-name="bookUrl"
        :error-messages="errors.collect('bookUrl')"
        label="本のURL"
        required
      />
      <v-textarea
        v-model="bookDescription"
        v-validate="'required'"
        data-vv-name="bookDescription"
        :error-messages="errors.collect('bookDescription')"
        label="本の感想・概要"
        rows="8"
        required
      />

      <v-container grid-list-md fluid class="pa-0">
        <v-layout justify-start align-center>
          <v-flex xs1>
            <p class="subheading text-xs-center ma-0">読了</p>
          </v-flex>
          <v-flex md3>
            <v-select
              v-model="completedYear"
              v-validate="'required|numeric'"
              data-vv-name="completedYear"
              :error-messages="errors.collect('completedYear')"
              :items="yearOptions"
              suffix="年"
              required
            />
          </v-flex>
          <v-flex md3>
            <v-select
              v-model="completedMonth"
              v-validate="'numeric'"
              data-vv-name="completedMonth"
              :error-messages="errors.collect('completedMonth')"
              :items="monthOptions"
              suffix="月"
            />
          </v-flex>
          <v-flex md3>
            <v-btn
              color="green"
              block
              dark
              depressed
              @click="handleSubmit"
            >
              追加する
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data: () => ({
    bookTitle: '',
    bookImage: '',
    bookUrl: '',
    bookDescription: '',
    completedYear: '',
    completedMonth: '',
    dictionary: {
      custom: {
        bookTitle: {
          required: () => '必須項目です。本のタイトルを入力してください。',
        },
        bookUrl: {
          required: () => '必須項目です。本のURLを入力してください。',
        },
        bookDescription: {
          required: () => '必須項目です。本の感想・概要を入力してください。',
        },
        completedYear: {
          required: () => '必須項目です。読んだ年を入力してください。',
          numeric: () => '半角の数字で年を入力してください。',
        },
        completedMonth: {
          numeric: () => '半角の数字（01~12）を入力してください。',
        },
      },
    },
  }),
  computed: {
    doneMessage() {
      return this.$store.state.doneMessage;
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
    yearOptions() {
      const array = [];
      for (let i = 2014, years = moment().year(); i < years; i += 1) {
        array.push(i);
      }
      return array;
    },
    monthOptions() {
      const array = [];
      for (let i = 1; i <= 12; i += 1) {
        const str = `${i}`;
        array.push(str.padStart(2, '0'));
      }
      return array;
    },
  },
  mounted() {
    this.$validator.localize('ja', this.dictionary);
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('clearMessage');

      this.$validator.validate().then((valid) => {
        if (!valid) {
          this.$store.dispatch('invalidate', '必須項目が未入力か、ちゃんとした値が入力されてないよ。');
        } else {
          const year = this.completedYear;
          const month = this.completedMonth ? `-${this.completedMonth}` : '';
          this.$store.dispatch('addBook', {
            book_title: this.bookTitle,
            book_image: this.bookImage,
            book_url: this.bookUrl || null,
            book_description: this.bookDescription,
            completed_at: `${year + month}`,
          });

          this.$validator.reset();
          this.bookTitle = '';
          this.bookImage = '';
          this.bookUrl = '';
          this.bookDescription = '';
          this.completedYear = '';
          this.completedMonth = '';
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.book-form {
  &-date {
    &-select {
      display: inline-block;
      vertical-align: middle;
      & + & {
        margin-left: 10px;
      }
    }
  }
}
</style>
