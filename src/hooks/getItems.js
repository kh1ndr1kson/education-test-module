//import axios from "axios";
import { ref } from "vue";

export function getItems() {
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
	setTimeout(()=> isLoading.value = false, 1000);
	items.value = [
		{
			"id": "1",
			"image": "",
			"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum?",
			"answers":
			[
				{
					"id": "11",
					"image": "",
					"text": "Dolor sit amet consectetur adipisicing elit.",
				}
			],
			"checkeds": ["11"]
		},
		{
			"id": "2",
			"image": "",
			"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum?",
			"answers":
			[
				{
					"id": "12",
					"image": "",
					"text": "Dolor sit amet consectetur adipisicing elit.",
				}
			],
			"checkeds": []
		},
		{
			"id": "3",
			"image": "",
			"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum?",
			"answers":
			[
				{
					"id": "13",
					"image": "",
					"text": "Dolor sit amet consectetur adipisicing elit.",
				}
			],
			"checkeds": []
		},
		{
			"id": "4",
			"image": "",
			"text": "Вопрос №4",
			"answers":
			[
				{
					"id": "14",
					"image": "",
					"text": "Ответ №1",
				},
				{
					"id": "15",
					"image": "",
					"text": "Ответ №2",
				},
				{
					"id": "16",
					"image": "",
					"text": "Ответ №3",
				}
			],
			"checkeds": ["15"]
		},
		{
			"id": "5",
			"image": "",
			"text": "Вопрос №5",
			"answers":
			[
				{
					"id": "17",
					"image": "",
					"text": "Ответ №3",
				},
				{
					"id": "18",
					"image": "",
					"text": "Ответ №3",
				}
			],
			"checkeds": ["17"]
		}
];

	return {
		isLoading,
		items,
	};
}
