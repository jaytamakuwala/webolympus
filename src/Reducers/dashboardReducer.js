import { HELLO } from '../Actions/dashboardAction';

const initialState = {
    helloText: "Hello"
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case HELLO:
            return {
                helloText: action.payload
            };

        default:
            return state;
    }
}

export default dashboardReducer;