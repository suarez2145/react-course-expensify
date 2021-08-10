
// did not name this default export function so we name it authReducer in the configureStore.js file as an import
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN' :
            // if the type of case is LOGIN then we are returning an object with the users uid 
            return {
                uid: action.uid
            };
            // if the case is LOGOUT we return an empty object 
        case 'LOGOUT':
            return {};
        default:
            return state
    }
}