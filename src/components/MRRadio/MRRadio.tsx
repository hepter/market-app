import { Grid, Radio } from "@material-ui/core";
import cx from "classnames";
import React, { ReactNode } from "react";
import { RadioIcon } from "../../assets/image";
import { colors } from "../../theme";
import Label from "../MRLabel";
import { useStyleMRRadio } from "./style";

interface Props {
  /**
   * The children element
   */
  children: ReactNode;
  /**
   * The classname on tag `div` of the root item.
   */
  className?: string;
  /**
   * The name will be passed at first argument when onChange is fired
   */
  name?: string | number;
  /**
   * The value whether is checked or not.
   */
  value?: boolean;
  /**
   * Callback fired when the value changes.
   */
  onChange: (e: any) => void;
}

export default function MRRadio({
  children,
  className,
  value,
  onChange,
  ...rest
}: Props) {
  const classes = useStyleMRRadio();
  const classNameMRRadio = cx(classes.root, className);

  return (
    <div className={classNameMRRadio} {...rest}>
      <Grid container alignItems="center">
        <Grid item>
          <Radio
            checked={value ?? false}
            color="default"
            disableRipple
            icon={<RadioIcon color={colors.radioBorder} />}
            checkedIcon={<RadioIcon checked color={colors.cyan} />}
            classes={{ root: classes.radioRoot }}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <Label color="secondary">{children}</Label>
        </Grid>
      </Grid>
    </div>
  );
}
