<template>
	<div class="p-grid fixed-panel">
		<div class="p-col">
			<ProgressBar :value="percent" style="">
				<span class="progressbar-text">Тест пройден на {{ percent }}%</span>
			</ProgressBar>
		</div>
		<div class="p-col-fixed" style="width: 100%">
			<Button
				label="Завершить тестирование"
				class="p-button-success p-button-lg"
				style="float: right"
				:disabled="percent !== 100"
			/>
		</div>
	</div>
</template>

<script>
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";

import { computed } from "vue";

export default {
	setup(props) {
		const percent = computed(() => {
			const count = props.items.length;
			let checked = 0;

			for (let index in props.items)
				if (props.items[index].checkeds.length > 0) checked++;

			return Math.round((checked * 100) / count);
		});

		return {
			percent,
		};
	},
	components: {
		Button,
		ProgressBar,
	},
	props: {
		items: Array,
	},
};
</script>

<style scoped>
.fixed-panel {
	height: 100%;
	position: sticky;
	bottom: 0;
	background: rgba(255, 255, 255, 0.25);
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
}

.progressbar-text {
	color: white;
	font-weight: 500;
	text-transform: uppercase;
}

/* defaul progress-bar mutations */
.p-progressbar {
	background: #ccc;
}
</style>
