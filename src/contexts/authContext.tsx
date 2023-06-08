import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../environments/firebase/firebase-config";

const authInitialContext = { user: null };
const authContext = createContext(authInitialContext);

type UserContext = {
  user: any;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserContext>(authInitialContext);

  useEffect(() => {
    //console.log("SUBSCRIBE TO AUTH CHANGE");
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //console.log("AUTH CHANGE", userAuth);
        setUser({ user: userAuth });
      } else {
        setUser(authInitialContext);
      }
    });
    return () => {
      //console.log("UNSUBSCRIBE FROM AUTH CHANGE");
      unsubscribe();
    };
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(authContext);
  //console.log("AUTH CONTEXT CHANGE", ctx);
  if (!ctx) throw Error("No Auth context provider");
  return ctx;
};
