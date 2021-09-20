import cx from "classnames";
import React, { ReactNode } from "react";
import { useStyleMRLabel } from "./style";

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
   * Bolder text when is `true`
   */
  bold?: boolean;
  /**
   * The color options by predefined colours
   */
  color?: "primary" | "secondary";
}
export default function MRLabel({
  children,
  className,
  color = "primary",
  bold,
  ...rest
}: Props) {
  const classes = useStyleMRLabel();
  const classNameLabel = cx(
    {
      [classes.root]: true,
      [classes.bold]: bold,
      [classes.secondary]: color === "secondary",
    },
    className
  );

  return (
    <div className={classNameLabel} {...rest}>
      {children}
    </div>
  );
}
