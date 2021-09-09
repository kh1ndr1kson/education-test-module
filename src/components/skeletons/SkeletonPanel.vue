<template>
	<Panel v-for="i in 3" :key="i" style="margin-bottom: 20px">
		<template #header>
			<Skeleton width="75%" height="1.5rem" />
		</template>
		<div v-for="j in 4" :key="j" class="p-field-checkbox">
			<Skeleton width="55%" height="1rem" />
		</div>
	</Panel>
</template>

<script>
import Panel from "primevue/panel";
import Skeleton from "primevue/skeleton";

export default {
	setup() {},
	components: {
		Panel,
		Skeleton,
	},
};
</script>

<style scoped>
.p-field-checkbox:last-child {
	margin-bottom: 0;
}
</style>
