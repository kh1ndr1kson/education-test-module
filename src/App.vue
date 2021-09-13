<template>
	<div id="app" class="p-grid">
		{{ compItems }}
		<div class="p-col">
			<main-content :items="compItems" :isLoading="isLoading" />
		</div>
		<div class="p-col-fixed nav-panel-fixed">
			<!-- <navigation-panel :items="compItems" /> -->
		</div>
	</div>
</template>

<script>
// base components from primevue
// ...

// my componets
import MainContent from "./components/MainContent.vue";
//import NavigationPanel from "./components/NavigationPanel.vue";

//import { computed } from "vue";
import { getItems } from "@/hooks/getItems";

export default {
	setup() {
		// const test_id = Number(
		// 	window.location.href.split("/")[
		// 		window.location.href.split("/").length - 1
		// 	]
		// );

		const url = `https://eschool.su/api/tests/questions/get_items.php`;
		//const url = `https://eschool.su/api/tests/${test_id}/questions`;

		const { isLoading, items } = getItems(url);

		const compItems = items;

		return {
			isLoading,
			compItems,
		};
	},
	name: "App",
	components: {
		MainContent,
		//	NavigationPanel,
	},
};
</script>

<style scoped>
.nav-panel-fixed {
	width: 400px;
	height: 100%;
	position: sticky;
	top: 0;
}
</style>
