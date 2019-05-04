<template lang="html">
  <div class="book-form">
    <div class="book-form-content">
      <atoms-input
        name="bookTitle"
        input-type="text"
        placeholder="本のタイトル"
        :input-value="bookTitle"
        @updateValue="updateValue"
      />
    </div>

    <div class="book-form-content">
      <atoms-input
        name="bookImage"
        input-type="text"
        placeholder="本の画像のURL"
        :input-value="bookImage"
        @updateValue="updateValue"
      />
    </div>

    <div class="book-form-content">
      <atoms-input
        name="bookUrl"
        input-type="text"
        placeholder="本のURL"
        :input-value="bookUrl"
        @updateValue="updateValue"
      />
    </div>

    <div class="book-form-content">
      <atoms-textarea
        name="bookDescription"
        placeholder="本の感想・概要"
        :input-value="bookDescription"
        @updateValue="updateValue"
      />
    </div>

    <div class="book-form-content book-form-content--inline">
      <div class="book-form-date">
        <div class="book-form-date-select">
          <atoms-text>読了</atoms-text>
        </div>
        <div class="book-form-date-select">
          <atoms-select
            name="completedYear"
            suffix="年"
            :value="completedYear"
            :options="yearOptions"
            @updateValue="updateValue"
          />
        </div>

        <div class="book-form-date-select">
          <atoms-select
            name="completedMonth"
            suffix="月"
            :value="completedMonth"
            :options="monthOptions"
            @updateValue="updateValue"
          />
        </div>
      </div>

      <div class="book-form-button">
        <atoms-button
          name="addBookButton"
          type="button"
          inline
          @handleSubmit="handleSubmit"
        >
          追加する
        </atoms-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import {
  Button,
  Input,
  Select,
  Text,
  Textarea,
} from '@Admin/components/atoms';

export default {
  components: {
    atomsButton: Button,
    atomsInput: Input,
    atomsSelect: Select,
    atomsText: Text,
    atomsTextarea: Textarea,
  },
  data() {
    return {
      bookTitle: '',
      bookImage: '',
      bookUrl: '',
      bookDescription: '',
      completedYear: '',
      completedMonth: '',
    };
  },
  computed: {
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
  methods: {
    updateValue($event) {
      this[$event.target.name] = $event.target.value;
    },
    handleSubmit() {
      const year = this.completedYear;
      const month = this.completedMonth ? `-${this.completedMonth}` : '';
      this.$store.dispatch('addBook', {
        book_title: this.bookTitle,
        book_image: this.bookImage,
        book_url: this.bookUrl,
        book_description: this.bookDescription,
        completed_at: `${year + month}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.book-form {
  margin-top: 20px;
  &-content {
    & + & {
      margin-top: 20px;
    }
    &--inline {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-date {
    font-size: 0;
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
