import React, { ReactElement, useCallback } from "react";
import { BasketIcon } from "../../assets/image";

import Label from "../MRLabel";
import { useStyleMRHeaderBasket } from "./style";

import { selectorBasket } from "../../redux/basket/selectors";
import { useDispatch, useSelector } from "react-redux";
import FilterActions from "../../redux/filter/actions";

/**
 * Header Basket component for the Header component
 */
export default function MRHeaderBasket(): ReactElement {
  var classes = useStyleMRHeaderBasket();
  const basketItems = useSelector(selectorBasket);
  const dispatch = useDispatch();
  const totalCost = basketItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  const handleOpenSidebar = useCallback(() => {
    dispatch(FilterActions.openFilterDrawer("right"));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper} onClick={handleOpenSidebar}>
        <div className={classes.basketIcon}>
          <BasketIcon />
        </div>
        <Label className={classes.label} bold>
          ₺&nbsp;{totalCost}
        </Label>
      </div>
    </div>
  );
}
