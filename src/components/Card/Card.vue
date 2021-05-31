<template>
  <div class="card">
    <div class="card__img" ref="pizzaImg"></div>
    <h5 class="card__title">
      {{ card.title }}
    </h5>
    <div class="card__options">
      <div class="card__item card__item_dough">
        <Button
          v-for="(dough, idDough) in card.dough"
          :key="idDough"
          :button="onOptionBtn(dough.text)"
          :disabled="dough.disabled"
          :class="{ card__btn_active: onActiveBtn(idDough, 0) }"
          @click="onSelectBtn(idDough, 0)"
        />
      </div>
      <div class="card__item card__item_diameter">
        <Button
          v-for="(diameter, idDiameter) in card.diameter"
          :key="idDiameter"
          :button="onOptionBtn(diameter.text)"
          :disabled="diameter.disabled"
          :class="{ card__btn_active: onActiveBtn(idDiameter, 1) }"
          @click="onSelectBtn(idDiameter, 1)"
        />
      </div>
    </div>
    <div class="card__purchase">
      <div class="card__price">
        <h4 class="card__title">{{ card.price }} руб.</h4>
      </div>
      <Button
        :button="btnPay"
        @click="onAdd(card, card.idCard, card.price)"
        :count="card.count"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    card: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      btnPay: {
        type: "Button",
        class: "card__btn card__btn_add",
        text: {
          class: "card__text",
          text: "Добавить",
        },
        iconLeft: {
          class: "bx bx-plus card__icon",
        },
        count: {
          class: "card__count",
        },
      },
    };
  },
  methods: {
    onSelectBtn(idBtn, typeBtn) {
      const options = {
        idCard: this.card.idCard,
        idBtn,
        typeBtn,
      };

      this.$store.commit("setSelectBtn", options);
    },
    onActiveBtn(idBtn, typeBtn) {
      let card = this.card;
      let idActiveBtn = 0;
      if (typeBtn === 0) {
        idActiveBtn = card.idActiveDough;
        return idBtn === idActiveBtn ? true : false;
      } else {
        idActiveBtn = card.idActiveDiameter;
        return idBtn === idActiveBtn ? true : false;
      }
    },
    onAdd(card, idCard, price) {
      if (card.count < card.maxCount) {
        this.$store.dispatch("setCard", { idCard, card });
        this.$store.commit("setAllCountAndPrice", { price, count: 1 });
      }
    },
    onOptionBtn(text) {
      return {
        type: "Button",
        class: "card__btn",
        disabled: false,
        text: {
          class: "card__text",
          text: text,
        },
      };
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.card {
  width: 280px;
  margin-bottom: 30px;
}

.card__img {
  height: 180px;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  background: url("../../assets/image/pizza/1.png") no-repeat center / cover;
}

.card__options {
  background: #f3f3f3;
  border-radius: 5px;
  padding: 5px;
  margin-top: 15px;
}

.card__item {
  display: flex;
  align-items: center;

  &.card__item_diameter {
    margin-top: 7px;
  }

  .card__btn {
    width: 100%;
  }
}

.card__purchase {
  margin-top: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__btn {
  border-radius: 5px;

  &.card__btn_active {
    background: #ffffff;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  }

  &.card__btn_add {
    border-radius: 100px;
    border: 2px solid $color-orange;
    color: $color-orange;

    &:hover {
      background: $color-orange;
      color: #ffffff;

      .card__count {
        background: #ffffff;
        color: $color-orange;
      }
    }
  }
}

.card__icon {
  font-size: 18px;
  margin-left: 2px;
}

.card__count {
  margin-left: 5px;
  font-size: 12px;
  background: $color-orange;
  color: #ffffff;
  border-radius: 50%;
  min-width: 16px;
  min-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 3px 2px 3px;
}
</style>
