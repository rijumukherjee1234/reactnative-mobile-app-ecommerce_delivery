// reducer.js
const initialState = {
    login: 0,
  };
  
  const loginCheck = (state = initialState, action) => {
   
    
    switch (action.type) {
      case 'LOGIN_CHECK':
        return { ...state, login: 1 };
      
      default:
        return state;
    }
   
  };

  export default loginCheck;
  