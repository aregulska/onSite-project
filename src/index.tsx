import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { UiContextProvider } from "./contexts/uiContext.tsx";
// import { Router } from "./router/router.ts";
import { AuthContextProvider } from "./contexts/authContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <UiContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UiContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
