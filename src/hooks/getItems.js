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
	setTimeout(()=> isLoading.value = false, 4000);
	items.value = [{"id":"7","test_id":"3","orders":"1","image":"","text":"qwe","status":"1","sdate":"2021-05-20 18:01:44","answers":[{"id":"11","orders":"1","image":"","question_id":"7","text":"qwe","success":"1","status":"1","sdate":"2021-05-20 18:01:55"}]},{"id":"10","test_id":"1","orders":"1","image":"","text":"qwe","status":"1","sdate":"2021-06-02 22:12:54","answers":[{"id":"14","orders":"1","image":"","question_id":"10","text":"qwe","success":"0","status":"1","sdate":"2021-06-02 22:13:24"},{"id":"15","orders":"3","image":"","question_id":"10","text":"qwe","success":"0","status":"1","sdate":"2021-06-02 22:13:41"},{"id":"16","orders":"2","image":"","question_id":"10","text":"qwe","success":"1","status":"1","sdate":"2021-06-02 22:13:51"}]},{"id":"11","test_id":"1","orders":"2","image":"","text":"qwe","status":"1","sdate":"2021-06-02 22:42:57","answers":[{"id":"17","orders":"1","image":"","question_id":"11","text":"qwe","success":"1","status":"1","sdate":"2021-06-02 22:44:02"},{"id":"18","orders":"2","image":"","question_id":"11","text":"qwe","success":"1","status":"1","sdate":"2021-06-02 22:44:18"},{"id":"19","orders":"3","image":"","question_id":"11","text":"qwe","success":"0","status":"1","sdate":"2021-06-02 22:44:31"},{"id":"20","orders":"4","image":"","question_id":"11","text":"qwe","success":"0","status":"1","sdate":"2021-06-02 22:44:46"}]}];

	return {
		isLoading,
		items,
	};
}
