<template lang="html">
  <div class="books">
    <h1 class="books-title">Books</h1>
    <div class="books-content">
      <div class="books-form">
        <atoms-input-text
          class-name="books-input"
          label="URL"
          name="bookUrl"
          input-type="text"
          placeholder="本のURL"
          :input-value="bookUrl"
          @updateValue="updateValue"
        />
      </div>

      <div class="books-form">
        <atoms-textarea
          class-name="books-textarea"
          label="概要・感想"
          name="bookDescription"
          placeholder="本の概要"
          :input-value="bookDescription"
          @updateValue="updateValue"
        />
      </div>

      <div class="books-form">
        <atoms-select
          class-name="books-select"
          name="completedYear"
          suffix="年"
          :value="completedYear"
          :options="yearOptions"
          @updateValue="updateValue"
        />
        <atoms-select
          class-name="books-select"
          name="completedMonth"
          suffix="月"
          :value="completedMonth"
          :options="monthOptions"
          @updateValue="updateValue"
        />
      </div>

      <div class="books-foot">
        <atoms-button
          class-name="books-button"
          name="addBookButton"
          type="button"
          text="追加する"
          @handleSubmit="handleSubmit"
        />
      </div>
    </div>

    <!-- リストは後で直す -->
    <ul>
      <li v-for="book in books" :key="books.id">
        <p>{{ book.item_url }}</p>
        <p>{{ book.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import atomsInputText from '@Admin/components/atoms/InputText';
import atomsTextarea from '@Admin/components/atoms/Textarea';
import atomsButton from '@Admin/components/atoms/Button';
import atomsSelect from '@Admin/components/atoms/Select';

export default {
  components: {
    atomsInputText,
    atomsTextarea,
    atomsButton,
    atomsSelect,
  },
  data() {
    return {
      bookUrl: '',
      bookDescription: '',
      completedYear: '',
      completedMonth: '',
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
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
  created() {
    this.$store.dispatch('getBooks');
  },
  methods: {
    updateValue($event) {
      this[$event.target.name] = $event.target.value;
    },
    handleSubmit() {
      const year = this.completedYear;
      const month = this.completedMonth ? `-${this.completedMonth}` : '';
      this.$store.dispatch('addBook', {
        bookUrl: this.bookUrl,
        bookDescription: this.bookDescription,
        completedAt: `${year + month}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.books {
  &-title {
    padding: 5px 15px;
    font-size: 24px;
    background-color: #efefef;
  }
  &-content {
    margin-top: 20px;
  }
  &-form {
    & + & {
      margin-top: 20px;
    }
  }
}
</style>
