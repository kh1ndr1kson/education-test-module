<template>
  <div id="app" class="p-grid">
    <div class="p-col">
      <MainContent />
    </div>
    <div class="p-col-fixed nav-panel-fixed">
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

<style scoped>
.nav-panel-fixed {
  width: 300px;
  height: 100%;
  position: sticky;
  top: 0;
}
</style>
