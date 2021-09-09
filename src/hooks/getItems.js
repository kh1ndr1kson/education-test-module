import axios from "axios";
import {ref, onMounted} from "vue";

export function getItems(url) {
	const isLoading = ref(true),
				items = ref([]);

	const fetching = async () => {
		try
		{
			const response = await axios.get(url);

			items.value = response.data;
		}
		catch (error)
		{
			console.log(error);
		}
		finally
		{
			isLoading.value = false;
		}
	};

	if (url !== undefined)
	onMounted(fetching);

	// const items = [
	// 	{
	// 		title: "Question #1",
	// 		content:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, consequuntur?",
	// 		checked: true,
	// 	},
	// 	{
	// 		title: "Question #2",
	// 		content:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, consequuntur?",
	// 		checked: false,
	// 	},
	// 	{
	// 		title: "Question #3",
	// 		content:
	// 			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, consequuntur?",
	// 		checked: false,
	// 	},
	// ];

	return {
		isLoading,
		items,
	};
}
