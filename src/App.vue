<template>
  <div id="app">
    <navigation-panel />
  </div>
</template>

<script>
// base components from primevue
// ...

// my componets
import NavigationPanel from "./components/NavigationPanel.vue";

export default {
  name: "App",
  components: {
    NavigationPanel,
  },
};
</script>

<style></style>
