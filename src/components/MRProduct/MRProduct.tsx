import { Grid } from "@material-ui/core";
import React, { ReactElement, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import useBreakpoint from "../../helpers/hooks/useBreakpoint";
import { selectorFilteredItems } from "../../redux/filter/selectors";
import MRCard from "../MRCard";
import Label from "../MRLabel";
import MRPagination from "../MRPagination";
import MRProductItem from "../MRProductItem";
import MRProductToggle from "./MRProductToggle";
import { useStyleMRProduct } from "./style";


const ITEM_COUNT_PER_PAGE: number = 16;
interface Props {}
export default function MRProduct({}: Props): ReactElement {
  const [page, setPage] = React.useState(0);
  const classes = useStyleMRProduct();
  const isMobile = useBreakpoint(["xs", "sm"]);
  const isXs = useBreakpoint(["xs"]);
  const filteredProductItems = useSelector(selectorFilteredItems);
  const itemCount = isXs ? ITEM_COUNT_PER_PAGE / 2 : ITEM_COUNT_PER_PAGE;
  var pageCount = Math.ceil(filteredProductItems.length / itemCount);

  const handlePageChange = useCallback(({ selected }) => {
    setPage(selected);
  }, []);

  useEffect(() => {
    var actualMaxPage = Math.ceil(filteredProductItems.length / itemCount);
    if (page > actualMaxPage) {
      setPage(actualMaxPage - 1);
    }
  }, [page, filteredProductItems, itemCount]);

  var items = [];
  let productCountByPage = Math.min(
    itemCount,
    filteredProductItems.length - page * itemCount
  );

  for (let index = 0; index < productCountByPage; index++) {
    const item = filteredProductItems[index + page * itemCount];
    items.push(
      <Grid item xs={6} sm={3} md={3} lg={3}>
        <Grid container justifyContent="center">
          <MRProductItem
            id={item.slug}
            name={item.name}
            price={item.price.toString()}
          />
        </Grid>
      </Grid>
    );
  }

  var loopCount = items.length < 4 ? 4 - items.length : 0;
  for (let index = 0; index < loopCount; index++) {
    items.push(
      <Grid item xs={6} sm={3} md={3} lg={3} key={index}>
        <Grid container justifyContent="center">
          <MRProductItem
            id={index.toString()}
            name="placeholder"
            price="0"
            placeholder
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Label className={classes.productTitle}>Products</Label>
      <MRProductToggle />
      <MRCard darkShadow className={classes.productCard}>
        <Grid container direction="row" spacing={3}>
          {items}
        </Grid>
      </MRCard>
      {
        <MRPagination
          forcePage={page}
          onPageChange={handlePageChange}
          className={classes.productPagination}
          pageCount={pageCount > 0 ? pageCount : 1}
          marginPagesDisplayed={isMobile ? 1 : 3}
          pageRangeDisplayed={isMobile ? 1 : 3}
        />
      }
    </div>
  );
}
