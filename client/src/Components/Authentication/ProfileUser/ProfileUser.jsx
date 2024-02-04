import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  //A su vez, puedo extraer propiedades de 'user':
  //const { name, picture, email } = user;
  // console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <small>{user.name}, </small>
        <small>{user.email}</small>
      </div>
    )
  );
};

export default Profile;