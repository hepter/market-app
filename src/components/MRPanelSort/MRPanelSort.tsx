import { Grid } from '@material-ui/core';
import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterActions from '../../redux/filter/actions';
import { FilterSort } from '../../redux/filter/reducer';
import { selectorFilterSort } from '../../redux/filter/selectors';
import MRRadio from '../MRRadio/MRRadio';
import MRSideCard from '../MRSideCard';


/**
 * 
 * Sidebar sorting panel
 */
export default function MRPanelSort(): ReactElement {
 

  const dispatch = useDispatch();
  const filterSort = useSelector(selectorFilterSort);

  const handleToggle = useCallback(
    (type: FilterSort) => () => {
      dispatch(FilterActions.setFilterSort(type));
    },
    [dispatch]
  );
  return (
    <MRSideCard title="Sorting">
      <Grid container direction="column">
        <Grid item>
          <MRRadio
            value={filterSort === "LOW_TO_HIGH"}
            onChange={handleToggle("LOW_TO_HIGH")}
          >
            Price low to high
          </MRRadio>
        </Grid>
        <Grid item>
          <MRRadio
            value={filterSort === "HIGH_TO_LOW"}
            onChange={handleToggle("HIGH_TO_LOW")}
          >
            Price high to low
          </MRRadio>
        </Grid>
        <Grid item>
          <MRRadio
            value={filterSort === "NEW_TO_OLD"}
            onChange={handleToggle("NEW_TO_OLD")}
          >
            New to old
          </MRRadio>
        </Grid>
        <Grid item>
          <MRRadio
            value={filterSort === "OLD_TO_NEW"}
            onChange={handleToggle("OLD_TO_NEW")}
          >
            Old to new
          </MRRadio>
        </Grid>
      </Grid>
    </MRSideCard>
  );
}
