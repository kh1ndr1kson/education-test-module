<template>
  <div id="app" class="p-grid">
    <div class="p-col">
      <main-content :items="compItems" />
    </div>
    <div class="p-col-fixed nav-panel-fixed">
      <navigation-panel :items="compItems" />
    </div>
  </div>
</template>

<script>
// base components from primevue
// ...

// my componets
import MainContent from "./components/MainContent.vue";
import NavigationPanel from "./components/NavigationPanel.vue";

import { computed } from "vue";
import { getItems } from "@/hooks/getItems";

export default {
	setup() {
		// const test_id = Number(
		// 	window.location.href.split("/")[
		// 		window.location.href.split("/").length - 1
		// 	]
		// );

		//const url = `https://eschool.su/api/tests/${test_id}/questions`;

		const { isLoading, items } = getItems();

		const compItems = computed(() => items.value);

		return {
			isLoading,
			items,
			compItems
		};
	},
	name: "App",
	components: {
		MainContent,
		NavigationPanel,
	}
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
