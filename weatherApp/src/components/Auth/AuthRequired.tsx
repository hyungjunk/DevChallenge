import React, { useEffect, useRef } from "react";
import Login from "./Login";
import { useStore } from "../../stores/storeContext";
import { observer } from "mobx-react";

const AuthRequired: React.FC = observer(({ children }) => {
  const { authStore } = useStore();
  const isLoggedIn = useRef(false);
  useEffect(() => {
    authStore.init();
    const hasLoggedin = window.localStorage.getItem("glogin");
    if (hasLoggedin === "yes") {
      isLoggedIn.current = true;
      authStore.login("y");
    }
  }, [isLoggedIn.current]);

  if (authStore.isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Login />;
  }
});

export default AuthRequired;
