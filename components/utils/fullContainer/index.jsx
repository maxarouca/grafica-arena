import React from "react";

import { SFullContainer } from "./styles";

function FullContainer({ children, background, backgroundImage }) {
  return (
    <SFullContainer backgroundImage={backgroundImage} background={background}>
      {children}
    </SFullContainer>
  );
}

export default FullContainer;
