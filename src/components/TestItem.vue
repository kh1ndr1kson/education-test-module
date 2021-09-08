<template>
	<div>
		<Panel
			v-for="item in items"
			:key="item.title"
			:header="item.title"
			style="margin-bottom: 20px"
		>
			Checkboxes and radio btns...
		</Panel>
	</div>
</template>

<script>
import Panel from "primevue/panel";

export default {
	setup() {},
	components: {
		Panel,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>
