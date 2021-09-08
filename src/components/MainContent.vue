<template>
	<div>
		<test-item :items="items" />
	</div>
</template>

<script>
// my componets
import TestItem from "./TestItem.vue";

import { getItems } from "@/hooks/getItems";

export default {
	setup() {
		const { items } = getItems();

		return {
			items,
		};
	},
	components: {
		TestItem,
	},
};
</script>
