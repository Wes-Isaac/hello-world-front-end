const initState = '';

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COMPLETE_MESSAGE':
      return action.payload.message;
    default:
      return state;
  }
};

export const fetchmessage = () => async (dispatch) => {
  await fetch('http://127.0.0.1:3020/')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
    });
};

export default messageReducer;
