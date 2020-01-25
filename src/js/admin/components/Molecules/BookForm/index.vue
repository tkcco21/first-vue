<template lang="html">
  <div class="book-form">
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-validate="'required'"
        :error-messages="errors.collect('title')"
        label="本のタイトル"
        name="title"
        type="text"
        :value="targetBook.title"
        @input="updateValue($event, 'title')"
      />
      <v-text-field
        v-validate="'required'"
        :error-messages="errors.collect('itemUrl')"
        label="本の遷移URL"
        name="itemUrl"
        type="text"
        :value="targetBook.itemUrl"
        @input="updateValue($event, 'itemUrl')"
      />
      <v-text-field
        v-validate="'required'"
        :error-messages="errors.collect('imageUrl')"
        label="本の画像URL"
        name="imageUrl"
        type="text"
        :value="targetBook.imageUrl"
        @input="updateValue($event, 'imageUrl')"
      />
      <v-textarea
        v-validate="'required'"
        :error-messages="errors.collect('description')"
        label="本の感想・概要"
        name="description"
        type="text"
        rows="8"
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
              :error-messages="errors.collect('completedYear')"
              :items="yearOptions"
              suffix="年"
              name="completedYear"
              type="number"
              :value="targetBook.completedYear"
              @input="updateValue($event, 'completedYear')"
            />
          </v-flex>
          <v-flex md3>
            <v-select
              v-validate="'numeric'"
              data-vv-name="completedMonth"
              :error-messages="errors.collect('completedMonth')"
              :items="monthOptions"
              name="completedMonth"
              suffix="月"
              type="number"
              :value="targetBook.completedMonth"
              @input="updateValue($event, 'completedMonth')"
            />
          </v-flex>
          <v-flex md3 class="ml-5">
            <v-btn
              type="submit"
              color="green"
              block
              dark
              depressed
            >
              <template v-if="targetBook.id">
                <span>更新する</span>
              </template>
              <template v-else>
                <span>追加する</span>
              </template>
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
    doneMessage: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    targetBook: {
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
            required: () => '必須項目です。本の遷移URLを入力してください。',
          },
          imageUrl: {
            required: () => '必須項目です。本の画像URLを入力してください。',
          },
          description: {
            required: () => '必須項目です。本の感想・概要を入力してください。',
          },
          completedYear: {
            required: () => '必須項目です。読んだ年を入力してください。',
            numeric: () => '半角の数字で年を入力してください。',
          },
          completedMonth: {
            numeric: () => '半角の数字（1~12）を入力してください。',
          },
        },
      },
    };
  },
  computed: {
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
    /* Overwraiteing Error Messages */
    /* https://baianat.github.io/vee-validate/guide/messages.html#message-generators */
    this.$validator.localize('ja', this.dictionary);
  },
  methods: {
    updateValue(value, name) {
      this.$emit('updateValue', { value, name });
    },
    handleSubmit() {
      this.$emit('clear');

      this.$validator.validate().then(valid => {
        if (!valid) {
          this.$emit('invalidateSubmit');
        } else {
          this.$emit('handleSubmit', this.targetBook);
          this.$validator.reset();
        }
      });
    },
  },
};
</script>
