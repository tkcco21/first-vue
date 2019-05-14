<template lang="html">
  <div class="book-form">
    <v-text-field label="本のタイトル" name="bookTitle" />
    <v-text-field label="本の画像のURL" name="bookImage" />
    <v-text-field label="本のURL" name="bookUrl" />
    <v-textarea
      name="bookDescription"
      label="本の感想・概要"
      value=""
      rows="8"
    />

    <v-container grid-list-md fluid class="pa-0">
      <v-layout justify-start align-center>
        <v-flex xs1>
          <p class="subheading text-xs-center ma-0">読了</p>
        </v-flex>
        <v-flex md3>
          <v-select
            :items="yearOptions"
            label="年"
          />
          <!--
            name="completedYear"
            :value="completedYear"
            :options="yearOptions"
            @updateValue="updateValue"
          -->
        </v-flex>
        <v-flex md3>
          <v-select
            :items="monthOptions"
            label="月"
          />
          <!--
            name="completedMonth"
            :value="completedMonth"
            :options="monthOptions"
            @updateValue="updateValue"
          -->
        </v-flex>
        <v-flex md3>
          <v-btn
            color="green"
            block
            dark
            depressed
          >
            追加する
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
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
        array.push(`${i}年`);
      }
      return array;
    },
    monthOptions() {
      const array = [];
      for (let i = 1; i <= 12; i += 1) {
        const str = `${i}`;
        array.push(`${str.padStart(2, '0')}月`);
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
