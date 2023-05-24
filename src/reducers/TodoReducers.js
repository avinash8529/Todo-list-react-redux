export const TodoReducer = (state = { todos: [] }, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return { todos: action.payload };

        case "REMOVE_TODO":
            return { todos: [] };

        default:
            return state;
    }
};