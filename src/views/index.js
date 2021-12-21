import React from "react";
import { Router } from "@reach/router";

import { Main } from "./Main";
import {Greetings} from "./Greetings";
const Routes = () => {
  return (
    <Router>
      <Main path="/*"/>
      <Greetings path="/greetings"/>
    </Router>
  )
}

export { Routes };
export default Routes;