export default function(state = [], action) {
    switch (action.type) {
        case "APPLY_USERS":
            return action.payload;
        default:
            return state;
    }
}
