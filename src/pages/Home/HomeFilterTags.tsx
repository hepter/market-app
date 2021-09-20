import React, { ReactElement, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MRPanelFilter from "../../components/MRPanelFilter";
import { PanelItem } from "../../components/MRPanelFilter/MRPanelFilter";
import ArrayHelper from "../../helpers/ArrayHelper";
import FilterActions from "../../redux/filter/actions";
import {
  selectorFilteredItems,
  selectorFilterTags,
} from "../../redux/filter/selectors";

/**
 * Sidebar Tag filter component
 */
export default function HomeFilterTags(): ReactElement {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectorFilteredItems);
  const filterTags = useSelector(selectorFilterTags);

  const tagList = filteredItems.reduce((acc: string[], item) => {
    acc.push(...item.tags);
    return acc;
  }, []);
  const tags = {
    ...filterTags.reduce((acc, item) => {
      acc[item] = [];
      return acc;
    }, {} as { [key: string]: any }),
    ...ArrayHelper.groupBy(tagList),
  };

  const handleChecked = useCallback(
    (data: PanelItem, checked: boolean) => {
      var newTags = [...filterTags];
      if (!checked) {
        newTags = newTags.filter((tag) => tag !== data.name.toString());
      } else {
        newTags.push(data.name.toString());
      }

      dispatch(FilterActions.setFilterTags(newTags));
    },
    [dispatch, filterTags]
  );
  const mappedTags = Object.entries(tags)
    .map(([key, value]) => {
      return {
        name: key,
        label: key,
        count: (value as []).length,
      };
    })
    .filter((item) => item.count > 0 || filterTags.indexOf(item.name) > -1);

  return (
    <MRPanelFilter title="Tags" data={mappedTags} onChange={handleChecked} />
  );
}
