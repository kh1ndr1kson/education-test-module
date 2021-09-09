<template>
	<div v-if="!isLoading">
		<Panel
			v-for="item in items"
			:key="item.id"
			:header="item.text"
			style="margin-bottom: 20px"
		>
			<div
				v-for="answer in item.answers"
				:key="answer.id"
				class="p-field-checkbox"
			>
				<Checkbox
					:id="answer.id"
					name="answer_id"
					:value="answer.id"
					v-model="questionsReady"
				/>
				<label :for="answer.id">{{ answer.text }}</label>
			</div>
		</Panel>
	</div>
	<div v-else>
		<SkeletonPanel />
	</div>
</template>

<script>
import Panel from "primevue/panel";
import Checkbox from "primevue/checkbox";

import SkeletonPanel from "./skeletons/SkeletonPanel.vue";
//import { ref } from "vue";
import { getQuestionsReady } from "@/hooks/getQuestionsReady";

export default {
	setup() {
		//const questionsReady = ref([]);

		const { questionsReady } = getQuestionsReady();

		return {
			questionsReady,
		};
	},
	components: {
		Panel,
		Checkbox,
		SkeletonPanel,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
		isLoading: {
			type: Boolean,
		},
	},
};
</script>

<style scoped>
.p-field-checkbox:last-child {
	margin-bottom: 0;
}
</style>
