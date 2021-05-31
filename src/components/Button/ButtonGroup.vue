<template>
  <button :type="button.type" :class="button.class" @click="onClick">
    <div v-if="button.partLeft" :class="button.partLeft.class">
      <p v-if="button.partLeft.text" :class="button.partLeft.text.class">
        {{ button.partLeft.text.text }}
      </p>
      <i v-if="button.partLeft.icon" :class="button.partLeft.icon.class"></i>
    </div>
    <div v-if="button.partRight" :class="button.partRight.class">
      <p v-if="button.partRight.text" :class="button.partRight.text.class">
        {{ button.partRight.text.text }}
      </p>
      <i v-if="button.partRight.icon" :class="button.partRight.icon.class"></i>
    </div>
  </button>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    button: {
      type: Object,
      default: {},
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
