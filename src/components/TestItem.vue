<template>
	<Panel :header="localQuestion.text" style="margin-bottom: 20px">
		<div
			v-for="answer in localQuestion.answers"
			:key="answer.id"
			class="p-field-checkbox"
		>
			<Checkbox
				:id="answer.id"
				name="answer_id"
				:value="answer.id"
				v-model="localQuestion.checkeds"
			/>
			<label :for="answer.id">{{ answer.text }}</label>
		</div>
	</Panel>
</template>

<script>
import Panel from "primevue/panel";
import Checkbox from "primevue/checkbox";
import { ref } from "vue";

export default {
	setup(props) {
		const localQuestion = ref(props.question);

		return {
			localQuestion,
		};
	},
	components: {
		Panel,
		Checkbox,
	},
	props: {
		question: Object,
	},
};
</script>

<style scoped>
.p-field-checkbox:last-child {
	margin-bottom: 0;
}
</style>
