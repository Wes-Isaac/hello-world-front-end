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
  await fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
    });
};

export default messageReducer;
