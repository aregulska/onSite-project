import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.js";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { UiContextProvider } from "./contexts/uiContext.tsx";
import { AuthContextProvider } from "./contexts/authContext.tsx";
import "./scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <UiContextProvider>
          <RouterProvider router={router} />
        </UiContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
