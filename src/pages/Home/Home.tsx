import { Drawer, Grid, Hidden } from "@material-ui/core";
import React, { ReactElement, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MRBasket from "../../components/MRBasket";
import MRProduct from "../../components/MRProduct";
import FilterActions from "../../redux/filter/actions";
import { selectorSidebarStatus } from "../../redux/filter/selectors";
import HomeFilter from "./HomeFilter";
import { useStyleHome } from "./style";



export default function Home(): ReactElement {
  const classes = useStyleHome();
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectorSidebarStatus);

  const handleSidebarLeftClose = useCallback(() => {
    dispatch(FilterActions.closeFilterDrawer("left"));
  }, [dispatch]);
  const handleSidebarRightClose = useCallback(() => {
    dispatch(FilterActions.closeFilterDrawer("right"));
  }, [dispatch]);
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Hidden mdUp>
          <Drawer
            ModalProps={{
              keepMounted: true,
            }}
            anchor={"left"}
            variant="temporary"
            open={sidebarStatus.left}
            onClose={handleSidebarLeftClose}
          >
            <div className={classes.drawerContainer}>
              <HomeFilter />
            </div>
          </Drawer>
        </Hidden>
        <Hidden lgUp>
          <Drawer
            ModalProps={{
              keepMounted: true,
            }}
            anchor={"right"}
            variant="temporary"
            open={sidebarStatus.right}
            onClose={handleSidebarRightClose}
          >
            <div className={classes.drawerContainer}>
              <MRBasket />
            </div>
          </Drawer>
        </Hidden>
        <Grid container justifyContent="space-between" spacing={2}>
          <Hidden smDown>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <HomeFilter />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <MRProduct />
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <MRBasket />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
