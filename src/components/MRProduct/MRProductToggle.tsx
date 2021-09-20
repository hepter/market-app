import { Button, Hidden, IconButton } from "@material-ui/core";
import React, { ReactElement, useCallback } from "react";
import { useStyleMRProductToggle } from "./style";
import cx from "classnames";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useDispatch, useSelector } from "react-redux";

import FilterActions from "../../redux/filter/actions";
import { selectorFilterType } from "../../redux/filter/selectors";

/**
 * Product item type selector component  
 */
export default function MRProductToggle(): ReactElement {
  const classes = useStyleMRProductToggle();
  const dispatch = useDispatch();
  const filterType = useSelector(selectorFilterType);

  const index = filterType === "mug" ? 0 : 1;
  const toggle = index === 0 ? true : false;

  const mugClassName = cx(classes.button, { [classes.buttonActive]: toggle });
  const skirtClassName = cx(classes.button, {
    [classes.buttonActive]: !toggle,
  });

  const handleToggle = useCallback(
    (type) => () => {
      dispatch(FilterActions.setFilterType(type));
    },
    [dispatch]
  );

  const handleOpenSidebar = useCallback(() => {
    dispatch(FilterActions.openFilterDrawer("left"));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <IconButton>
          <FilterListIcon
            className={classes.iconFilter}
            onClick={handleOpenSidebar}
          />
        </IconButton>
      </Hidden>
      <Button
        color={toggle ? "secondary" : "primary"}
        variant="contained"
        onClick={handleToggle("mug")}
        classes={{
          root: mugClassName,
        }}
      >
        mug
      </Button>
      <Button
        color={!toggle ? "default" : "primary"}
        variant="contained"
        onClick={handleToggle("shirt")}
        classes={{
          root: skirtClassName,
        }}
      >
        shirt
      </Button>
    </div>
  );
}
