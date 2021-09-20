import React, { ReactElement } from "react";
import Label from "../MRLabel";
import { useStyleMRFooter } from "./style";

/**
 * Main Footer component
 */
export default function MRFooter(): ReactElement {
  const classes = useStyleMRFooter();

  return (
    <Label className={classes.root}>
      ©{new Date().getFullYear()} {"Market"}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy
      Policy
    </Label>
  );
}
