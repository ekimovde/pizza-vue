<template>
  <section class="toolbar">
    <div class="container">
      <div class="content">
        <div class="categories">
          <Button
            v-for="category in getCategories"
            :key="category.id"
            :button="btnOptions(category.text)"
            :class="(getCategoryActive = category.id)"
            @click="onCategorySelect(category.id)"
          />
        </div>
        <Sorting :list="list" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Sorting from "@/components/Sorting/Sorting.vue";
export default {
  name: "Toolbar",
  components: {
    Button,
    Sorting,
  },
  data() {
    return {
      categoryIndex: 0,
      index: 0,
      list: [
        {
          title: "Цене",
          text: "Цена:",
          icon: "bx bx-sort-up popup__icon",
        },
        {
          title: "Цене",
          text: "Цена:",
          icon: "bx bx-sort-down popup__icon",
        },
      ],
    };
  },
  created() {
    this.categoryIndex = parseInt(localStorage.getItem("categoryIndex")) || 0;
  },
  computed: {
    getCategories() {
      return this.$store.getters.getCategories;
    },
    getCategoryActive: {
      set(index) {
        this.index = index;
      },
      get() {},
    },
  },
  methods: {
    btnOptions(text) {
      return {
        type: "Button",
        class: "config__btn",
        text: {
          class: "config__text",
          text,
        },
      };
    },
    onCategorySelect(index) {},
  },
};
</script>

<style lang="scss">
.toolbar {
  .content {
    padding: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.categories {
  display: flex;
  align-items: center;
  max-width: 900px;
  overflow-x: auto;
  padding-bottom: 20px;
}

.config__btn {
  background: #f9f9f9;
  margin-right: 8px;

  &:last-child {
    margin-right: 0px;
  }

  &.config__btn_active {
    background: #282828;
    color: #fff;
  }
}

/* 768 - 992 px */
@media screen and (max-width: 992px) {
  .toolbar {
    .content {
      padding: 30px 0px 10px 0px;
      flex-direction: column;
    }
  }

  .categories {
    max-width: 500px;
  }
}

/* 576 - 768 px */
@media screen and (max-width: 768px) {
  .categories {
    max-width: 400px;
  }
}

/* 320 - 576 px */
@media screen and (max-width: 576px) {
  .categories {
    max-width: 270px;
  }
}
</style>
