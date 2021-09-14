<template>
	<div v-if="!isLoading">
		{{ isLoading }}
		<test-item v-for="item in items" :key="item.id" :question="item" />
		<CompletePanel :items="items" />
	</div>
	<div v-else>
		<SkeletonPanel />
	</div>
</template>

<script>
// my componets
import TestItem from "./TestItem.vue";
import CompletePanel from "./CompletePanel.vue";

import SkeletonPanel from "./skeletons/SkeletonPanel.vue";

export default {
	setup() {
		console.log("MainContent");

		//const compItems = computed(() => props.items);

		return {
			//compItems,
		};
	},
	components: {
		TestItem,
		CompletePanel,
		SkeletonPanel,
	},
	props: {
		items: Array,
		isLoading: Boolean,
	},
};
</script>
