import { Checkbox, Grid } from "@material-ui/core";
import cx from "classnames";
import React, { ReactNode, useCallback } from "react";
import { CheckboxIcon } from "../../assets/image";
import Label from "../MRLabel";
import { colors } from "./../../theme";
import { useStyleMRCheckbox } from "./style";

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
  name: string | number;
  /**
   * The number indicator end of the label
   */
  count: number;
  /**
   * The value whether is checked or not.
   */
  value?: boolean;
  /**
   * Callback fired when the value changes.
   */
  onChange: (name: string | number, status: boolean) => void;
}

export default function MRCheckbox({
  name,
  className,
  onChange,
  count,
  value,
  children,
  ...rest
}: Props) {
  const classes = useStyleMRCheckbox();
  const classNameMRCheckbox = cx(classes.root, className);

  const handleCheckbox = useCallback(
    (e) => {
      if (onChange) {
        onChange(name, e.target?.checked ?? false);
      }
    },
    [onChange, name]
  );

  return (
    <div className={classNameMRCheckbox} {...rest}>
      <Grid container alignItems="center">
        <Grid item>
          <Checkbox
            onChange={handleCheckbox}
            color="default"
            disableRipple
            icon={<CheckboxIcon />}
            checkedIcon={<CheckboxIcon checked color={colors.cyan} />}
            classes={{ root: classes.checkboxRoot }}
            checked={value ?? false}
          />
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Label
                color="secondary"
                className={cx(classes.labelBase, classes.label)}
              >
                {children}
              </Label>
            </Grid>
            <Grid item>
              <Label
                color="secondary"
                className={cx(classes.labelBase, classes.labelCount)}
              >
                &nbsp;({count})
              </Label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
