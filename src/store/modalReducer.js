const initialState = {
    showModal: false,
    message: ''
};
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                showModal: true,
                message: action.message
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                showModal: false,
                message: ''
            };
        default:
            return {
                ...state
            }

    }
};
export default modalReducer;
