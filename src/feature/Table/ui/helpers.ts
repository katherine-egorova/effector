import {createEffect} from "effector";
import {fetchUsers} from "@/api";

export const fetchUsersFx = createEffect(async ({results, page}: {results: number, page: number}) => {
	console.log('fetching');
	const response = await fetchUsers({results, page});
	return response.results;
});
