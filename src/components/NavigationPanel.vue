<template>
	<Timeline :value="items" align="right" class="customized-timeline">
		<template #marker="slotProps">
			<Avatar
				:icon="
					slotProps.item.checked
						? `pi pi-check circle-check`
						: `pi pi-times circle-times`
				"
				:style="
					slotProps.item.checked
						? `background-color: var(--green-500)`
						: `background-color: var(--gray-300)`
				"
				size="small"
				shape="circle"
			/>
		</template>
		<template #content="slotProps">
			<small class="p-text-secondary">{{ slotProps.item.text }}</small>
		</template>
	</Timeline>
</template>

<script>
import Timeline from "primevue/timeline";
import Avatar from "primevue/avatar";

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

		console.log(items);

		return {
			isLoading,
			items,
		};
	},
	name: "NavigationPanel",
	components: {
		Timeline,
		Avatar,
	},
};
</script>

<style>
.circle-check {
	color: var(--gray-100);
}

.circle-times {
	color: var(--gray-500);
}
</style>
