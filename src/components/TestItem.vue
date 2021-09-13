<template>
	<Panel
		v-for="question in items"
		:key="question.id"
		:header="question.text"
		style="margin-bottom: 20px"
	>
		<div
			v-for="answer in question.answers"
			:key="answer.id"
			class="p-field-checkbox"
		>
			<Checkbox
				:id="answer.id"
				name="answer_id"
				:value="answer.id"
				v-model="question.checkeds"
			/>
			<label :for="answer.id">{{ answer.text }}</label>
		</div>
	</Panel>
</template>

<script>
import Panel from "primevue/panel";
import Checkbox from "primevue/checkbox";

export default {
	setup() {},
	components: {
		Panel,
		Checkbox,
	},
	props: {
		items: Array,
		isLoading: Boolean,
	},
};
</script>

<style scoped>
.p-field-checkbox:last-child {
	margin-bottom: 0;
}
</style>
