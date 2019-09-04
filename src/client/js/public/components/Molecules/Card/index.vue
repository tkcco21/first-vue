<template>
  <div class="card">
    <a
      :href="item.itemUrl"
      class="card__link"
      target="_blank"
      rel="noopener"
    >
      <img v-lazy="item.imageUrl" :alt="item.title">
      <h3 class="card__title">{{ item.title }}</h3>
    </a>

    <template v-if="detail">
      <div class="card__btn">
        <app-link
          text="詳細"
          :to="`/${detail}/${item.id}`"
          block
          bg-key
          white
          small
          round-s
          padding-s
          hover-opa
        />
      </div>
    </template>
  </div>
</template>

<script>
import { Link } from '@Public/components/Atoms';

export default {
  components: {
    appLink: Link,
  },
  props: {
    detail: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.card {
  padding: 5%;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid var(--lightGray);
  box-sizing: border-box;
  &__link {
    font-size: 0;
    width: 100%;
    box-sizing: border-box;
    @mixin pc {
      &:hover {
        img {
          box-shadow: 0 10px 7px 1px #aaa;
          transform: scale(1.03);
        }
      }
    }
    img {
      width: 70%;
      border: 1px solid var(--lightGray);
      transition: .5s;
      @mixin tab {
        width: 75%;
      }
      @mixin mobile {
        width: 80%;
      }
    }
  }
  &__title {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
    @mixin tab {
      margin-top: 3%;
    }
    @mixin mobile {
      margin-top: 2%;
      font-size: 14px;
    }
  }
  &__btn {
    margin-top: 5px;
  }
}
</style>
