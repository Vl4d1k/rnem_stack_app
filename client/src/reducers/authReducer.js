let defaultState = null;
let authState = window.localStorage.getItem("auth");
if (authState) {
    defaultState = JSON.parse(authState);
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.payload };
        case "LOGOUT":
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;