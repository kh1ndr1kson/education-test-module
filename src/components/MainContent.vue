<template>
	<div>
		<test-item v-for="i in 5" :key="i" />
	</div>
</template>

<script>
// my componets
import TestItem from "./TestItem.vue";

export default {
	setup() {},
	components: {
		TestItem,
	},
};
</script>
