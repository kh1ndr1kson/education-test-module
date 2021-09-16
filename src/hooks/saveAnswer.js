import axios from "axios";

export function saveAnswer(url, id) {
	try
	{
		const response = axios({
			method: "get",
			url: url,
			data: { answer_id: id }
		});
		console.log(response);
	}
	catch (error)
	{
		console.log(error.headers);
	}
}
