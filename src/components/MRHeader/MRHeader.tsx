import React, { ReactElement } from "react";

import { LogoIcon } from "../../assets/image";
import HeaderBasket from "./MRHeaderBasket";
import { useStyleMRHeader } from "./style";


/**
 * Main Header component
 */
export default function MRHeader(): ReactElement {
  const classes = useStyleMRHeader();

  return (
    <div className={classes.root}>
      <span className={classes.logo}>
        <LogoIcon />
      </span>
      <HeaderBasket />
    </div>
  );
}
