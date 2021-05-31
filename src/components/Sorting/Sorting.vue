<template>
  <div class="sorting" @click.stop="">
    <span class="selected-top">
      <i :class="getActiveIcon" class="selected-top__icon"></i>
      <span class="selected__text">
        Сортировка по:
      </span>
      <a href="#" class="selected-top__btn" draggable="false" @click="onPopup">
        {{ list[sortIndex].title }}
      </a>
    </span>
    <ul class="popup" v-if="popupShow">
      <li class="popup__item" v-for="(item, index) in list" :key="index">
        <Button
          :button="btnOptions(item.text, item.icon)"
          :class="{ popup__btn_active: index === sortIndex }"
          @click="onSelect(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import { saveDataForLocalStorage } from "@/mixins/functions.js";
export default {
  name: "Sorting",
  components: {
    Button,
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      popupShow: false,
      sortIndex: 0,
    };
  },
  created() {
    this.sortIndex = parseInt(localStorage.getItem("sortIndex")) || 0;
  },
  computed: {
    getActiveIcon() {
      let popupShow = this.popupShow;

      let iconClass = popupShow ? "bx bx-caret-down" : "bx bx-caret-up";
      return iconClass;
    },
  },
  methods: {
    btnOptions(text, icon) {
      return {
        type: "Button",
        class: "popup__btn",
        text: {
          class: "popup__text",
          text,
        },
        iconRight: {
          class: icon,
        },
      };
    },
    onPopup() {
      this.popupShow = !this.popupShow;
    },
    onSelect(index) {
      saveDataForLocalStorage("sortIndex", index);
      this.sortIndex = index;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.sorting {
  position: relative;
}

.selected-top {
  display: flex;
  align-items: center;
}

.selected-top__icon {
  display: block;
  font-size: 20px;
}

.selected-top__btn {
  margin-left: 3px;
  color: $color-orange;
  text-decoration-style: dotted;
}

.popup {
  position: absolute;
  top: 30px;
  right: 0px;
  z-index: 100;
  background: #fff;
  width: 130px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  padding: 13px 0px;
}

.popup__btn {
  width: 100%;

  &:hover {
    color: $color-orange;
  }

  &.popup__btn_active {
    background: rgba(254, 95, 30, 0.05);
    color: $color-orange;
    border-radius: 0;
  }
}

.popup__icon {
  font-size: 18px;
  margin-left: 3px;
}

/* 768 - 992 px */
@media screen and (max-width: 992px) {
  .sorting {
    margin-top: 15px;
  }
}
</style>
