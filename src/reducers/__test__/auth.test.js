import authReducer from 'reducers/auth';
import { CHANGE_AUTH } from 'actions/types';

it('should handle change CHANGE_AUTH action type', () => {
	const newState = authReducer(false, {
		type: CHANGE_AUTH,
		payload: true
	});

	expect(newState).toEqual(true);
});
