import * as types from "../actions/types";

const initstate = {
  login: '',
  password:''
}

export function authInfo(state = initstate, action) {
  console.log('incoming action', action);
  var newState = {...state}
  switch (action.type) {
   
    case "LOGIN":
    newState.login = action.value.ID
    newState.password = action.value.key
    break;

    // case types.LOADING:
    //   return {
    //     loading: true,
    //     loggedIn: state.loggedIn,
    //     userInfo: state.userInfo,
    //     token: state.token
    //   };
    // case types.SAVE_USER_INFO:
    //   return {
    //     loading: false,
    //     loggedIn: action.loggedIn,
    //     userInfo: action.userInfo,
    //     token: action.token
    //   };
    default:
      return state;
  }
  return newState
}
