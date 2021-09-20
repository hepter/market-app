import { TextField, TextFieldProps } from "@material-ui/core";
import React, { ReactElement } from "react";

import { useStyleMRTextInput } from "./style";

type sideCardProps = TextFieldProps;

export default function MRSideCard({
  children,
  ...props
}: sideCardProps): ReactElement {
  const classes = useStyleMRTextInput();
  return (
    <div className={classes.root}>
      <TextField
        InputProps={{
          classes: {
            root: classes.textRoot,
            input: classes.textFieldInput,
            notchedOutline: classes.textFieldNotchedOutline,
          },
        }}
        {...(props as any)}
      >
        {children}
      </TextField>
    </div>
  );
}
