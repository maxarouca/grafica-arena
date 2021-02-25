import React from "react";

import { SButton, SButtonT } from "./styles";

function Button({ href, transparent, children, color, target }) {
  if (transparent) {
    return (
      <SButtonT color={color} href={href} target={target}>
        {children}
      </SButtonT>
    );
  }
  return (
    <SButton color={color} href={href} target={target}>
      {children}
    </SButton>
  );
}

export default Button;
