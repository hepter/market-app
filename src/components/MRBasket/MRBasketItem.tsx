import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Label from '../MRLabel';
import BasketActions from './../../redux/basket/actions';
import { useStyleMRBasketItem } from './style';

interface Props {
  id: string;
  name: string;
  price: string;
  count: number;
}

export default function MRBasketItem({
  id,
  name,
  price,
  count,
}: Props): ReactElement {
  const classes = useStyleMRBasketItem();

  const dispatch = useDispatch();
  const handleAdd = useCallback(
    (id: string) => () => {
      dispatch(BasketActions.addItem(id));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id: string) => () => {
      dispatch(BasketActions.removeItem(id));
    },
    [dispatch]
  );
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Label data-testid="name" className={classes.productName}>
            {name}
          </Label>
          <Label data-testid="price" className={classes.productPrice}>
            ₺{price.replace(".", ",")}
          </Label>
        </Grid>
        <Grid item className={classes.productCountContainer}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <IconButton
                data-testid="remove"
                onClick={handleRemove(id)}
                classes={{ root: classes.button }}
              >
                <RemoveIcon className={classes.icon} />
              </IconButton>
            </Grid>
            <Grid item>
              <Label data-testid="count" className={classes.productCount}>{count}</Label>
            </Grid>
            <Grid item>
              <IconButton
                data-testid="add"
                onClick={handleAdd(id)}
                className={classes.button}
              >
                <AddIcon className={classes.icon} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
