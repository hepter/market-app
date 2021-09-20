import React, { ReactElement } from "react";
import MRPanelSort from "../../components/MRPanelSort";
import HomeFilterBrands from "./HomeFilterBrands";
import HomeFilterTags from "./HomeFilterTags";
import { useStyleHomeFilter } from "./style";

 

export default React.memo(function HomeFilter(): ReactElement {
  const classes = useStyleHomeFilter();
  return (
    <div className={classes.root}>
      <MRPanelSort />
      <HomeFilterBrands />
      <HomeFilterTags />
    </div>
  );
});
