import { makeStyles } from "@material-ui/core";

export const useStyleMRPanelFilter = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(1)} 0px`,
    },
    container: {
        overflow: "hidden",
        height: 143,
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        overflowY: "auto",
    },

}), { classNamePrefix: "MRPanelFilter" });
