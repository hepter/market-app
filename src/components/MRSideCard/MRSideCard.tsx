import React, { ReactElement, ReactNode } from "react";
import Label from "../MRLabel";
import MRCard from "../MRCard";
import { useStyleMRSideCard } from "./style";
import cx from "classnames";
import { Props as MRCardProps } from "./../MRCard/MRCard";
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
   * The title of the side card
   */
  title: string;
  /**
   * The props of the `MRCardProps` component
   */
  CardProps?: Partial<MRCardProps>;
}

export default function MRSideCard({
  children,
  title,
  className,
  CardProps,
}: Props): ReactElement {
  const classes = useStyleMRSideCard();
  return (
    <div className={cx(classes.root, className)}>
      <Label className={classes.cardTitle}>{title}</Label>
      <MRCard {...CardProps}>{children}</MRCard>
    </div>
  );
}
