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
				@click="clickSaveAnswer(answer.id)"
			/>
			<label :for="answer.id">{{ answer.text }}</label>
		</div>
	</Panel>
</template>

<script>
import Panel from "primevue/panel";
import Checkbox from "primevue/checkbox";
import { ref } from "vue";

import { saveAnswer } from "@/hooks/saveAnswer";

export default {
	setup(props) {
		const localQuestion = ref(props.question);

		const clickSaveAnswer = (id) => {
			// const test_id = Number(
			// 	window.location.href.split("/")[
			// 		window.location.href.split("/").length - 1
			// 	]
			// );

			const url = `https://eschool.su/api/tests/questions/answers/set_result.php`;
			//const url = `https://eschool.su/api/tests/${test_id}/questions`;

			console.log(url, id);

			saveAnswer(url, id);
		};

		return {
			localQuestion,
			clickSaveAnswer,
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
