import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// TYPESCRIPT
import {
  loginProperties,
  registerProperties,
} from "../../store/users/usersMeta";

import {
  registerUser,
  signInUser,
} from "../../environments/firebase/firebase-auth";

import { User, initialUserState } from "../../store/users/usersMeta";

export const useLoginViewController = () => {
  const [userData, setUserData] = useState<User>(initialUserState);
  const [loginError, setLoginError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation().pathname;

  function handleChangeMode() {
    // //console.log("CONTROLLER: CHANGE MODE");
    if (location === "/register") {
      navigate("/");
    } else {
      navigate("/register");
    }
  }
  function handleDataChange(property: string, value: any) {
    // //console.log("CONTROLLER: CHANGE");
    setUserData((prev) => ({ ...prev, [property]: value }));
  }
  function handleDataReset() {
    // //console.log("CONTROLLER: RESET");
    setUserData(initialUserState);
  }

  async function handleRegister() {
    //console.log("CONTROLLER: REGISTER");
    try {
      await registerUser(userData);
      setUserData(initialUserState);
      navigate("/projects");
    } catch (error: any) {
      //console.log("ERROR", error.message, error.code);
      if (error.code === "auth/email-already-in-use") {
        setLoginError(
          "This email address is already in use. Please check if you entered proper data."
        );
      } else if (error.code === "auth/invalid-email") {
        setLoginError(
          "This is not a valid email address. Please check if you entered proper data."
        );
      } else if (error.code === "auth/weak-password") {
        setLoginError(
          "Your password is too weak. Please check if you entered proper data."
        );
      } else if (error.code === "auth/operation-not-allowed") {
        setLoginError(
          "This operation is not allowed. Please contact the administrator."
        );
      } else {
        setLoginError(
          "Something went wrong. Please check if you entered proper data."
        );
      }
    }
  }

  async function handleSignIn() {
    //console.log("CONTROLLER: SIGN IN");
    setLoginError(null);
    try {
      await signInUser(userData.email, userData.password);
      setUserData(initialUserState);
      navigate("/projects");

      // //console.log("USER", user);
    } catch (error: any) {
      // //console.log("ERROR", error.message, error.code);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setLoginError(
          "Your email and password do not match our records. Please check if you entered proper data."
        );
      } else if (error.code === "auth/invalid-email") {
        setLoginError(
          "This is not a valid email address. Please check if you entered proper data."
        );
      } else if (error.code === "auth/user-disabled") {
        setLoginError(
          "Your account has been disabled. Please contact the administrator."
        );
      } else if (error.code === "auth/too-many-requests") {
        setLoginError(
          "Too many unsuccessful login attempts. Please try again later."
        );
      } else {
        setLoginError(
          "Something went wrong. Please check if you entered proper data."
        );
      }
    }
  }
  return {
    loginError,
    loginProperties,
    registerProperties,
    userData,
    location,
    handleChangeMode,
    handleDataChange,
    handleDataReset,
    handleRegister,
    handleSignIn,
  };
};
