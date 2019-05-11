<template lang="html">
  <div class="book-form">
    <div class="book-form-content">
      <v-text-field background-color="">本のタイトル</v-text-field>
    </div>

    <div class="book-form-content">
      <v-text-field background-color="">本の画像のURL</v-text-field>
    </div>

    <div class="book-form-content">
      <v-text-field background-color="">本のURL</v-text-field>
    </div>

    <div class="book-form-content">
      <textarea
        placeholder="本の感想・概要"
        name="bookDescription"
        rows="8"
      />
    </div>

    <div class="book-form-content book-form-content--inline">
      <div class="book-form-date">
        <div class="book-form-date-select">
          <p>読了</p>
        </div>
        <div class="book-form-date-select">
          <select class="" name="">
            <option value=""> --- </option>
          </select>
          <!-- <atoms-select
            name="completedYear"
            suffix="年"
            :value="completedYear"
            :options="yearOptions"
            @updateValue="updateValue"
          /> -->
        </div>

        <div class="book-form-date-select">
          <select class="" name="">
            <option value=""> --- </option>
          </select>
          <!-- <atoms-select
            name="completedMonth"
            suffix="月"
            :value="completedMonth"
            :options="monthOptions"
            @updateValue="updateValue"
          /> -->
        </div>
      </div>

      <div class="book-form-button">
        <button>追加する</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
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
  methods: {
    updateValue($event) {
      if (this.doneMessage || this.errorMessage) {
        this.$store.dispatch('clearMessage');
      }
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
      this.bookTitle = '';
      this.bookImage = '';
      this.bookUrl = '';
      this.bookDescription = '';
      this.completedYear = '';
      this.completedMonth = '';
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
