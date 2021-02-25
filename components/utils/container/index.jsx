import React from "react";

import { SContainer } from "./styles";

function Container({ children, id }) {
  return <SContainer id={id}>{children}</SContainer>;
}

export default Container;
