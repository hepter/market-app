import cx from "classnames";
import React from "react";
import { useSelector } from "react-redux";

import ArrayHelper from "../../helpers/ArrayHelper";
import { selectorBasket } from "../../redux/basket/selectors";
import Label from "../MRLabel";
import MRBasketItem from "./MRBasketItem";
import { useStyleMRBasket } from "./style";

export interface Props {
  /**
   * The classname on tag `div` of the root item.
   */
  className?: string;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  darkShadow?: boolean;
}

export default function MRBasket({
  className, 
  ...rest
}: Props) {
  const classes = useStyleMRBasket();
  const basketItems = useSelector(selectorBasket);
  const totalCost = basketItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);
  const groupedBasket = ArrayHelper.groupBy(basketItems, "added");
  return (
    <div className={cx(classes.root, className)} {...rest}>
      <div className={classes.panel}>
        {Object.entries(groupedBasket).map(([key, value]) => {
          return (
            <div key={key}>
              <MRBasketItem
                id={value[0].slug}
                name={value[0].name}
                price={value[0].price + ""}
                count={value.length}
              />
              <div className={classes.divider} />
            </div>
          );
        })}
        {Object.keys(groupedBasket).length !== 0 ? (
          <div className={classes.total}>
            <Label>₺{totalCost.toString().replace(".", ",")}</Label>
          </div>
        ) : (
          <div className={classes.empty}>
            <Label bold>Your basket is empty</Label>
            <Label>Add products to basket</Label>
          </div>
        )}
      </div>
    </div>
  );
}
