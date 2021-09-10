<template>
	<div>
		<test-item :items="items" :isLoading="isLoading" />
		{{ isLoading }}
		<CompletePanel :items="items" />
	</div>
</template>

<script>
// my componets
import TestItem from "./TestItem.vue";
import CompletePanel from "./CompletePanel.vue";

export default {
	setup() {},
	components: {
		TestItem,
		CompletePanel,
	},
	props: {
		items: Array,
	},
};
</script>
