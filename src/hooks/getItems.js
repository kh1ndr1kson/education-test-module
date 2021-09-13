import axios from "axios";
import { ref, onMounted } from "vue";

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
			console.log(error.headers);
		}
		finally
		{
			isLoading.value = false;
		}
	};

	if (url !== undefined) onMounted(fetching);

	return {
		isLoading,
		items,
	};
}
