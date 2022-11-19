import {combineReducers, legacy_createStore as createStore} from "redux";


let reducers = combineReducers({
    postPage: postPageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer
});



let store = createStore(reducers);




export default store;