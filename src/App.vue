<template>
  <div id="app" class="app">
    <Header :header="headerOptions" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import { requestData } from "@/mixins/functions";
export default {
  components: {
    Header,
  },
  created() {
    requestData("categories", "categories");
  },
  computed: {
    headerOptions() {
      return this.$route.meta.header;
    },
  },
};
</script>
