<template>
	<Timeline :value="items" align="alternate" class="customized-timeline">
		<template #marker="slotProps">
			<transition name="slide-fade" mode="out-in">
				<Avatar
					v-if="slotProps.item.checkeds.length > 0"
					icon="pi pi-check circle-check"
					style="background-color: var(--green-500)"
					size="small"
					shape="circle"
				/>
				<Avatar
					v-else
					icon="pi pi-times circle-times"
					style="background-color: var(--gray-300)"
					size="small"
					shape="circle"
				/>
			</transition>
		</template>
		<template #content="slotProps">
			<small class="p-text-secondary">{{ slotProps.item.text }}</small>
		</template>
	</Timeline>
</template>

<script>
import Timeline from "primevue/timeline";
import Avatar from "primevue/avatar";

import { computed } from "vue";

export default {
	setup(props) {
		console.log("NavPanel", props);

		const compItems = computed(() => props.items);

		return {
			compItems,
		};
	},
	name: "NavigationPanel",
	components: {
		Timeline,
		Avatar,
	},
	props: {
		items: Array,
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

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.5s ease-in-out;
}

.slide-fade-enter {
	transform: scale(1);
	opacity: 0;
}
.slide-fade-leave-to {
	transform: scale(0.75);
	opacity: 0;
}
</style>
