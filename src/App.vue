<template>
  <div id="app" class="p-grid">
    <div class="p-col">
      <MainContent />
    </div>
    <div class="p-col-fixed" style="width: 300px">
      <navigation-panel />
    </div>
  </div>
</template>

<script>
// base components from primevue
// ...

// my componets
import MainContent from "./components/MainContent.vue";
import NavigationPanel from "./components/NavigationPanel.vue";

export default {
  name: "App",
  components: {
    MainContent,
    NavigationPanel,
  },
};
</script>

<style></style>
