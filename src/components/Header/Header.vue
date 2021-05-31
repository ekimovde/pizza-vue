<template>
  <header class="header">
    <div class="container">
      <div class="content">
        <div class="logo">
          <router-link to="/" class="logo__link" draggable="false">
            <div class="logo__img"></div>
            <div class="logo__info">
              <h3 class="logo__title">
                Alpachino pizza
              </h3>
              <p class="logo__text">
                Самая вкусная пицца во вселенной
              </p>
            </div>
          </router-link>
        </div>
        <ButtonGroup
          v-if="header.basket"
          :button="getBtnBasket"
          @click="onBasket"
        />
      </div>
    </div>
  </header>
</template>

<script>
import ButtonGroup from "@/components/Button/ButtonGroup.vue";
export default {
  name: "Header",
  components: {
    ButtonGroup,
  },
  props: {
    header: {
      type: Object,
      default: {
        basket: true,
      },
    },
  },
  computed: {
    getBtnBasket() {
      const { allCount, allPrice } = this.$store.getters.getAllCountAndPrice;
      const btnBasket = {
        type: "Button",
        class: "button-group",
        partLeft: {
          class: "button-group__part button-group__part_left",
          text: {
            class: "button-group__text",
            text: allPrice,
          },
          icon: {
            class: "bx bx-ruble button-group__icon",
          },
        },
        partRight: {
          class: "button-group__part button-group__part_right",
          text: {
            class: "button-group__text",
            text: allCount,
          },
          icon: {
            class: "bx bx-cart-alt button-group__icon",
          },
        },
      };
      return btnBasket;
    },
  },
  methods: {
    onBasket() {
      this.$router.push("/basket");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.header {
  padding: 49px 0px 20px 0px;
  border-bottom: 2px solid #f7f7f7;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.logo {
  display: flex;
  align-items: center;
}

.logo__link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo__img {
  width: 38px;
  height: 38px;
  background: url("../../assets/image/logo.png") no-repeat center / cover;
}

.logo__info {
  margin-left: 17px;
}

.logo__title {
  text-align: left;
}

.logo__text {
  color: #7b7b7b;
  font-size: 16px;
}

.button-group {
  color: #fff;
  background: $color-orange;
  border: 2px solid transparent;
  border-radius: 50px;
  font-size: 16px;

  &:hover {
    color: $color-orange;
    background-color: #fff;
    border-color: $color-orange;

    .button-group__part {
      &.button-group__part_left {
        border-right-color: $color-orange;
      }
    }
  }
}

.button-group__icon {
  font-weight: 700;
}

.button-group__part {
  display: flex;
  align-items: center;

  &.button-group__part_left {
    margin-right: 13px;
    padding-right: 13px;
    border-right: 2px solid #fff;
  }
}

/* 576 - 768 px */
@media screen and (max-width: 768px) {
  .header {
    padding: 40px 0px 30px 0px;

    .logo__text {
      font-size: 12px;
    }
  }
}

/* 320 - 576 px */
@media screen and (max-width: 576px) {
  .logo {
    margin-left: 15px;
  }

  .logo__info {
    display: none;
  }
}
</style>
