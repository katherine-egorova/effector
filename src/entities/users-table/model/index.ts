import { IUserData } from "@/shared/interfaces";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { fetchUsers } from "../api";

const fetchUsersFx = createEffect(async ({results, page}: {results: number, page: number}) => {
	console.log('fetching');
	const response = await fetchUsers({results, page});
	return response.results;
});

const addData = createEvent<IUserData[]>();
const loadData = createEvent<boolean>();

export const $data = createStore<IUserData[]>([])
  .on(addData, (_, newData) => newData)
  .on(fetchUsersFx.doneData, (_, data) => data);

export const $loading = createStore(false)
  .on(loadData, (_, isLoading) => isLoading)
  .on(fetchUsersFx.finally, () => false);

export const Gate = createGate();

sample({ clock: Gate.open, target: fetchUsersFx, fn: () => ({ results: 10, page: 1 }) });
sample({ clock: Gate.close, target: loadData.prepend(() => false) });
