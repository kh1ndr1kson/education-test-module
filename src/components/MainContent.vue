<template>
	{{ compItems }}
	<div v-if="!isLoading">
		{{ isLoading }}
		<test-item :items="compItems" />
		<!-- <CompletePanel :items="compItems" /> -->
	</div>
	<div v-else>
		<SkeletonPanel />
	</div>
</template>

<script>
// my componets
import TestItem from "./TestItem.vue";
//import CompletePanel from "./CompletePanel.vue";

import SkeletonPanel from "./skeletons/SkeletonPanel.vue";
import { computed } from "vue";

export default {
	setup(props) {
		console.log("MainContent", props.items);

		const compItems = computed(() => props.items);

		return {
			compItems,
		};
	},
	components: {
		TestItem,
		//CompletePanel,
		SkeletonPanel,
	},
	props: {
		items: Array,
		isLoading: Boolean,
	},
};
</script>
