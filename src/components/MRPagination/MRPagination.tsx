import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import cx from "classnames";
import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useStyleMRPagination } from "./style";

interface Props extends ReactPaginateProps {
  /**
   * The classname on tag `div` of the root item.
   */
  className?: string;
  /**
   * If `true`, the element will take up the full width of its container.
   */
  fullWidth?: boolean;
}

export default function MRPagination({ className, fullWidth, ...rest }: Props) {
  const classes = useStyleMRPagination();

  return (
    <div className={className}>
      <ReactPaginate
        {...rest}
        previousLabel={
          <Button classes={{ label: classes.buttonLabel }}>
            <ArrowBackIcon className={classes.icon} />
            Prev
          </Button>
        }
        nextLabel={
          <Button classes={{ label: classes.buttonLabel }}>
            Next
            <ArrowForwardIcon className={classes.icon} />
          </Button>
        }
        breakLabel={"..."}
        activeLinkClassName={classes.paginationActive}
        breakClassName={cx(
          classes.paginationItem,
          classes.paginationPageLink,
          classes.paginationBreak
        )}
        containerClassName={classes.paginationContainer}
        activeClassName={classes.paginationActive}
        previousClassName={cx(
          classes.paginationItem,
          classes.paginationPrevious
        )}
        nextClassName={cx(classes.paginationItem, classes.paginationNext)}
        pageClassName={cx(classes.paginationItem)}
        pageLinkClassName={classes.paginationPageLink}
      />
    </div>
  );
}
