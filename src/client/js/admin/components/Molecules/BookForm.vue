<template lang="html">
  <div class="book-form">
    <v-form>
      <v-text-field
        v-model="book.title"
        v-validate="'required'"
        data-vv-name="title"
        :error-messages="errors.collect('title')"
        label="本のタイトル"
        required
      />
      <v-text-field
        v-model="book.imageUrl"
        data-vv-name="bookImage"
        label="本の画像のURL"
      />
      <v-text-field
        v-model="book.itemUrl"
        v-validate="'required'"
        data-vv-name="itemUrl"
        :error-messages="errors.collect('itemUrl')"
        label="本のURL"
        required
      />
      <v-textarea
        v-model="book.description"
        v-validate="'required'"
        data-vv-name="description"
        :error-messages="errors.collect('description')"
        label="本の感想・概要"
        rows="8"
        required
      />

      <v-container grid-list-md fluid class="pa-0">
        <v-layout justify-start align-baseline>
          <v-flex md2>
            <p class="subheading text-md-center ma-0">読了</p>
          </v-flex>
          <v-flex md3>
            <v-select
              v-model="book.completedYear"
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
              v-model="book.completedMonth"
              v-validate="'numeric'"
              data-vv-name="completedMonth"
              :error-messages="errors.collect('completedMonth')"
              :items="monthOptions"
              suffix="月"
            />
          </v-flex>
          <v-flex md3 class="ml-5">
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
    <v-alert
      v-if="doneMessage"
      :value="true"
      type="success"
    >
      {{ doneMessage }}
    </v-alert>
    <v-alert
      v-if="errorMessage"
      :value="true"
      type="error"
    >
      {{ errorMessage }}
    </v-alert>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data: () => ({
    book: {
      title: '',
      imageUrl: '',
      itemUrl: '',
      description: '',
      completedYear: '',
      completedMonth: '',
    },
    dictionary: {
      custom: {
        title: {
          required: () => '必須項目です。本のタイトルを入力してください。',
        },
        itemUrl: {
          required: () => '必須項目です。本のURLを入力してください。',
        },
        description: {
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
          const { book } = this;
          const year = book.completedYear;
          const month = book.completedMonth ? `-${book.completedMonth}` : '';
          this.$emit('handleSubmit', {
            title: book.title,
            imageUrl: book.imageUrl,
            itemUrl: book.itemUrl || null,
            description: book.description,
            completedAt: `${year + month}`,
          });

          this.$validator.reset();
          book.title = '';
          book.imageUrl = '';
          book.itemUrl = '';
          book.description = '';
          book.completedYear = '';
          book.completedMonth = '';
        }
      });
    },
  },
};
</script>
