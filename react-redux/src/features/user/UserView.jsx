import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  const content = user.user;
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className=''>
      <h1>List of user</h1>
      {user.loading && <div> Loading... </div>}
      {!user.loading && user.error ? <div> error: {user.error}</div> : null}
      <ol>
        {!user.loading && content.length > 0
          ? content.map(({ userId, title }) => {
              return <li key={userId + title}>{title}</li>;
            })
          : null}
      </ol>
    </div>
  );
};

export default UserView;
