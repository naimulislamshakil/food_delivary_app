import axios from 'axios';
import { Dispatch } from 'redux';
import {
	RegisterDispatchType,
	RegisterUesr,
	REGISTER_FAIL,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from '../ActionType/RegisterActionType';

export const RegisterAction =
	(user: RegisterUesr) => async (dispatch: Dispatch<RegisterDispatchType>) => {
		try {
			dispatch({
				type: REGISTER_LOADING,
			});

			const res = await axios.post(
				'https://food-delevary.onrender.com/api/v1/user',
				user
			);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
			});
		}
	};
