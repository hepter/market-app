import { Grid } from "@material-ui/core";
import React, { ReactElement, ReactNode, useCallback, useEffect } from "react";
import { FixedSizeList } from "react-window";

import MRCheckbox from "../MRCheckbox";
import MRSideCard from "../MRSideCard";
import MRTextInput from "../MRTextInput";
import { useStyleMRPanelFilter } from "../MRPanelFilter/style";

export type PanelItem = {
  /**
   * The unique value for the item
   */
  name: string | number;
  /**
   * Total count of the item
   */
  count: number;
  /**
   * The value whether the value is selected or not
   */
  checked?: boolean;
  /**
   * The user friendly item name
   */
  label: string | ReactNode | ReactElement;
};
interface Props<T> {
  /**
   * Title of the card
   */
  title: string;
  /**
   * The filter data list
   */
  data: T[];
  /**
   * Callback fired when the value changes.
   */
  onChange: (item: any, checked: boolean) => void;
}

/**
 *
 * Sidebar generic filter panel
 */
export default function MRPanelFilter<T extends PanelItem>({
  title,
  onChange,
  data,
}: Props<T>): ReactElement {
  const classes = useStyleMRPanelFilter();
  const [filteredData, setFilteredData] = React.useState<PanelItem[]>(data);
  const [checkedList, setCheckedList] = React.useState<{ [key: string]: any }>(
    {}
  );

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleChangeCheckbox = useCallback(
    (name: string | number, status: boolean) => {
      var item = data.find((item) => item.name === name);
      if (onChange) {
        onChange(item as PanelItem, status);
      }
      const newCheckedList = { ...checkedList };
      newCheckedList[name] = status;
      setCheckedList(newCheckedList);
    },
    [checkedList, data, onChange]
  );

  const handleChangeTextInput = useCallback(
    (e: any) => {
      var input = e.target.value;
      var filtered = data.filter(
        (item) =>
          item.name.toString().toLowerCase().indexOf(input.toLowerCase()) > -1
      );
      setFilteredData(filtered);
    },
    [data, setFilteredData]
  );

  var sortedFilteredData = filteredData.sort((a, b) => {
    var itemA = checkedList[a.name] ? 1 : 0;
    var itemB = checkedList[b.name] ? 1 : 0;

    if (itemA === itemB) {
      return a.name.toString().localeCompare(b.name.toString());
    }
    return itemB - itemA;
  });
  return (
    <MRSideCard title={title} CardProps={{ className: classes.root }}>
      <>
        <MRTextInput
          placeholder={"Search " + title.toLowerCase()}
          variant="outlined"
          fullWidth={true}
          onChange={handleChangeTextInput}
        />
        <div className={classes.container}>
          <Grid container direction="column">
            <FixedSizeList
              height={140}
              width={255}
              itemSize={46}
              itemCount={sortedFilteredData.length}
              itemData={sortedFilteredData}
            >
              {({ index, style, data }) => {
                var item = data[index];

                return (
                  <Grid item style={style} key={index}>
                    <MRCheckbox
                      value={checkedList[item.name]}
                      count={item.count}
                      name={item.name}
                      onChange={handleChangeCheckbox}
                    >
                      {item.label}
                    </MRCheckbox>
                  </Grid>
                );
              }}
            </FixedSizeList>
          </Grid>
        </div>
      </>
    </MRSideCard>
  );
}
