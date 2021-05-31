<template>
  <button :type="button.type" :class="button.class" @click="onClick">
    <i v-if="button.iconLeft" :class="button.iconLeft.class"></i>
    <p v-if="button.text" :class="button.text.class">
      {{ button.text.text }}
    </p>
    <i v-if="button.iconRight" :class="button.iconRight.class"></i>
    <span v-if="count > 0" :class="button.count.class">
      {{ count }}
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    button: {
      type: Object,
      default: {},
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
button {
  background: transparent;
  padding: 10px 20px;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  border-radius: 50px;
  transition: all 0.15s ease;

  &:focus {
    outline: none;
  }
}
</style>
