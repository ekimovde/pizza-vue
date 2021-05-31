<template>
  <section class="grid">
    <div class="container">
      <div class="content">
        <h2>
          Все пиццы
        </h2>
        <div class="offer">
          <Card v-for="card in getCards" :key="card.idCard" :card="card" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card/Card.vue";
export default {
  name: "Grid",
  components: {
    Card,
  },
  computed: {
    getCards() {
      return this.$store.getters.getCards;
    },
  },
};
</script>

<style lang="scss">
.grid {
  display: block;
}

.content {
  h2 {
    text-align: left;
  }
}

.offer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;
}

/* 992 - 1200 px */
@media screen and (max-width: 1200px) {
  .offer {
    justify-content: space-around;
  }
}
</style>
