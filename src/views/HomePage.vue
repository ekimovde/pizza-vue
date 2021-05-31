<template>
  <section class="home-page">
    <Toolbar />
    <Grid />
  </section>
</template>

<script>
import Toolbar from "@/components/Toolbar/Toolbar.vue";
import Grid from "@/components/Grid/Grid.vue";
export default {
  name: "HomePage",
  components: {
    Toolbar,
    Grid,
  },
};
</script>
