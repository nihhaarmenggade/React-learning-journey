import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h3>Please login first</h3>;

  return <h3>Welcome {user.username}</h3>;
}

export default Profile;