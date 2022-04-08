import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from './redux/reducers/messages';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmessage());
  }, []);

  const message = useSelector((state) => state.messageReducer);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {' '}
        {message}
      </div>
    </div>
  );
};

export default Greeting;
