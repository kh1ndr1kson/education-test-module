<template>
	<div>
		<test-item :items="items" :isLoading="isLoading" />
		{{ isLoading }}
	</div>
</template>

<script>
// my componets
import TestItem from "./TestItem.vue";

import { getItems } from "@/hooks/getItems";

export default {
	setup() {
		const { isLoading, items } = getItems();

		return {
			isLoading,
			items,
		};
	},
	components: {
		TestItem,
	},
};
</script>
