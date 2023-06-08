import React from "react";

import { Form } from "../../ui/containers/form/Form.tsx";
import { InlineButton } from "../../ui/components/buttons/inlineButton/InlineButton";
import InfoBox from "../../ui/components/wanings/InfoBox.tsx";

import { useLoginViewController } from "./useLoginViewController";

// CEL KOMPONENTU: wyrenderowanie formularza logowania i rejestracji

export const LoginView = () => {
  //console.log("RENDER: LOGIN VIEW");
  const {
    userData,
    loginError,
    loginProperties,
    registerProperties,
    location,
    handleDataChange,
    handleRegister,
    handleSignIn,
    handleChangeMode,
  } = useLoginViewController();

  return (
    <div className="login-cont">
      {loginError && (
        <div className="login-cont__warning-box">{loginError}</div>
      )}
      <div className="login-info">
        {location === "/register" ? null : <InfoBox />}
      </div>
      <Form
        autofocus
        formStyle={{ variant: "outlined", size: "big" }}
        properties={
          location === "/register" ? registerProperties : loginProperties
        }
        input={userData}
        onChange={handleDataChange}
        onOk={location === "/register" ? handleRegister : handleSignIn}
      />
      <InlineButton
        title={
          location === "/register" ? "Log in to Your Account" : "Create Account"
        }
        action={handleChangeMode}
      />
    </div>
  );
};
