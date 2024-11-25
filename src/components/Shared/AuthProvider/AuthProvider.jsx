import { getAuth } from "firebase/auth";
import app from "../../AuthenTication/Firebase/Firebase";
import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //   const auth = getAuth(app);

  const authData = { name: "Selim" };

  const authInfo = {
    authData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
