import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../../redux/reducers/userReducer';
import './toggleIsAuth.scss';

export default function ToggleIsAuth() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="auxiliary-components">
      <pre>{`user: {isAuth: ${isAuth}}`}</pre>
      <button type="button" onClick={() => dispatch(toggleAuth())}>
        <pre>Toggle isAuth to {`${!isAuth}`} (whith redux)</pre>
      </button>
    </div>
  );
}
