<template lang="html">
  <div class="book-form">
    <v-form>
      <v-text-field
        v-validate="'required'"
        data-vv-name="title"
        name="title"
        :error-messages="errors.collect('title')"
        label="本のタイトル"
        required
        :value="targetBook.title"
        @input="updateValue($event, 'title')"
      />
      <v-text-field
        label="本の画像のURL"
        name="imageUrl"
        :value="targetBook.imageUrl"
        @input="updateValue($event, 'imageUrl')"
      />
      <v-text-field
        v-validate="'required'"
        data-vv-name="itemUrl"
        name="itemUrl"
        :error-messages="errors.collect('itemUrl')"
        label="本のURL"
        required
        :value="targetBook.itemUrl"
        @input="updateValue($event, 'itemUrl')"
      />
      <v-textarea
        v-validate="'required'"
        data-vv-name="description"
        name="description"
        :error-messages="errors.collect('description')"
        label="本の感想・概要"
        rows="8"
        required
        :value="targetBook.description"
        @input="updateValue($event, 'description')"
      />

      <v-container grid-list-md fluid class="pa-0">
        <v-layout justify-start align-baseline>
          <v-flex md2>
            <p class="subheading text-md-center ma-0">読了</p>
          </v-flex>
          <v-flex md3>
            <v-select
              v-validate="'required|numeric'"
              data-vv-name="completedYear"
              name="completedYear"
              :error-messages="errors.collect('completedYear')"
              :items="yearOptions"
              suffix="年"
              required
              :value="targetBook.completedYear"
              @input="updateValue($event, 'completedYear')"
            />
          </v-flex>
          <v-flex md3>
            <v-select
              v-validate="'numeric'"
              data-vv-name="completedMonth"
              :error-messages="errors.collect('completedMonth')"
              name="completedMonth"
              :items="monthOptions"
              suffix="月"
              :value="targetBook.completedMonth"
              @input="updateValue($event, 'completedMonth')"
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
export default {
  props: {
    bookDetail: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
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
    };
  },
  computed: {
    doneMessage() {
      return this.$store.state.doneMessage;
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
    targetBook() {
      return {
        title: this.$store.state.targetBook.title,
        imageUrl: this.$store.state.targetBook.imageUrl,
        itemUrl: this.$store.state.targetBook.itemUrl,
        description: this.$store.state.targetBook.description,
        completedYear: this.$store.state.targetBook.completedYear,
        completedMonth: this.$store.state.targetBook.completedMonth,
      };
    },
    yearOptions() {
      const array = [];
      for (let i = 2014, years = new Date().getFullYear(); i <= years; i += 1) {
        array.push(i);
      }
      return array;
    },
    monthOptions() {
      const array = [];
      for (let i = 1; i <= 12; i += 1) {
        array.push(i);
      }
      return array;
    },
  },
  mounted() {
    this.$validator.localize('ja', this.dictionary);
  },
  methods: {
    updateValue(value, name) {
      this.$store.dispatch('updateValue', { value, name });
    },
    handleSubmit() {
      this.$store.dispatch('clearMessage');

      this.$validator.validate().then((valid) => {
        if (!valid) {
          this.$store.dispatch('invalidate', '必須項目が未入力か、ちゃんとした値が入力されてないよ。');
        } else {
          this.$emit('handleSubmit', this.targetBook);
          this.$store.dispatch('resetForm');
          this.$validator.reset();
        }
      });
    },
  },
};
</script>
