import React, { ReactElement, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MRPanelFilter from "../../components/MRPanelFilter";
import { PanelItem } from "../../components/MRPanelFilter/MRPanelFilter";
import {
  selectorCompanies
} from "../../redux/basket/selectors";
import FilterActions from "../../redux/filter/actions";
import {
  selectorFilterBrands,
  selectorFilteredItems
} from "../../redux/filter/selectors";


/**
 * 
 * Sidebar Brands filter component
 */
export default function HomeFilterBrands(): ReactElement {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectorFilteredItems);
  const filterBrands = useSelector(selectorFilterBrands);
  const companies = useSelector(selectorCompanies);

  const handleChecked = useCallback(
    (data: PanelItem, checked: boolean) => {
      var newBrands = [...filterBrands];
      if (!checked) {
        newBrands = newBrands.filter((tag) => tag !== data.name.toString());
      } else {
        newBrands.push(data.name.toString());
      }
      dispatch(FilterActions.setFilterBrands(newBrands));
    },
    [dispatch, filterBrands]
  );
  const mappedCompanies = companies
    .map((companyItem) => {
      let count =
        filteredItems.filter((item) => item.manufacturer === companyItem.slug)
          .length ?? 0;
      return {
        name: companyItem.slug,
        label: companyItem.name,
        count: count,
      };
    })
    .filter((item) => item.count > 0 || filterBrands.indexOf(item.name) > -1);

  return (
    <MRPanelFilter
      title="Brands"
      data={mappedCompanies}
      onChange={handleChecked}
    />
  );
}
