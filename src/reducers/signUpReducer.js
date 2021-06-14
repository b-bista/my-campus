export const initialState = null;

export const signUpReducer = (state, action) => {
  if (action.type == "CLEAR") {
    return null;
  }
  if (action.type == "ADD_USER_TYPE") {
    return {
      ...state,
      userType: action.payload,
    };
  }
  if (action.type == "ADD_STUDENT_INFO") {
    let newState = { ...state };

    for (let data in action.payload) {
      newState[data] = action.payload[data];
    }

    return newState;
    // return {
    //   ...state,
    //   name: action.payload.name,
    //   gender: action.payload.gender,
    // };
  }
  if (action.type == "ADD_ORG_INFO") {
    let newState = { ...state };

    for (let data in action.payload) {
      newState[data] = action.payload[data];
    }

    return newState;
  }
  if (action.type == "ADD_AUTH_INFO") {
    let newState = { ...state };

    for (let data in action.payload) {
      newState[data] = action.payload[data];
    }

    return newState;
    // return {
    //   ...state,
    //   email: action.payload.email,
    //   username: action.payload.username,
    //   password: action.payload.password,
    // };
  }
  if (action.type == "ADD_PIC") {
    return {
      ...state,
      profilePic: action.payload,
    };
  }
  return state;
};
