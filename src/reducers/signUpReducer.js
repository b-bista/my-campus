export const initialState = null;

export const reducer = (state, action) => {
  if (action.type == "ADD_USER_TYPE") {
    return {
      ...state,
      userType: action.payload.userType,
    };
  }
  if (action.type == "ADD_STUDENT_INFO") {
    return {
      ...state,
      name: action.payload.name,
      gender: action.payload.gender,
    };
  }
  if (action.type == "ADD_ORG_INFO") {
    return {
      ...state,
      name: action.payload.name,
      about: action.payload.gender,
      banner: action.payload.banner,
    };
  }
  if (action.type == "ADD_AUTH_INFO") {
    return {
      ...state,
      email: action.payload.email,
      username: action.payload.username,
      password: action.payload.password,
    };
  }
  return state;
};
