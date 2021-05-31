<template>
  <section class="basket-page">
    <div class="container container_small">
      <div class="basket">
        <div class="head">
          <div class="head__group">
            <i class="bx bx-cart head__icon head__icon_cart"></i>
            <h2 class="head__title">
              Корзина
            </h2>
          </div>
          <Button :button="clearBtn" @click="onClearBasket" />
        </div>
        <div class="offer">
          <Item v-for="card in getCards" :key="card.idCard" :item="card" />
        </div>
        <div class="result">
          <div class="result__count">
            <p class="result__text">
              Всего заказов: {{ getAllCountAndPrice.allCount }}
              <span class="result__piece">шт.</span>
            </p>
          </div>
          <div class="result__summa">
            <p class="result__text">
              Сумма заказа:
            </p>
            <h5 class="result__title">
              {{ getAllCountAndPrice.allPrice }} руб.
            </h5>
          </div>
        </div>
        <div class="footer">
          <Button :button="backBtn" @click="onBack" />
          <Button :button="arrangeBtn" @click="onPay" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Item from "@/components/Item/Item.vue";
export default {
  name: "Basket-page",
  components: {
    Button,
    Item,
  },
  data() {
    return {
      clearBtn: {
        type: "Button",
        class: "head__btn",
        iconLeft: {
          class: "bx bx-trash head__icon head__icon_trash",
        },
        text: {
          class: "head__text",
          text: "Очистить корзину",
        },
      },
      backBtn: {
        type: "Button",
        class: "footer__btn footer__btn_back",
        iconLeft: {
          class: "bx bxs-chevron-left footer__icon",
        },
        text: {
          class: "footer__text",
          text: "Вернуться назад",
        },
      },
      arrangeBtn: {
        type: "Button",
        class: "footer__btn footer__btn_arrange",
        text: {
          class: "footer__text",
          text: "Сделать заказ",
        },
      },
    };
  },
  computed: {
    getCards() {
      return this.$store.state.cards.filter((card) => card.count > 0) || [];
    },
    getAllCountAndPrice() {
      return this.$store.getters.getAllCountAndPrice;
    },
  },
  methods: {
    onClearBasket() {
      this.$store.commit("setClearBasket");
    },

    onBack() {
      this.$router.push("/");
    },

    onPay() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.basket-page {
  padding: 94px 0px 131px 0px;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head__icon {
  display: block;
  margin-right: 7px;
}

.head__icon_cart {
  font-size: 32px;
}

.head__icon_trash {
  font-size: 18px;
}

.head__group {
  display: flex;
  align-items: center;
}

.head__btn {
  color: #b6b6b6;
  font-weight: 400;
  font-size: 15px;
  padding: 0px;
}

.offer {
  padding: 30px 0px;
  border-top: 2px solid #f4f4f4;
}

.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.result__count {
  font-size: 19px;
}

.result__piece {
  font-weight: 700;
}

.result__summa {
  display: flex;
  align-items: center;
}

.result__text {
  font-size: 19px;
  margin-right: 5px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

.footer__icon {
  font-size: 16px;
}

.footer__btn {
  &.footer__btn_back {
    border: 1px solid #d3d3d3;
    color: #d3d3d3;
  }

  &.footer__btn_arrange {
    border: 1px solid $color-orange;
    color: #fff;
    background-color: $color-orange;
  }
}

/* 768 - 992 px */
@media screen and (max-width: 992px) {
  .basket-page {
    padding: 60px 0px 100px 0px;
  }

  .result__text {
    font-size: 17px;
  }

  .result__title {
    font-size: 17px;
  }

  .result__text {
    font-size: 17px;
  }

  .result__title {
    font-size: 17px;
  }

  .head__title {
    font-size: 28px;
  }
}

/* 576 - 768 px */
@media screen and (max-width: 768px) {
}

/* 320 - 576 px */
@media screen and (max-width: 576px) {
  .basket-page {
    padding: 40px 0px;
  }

  .head {
    flex-direction: column;
  }

  .head__group {
    margin-bottom: 10px;
  }

  .head__icon {
    font-size: 24px;
  }

  .head__title {
    font-size: 20px;
  }

  .result {
    flex-direction: column;
  }

  .result__count {
    margin-bottom: 10px;
  }

  .footer {
    flex-direction: column-reverse;
    margin-top: 20px;
  }

  .footer__btn_back {
    margin-top: 15px;
  }
}
</style>
