import { makeStyles } from "@material-ui/core";

export const useStyleMRLabel = makeStyles((theme) => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: 'center',
    },
    bold: {
        fontWeight: "bold"
    },
    secondary: {
        color: theme.palette.text.secondary
    }
}), { classNamePrefix: "MRLabel" });
