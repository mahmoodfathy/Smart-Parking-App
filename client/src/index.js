import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { FormProvider } from "./Contexts";

ReactDOM.render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById("root")
);
