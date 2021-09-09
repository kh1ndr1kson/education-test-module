//import axios from "axios";
import { ref } from "vue";

export function getQuestionsReady() {
	const isLoading = ref(true),
				items = ref([]);

	// const fetching = async () => {
	// 	try
	// 	{
	// 		const response = await axios.get(url);

	// 		items.value = response.data;
	// 	}
	// 	catch (error)
	// 	{
	// 		console.log(error);
	// 	}
	// 	finally
	// 	{
	// 		isLoading.value = false;
	// 	}
	// };

	// if (url !== undefined) onMounted(fetching);

	items.value = [
		{
			id: 1,
			answers: [1]
		},
		{
			id: 2,
			answers: []
		},
		{
			id: 3,
			answers: []
		},
	]

	return {
		isLoading,
		items,
	};
}
