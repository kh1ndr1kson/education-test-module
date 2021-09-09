<template>
  <div v-if="!isLoading">
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
  </div>
  <div v-else>
    <SkeletonPanel />
  </div>
</template>

<script>
import Panel from "primevue/panel";
import Checkbox from "primevue/checkbox";

import SkeletonPanel from "./skeletons/SkeletonPanel.vue";

export default {
	setup() {

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
