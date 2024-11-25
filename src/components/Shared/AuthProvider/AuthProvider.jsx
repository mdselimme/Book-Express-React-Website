import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../AuthenTication/Firebase/Firebase";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const authData = { name: "Selim" };

  const createUserByEmailAndPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  console.log(user);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("sign in");
      } else {
        setUser(null);
      }
    });
    return () => unsubscribed();
  }, [auth]);

  const authInfo = {
    user,
    auth,
    authData,
    createUserByEmailAndPass,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
