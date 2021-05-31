<template>
  <div class="item">
    <div class="item__info">
      <img
        src="@/assets/image/pizza/1.png"
        :alt="item.title"
        class="item__img"
      />
      <div class="item__group">
        <h4 class="item__title">
          {{ item.title }}
        </h4>
        <p class="item__text">
          {{ item.description }}
        </p>
      </div>
    </div>
    <div class="item__block">
      <div class="item__counter">
        <Button
          :button="onOptionsBtnCounter('bx bx-minus-circle')"
          @click="onMinus(item.idCard, item.count, -1, -item.price)"
        />
        <h4 class="item__text">{{ item.count }}</h4>
        <Button
          :button="onOptionsBtnCounter('bx bx-plus-circle')"
          @click="onPlus(item.idCard, item.count, item.maxCount, 1, item.price)"
        />
      </div>
      <div class="item__price">
        <h4 class="item__text">{{ item.price }} руб.</h4>
      </div>
      <div class="item__delete">
        <Button
          :button="btnDelete"
          @click="onDelete(item.idCard, -item.count, -item.allPrice)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
export default {
  name: "Item",
  components: {
    Button,
  },
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      btnDelete: {
        type: "Button",
        class: "item__btn",
        iconLeft: {
          class: "bx bx-x-circle item__icon item__icon_delete",
        },
      },
    };
  },
  methods: {
    onOptionsBtnCounter(icon) {
      return {
        type: "Button",
        class: "item__btn",
        iconLeft: {
          class: `${icon} item__icon item__icon_counter`,
        },
      };
    },
    onMinus(idCard, count, counter, price) {
      if (count > 1) {
        this.$store.commit("setCardCounter", { idCard, counter, price });
        this.$store.commit("setAllCountAndPrice", { price, count: -1 });
      }
    },
    onPlus(idCard, count, maxCount, counter, price) {
      if (count < maxCount) {
        this.$store.commit("setCardCounter", { idCard, counter, price });
        this.$store.commit("setAllCountAndPrice", { price, count: 1 });
      }
    },
    onDelete(idCard, count, price) {
      this.$store.commit("setCardDelete", idCard);
      this.$store.commit("setAllCountAndPrice", { price, count });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.item {
  display: flex;
  align-items: center;
  width: 100%;
}

.item__info {
  display: flex;
  align-items: center;
  width: 50%;
}

.item__img {
  width: 80px;
  height: 80px;
  margin-right: 5px;
}

.item__text {
  text-align: center;
  margin-top: 3px;
  color: #8d8d8d;
}

.item__icon {
  display: block;
  font-size: 32px;

  &.item__icon_counter {
    color: $color-orange;
  }

  &.item__icon_delete {
    color: #d0d0d0;
  }
}

.item__btn {
  padding: 0px;
}

.item__block {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item__counter {
  display: flex;
  align-items: center;
}

.item__text {
  margin: 0px 12px;
}

/* 768 - 992 px */
@media screen and (max-width: 992px) {
  .item__title {
    font-size: 19px;
  }

  .item__text {
    font-size: 19px;
  }
}

/* 576 - 768 px */
@media screen and (max-width: 768px) {
  .item {
    flex-direction: column;
  }

  .item__info {
    width: 100%;
    justify-content: center;
    margin-bottom: 15px;
  }

  .item__block {
    width: 100%;
    justify-content: center;
  }
}

/* 320 - 576 px */
@media screen and (max-width: 576px) {
  .item__title {
    font-size: 18px;
  }

  .item__text {
    font-size: 17px;
  }
}
</style>
