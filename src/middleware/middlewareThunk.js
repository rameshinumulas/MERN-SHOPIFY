import axiosInstance from './axiosInstance';

export const middlewareThunk = (store) => (next) => async (action) => {
    const { dispatch } = store;
    // Call the next middleware in the chain or the reducer
    const result = next(action);

    // Check if payload is defined and is an object
    if (action.payload?.url) {
        try {
            dispatch({ type: action.payload?.pending });
            // Make the API call using axiosInstance
            const response = await axiosInstance({ ...action.payload });

            // Dispatch a success action with the response payload
            dispatch({ type: action.payload?.success, payload: response.data });
        } catch (error) {
            // Dispatch a failure action with the error payload
            dispatch({ type: action.payload?.error, payload: error.message });
        }
    }

    // Return the result of the next middleware or reducer
    return result;
};
