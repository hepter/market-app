import { Button } from "@material-ui/core";
import cx from "classnames";
import React, { ReactElement, useCallback } from "react";
import { useDispatch } from "react-redux";
import { PlaceholderImage } from "../../assets/image";
import Label from "../MRLabel";
import BasketActions from "./../../redux/basket/actions";
import { useStyleMRProductItem } from "./style";
interface Props {
  /**
   * The unique value of the component
   */
  id: string;
  /**
   * The price of the product
   */
  price: string;
  /**
   * The name of the product
   */
  name: string;
  /**
   * Empty placeholder component
   */
  placeholder?: boolean;
}

export default function MRProductItem({
  id,
  price,
  name,
  placeholder,
}: Props): ReactElement {
  const classes = useStyleMRProductItem();

  const dispatch = useDispatch();
  const handleAdd = useCallback(
    (id: string) => () => {
      dispatch(BasketActions.addItem(id));
    },
    [dispatch]
  );
  return (
    <div
      className={cx(classes.root, {
        [classes.placeholderItem]: placeholder !== undefined,
      })}
    >
      <div className={classes.frame}>
        <img
          className={classes.img}
          alt={name + " image"}
          src={PlaceholderImage}
        />
      </div>
      <Label className={classes.labelPriceSymbol}>
        ₺&nbsp;<Label className={classes.labelPrice}>{price}</Label>
      </Label>
      <Label className={classes.labelName}>{name}</Label>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleAdd(id)}
      >
        Add
      </Button>
    </div>
  );
}
