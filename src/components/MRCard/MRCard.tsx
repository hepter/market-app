import cx from "classnames";
import React, { ReactNode } from "react";

import { useStyleMRCard } from "./style";

type T = { [key: string]: any };
export interface Props extends T {
  /**
   * The children element
   */
  children: ReactNode;
  /**
   * If `true`, the element will take a darker shadow.
   */
  darkShadow?: boolean;
  /**
   * The classname on tag `div` of the root item.
   */
  className?: string;
  /**
   * If `true`, the element will take up the full width of its container.
   */
  fullWidth?: boolean;
}

export default function MRCard({
  children,
  className,
  fullWidth,
  darkShadow,
  ...rest
}: Props) {
  const classes = useStyleMRCard();

  return (
    <div
      className={cx(classes.root, className, {
        [classes.fullWidth]: fullWidth !== undefined,
        [classes.darkShadow]: darkShadow !== undefined,
      })}
      {...rest}
    >
      <div className={cx(classes.innerRoot)}>{children}</div>
    </div>
  );
}
