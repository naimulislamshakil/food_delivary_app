export const STORE_FAIL = 'STORE_FAIL';
export const STORE_LOADING = 'STORE_LOADING';
export const STORE_SUCCESS = 'STORE_SUCCESS';

export type StoreByLocation = {
	status: string;
	message: string;
	result: {
		result: [
			{
				_id: string;
				name: string;
				location: string;
				tag: string[];
				category: string;
				imgUrl: string;
				status: string;
			}
		];
		paiganation: number;
	};
};

export interface storeLoading {
	type: typeof STORE_LOADING;
}
export interface storeFail {
	type: typeof STORE_FAIL;
}
export interface storeSuccess {
	type: typeof STORE_SUCCESS;
	payload: StoreByLocation;
}

export type StoreDispatchType = storeLoading | storeFail | storeSuccess;