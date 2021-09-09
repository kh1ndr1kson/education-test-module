<template>
  <div>
    <test-item :items="items" :isLoading="isLoading" />
    {{ isLoading }}
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
	props: {
		items: Array
	}
};
</script>
