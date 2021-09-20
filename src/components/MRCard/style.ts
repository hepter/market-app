import { makeStyles } from "@material-ui/core";

export const useStyleMRCard = makeStyles((theme) => ({
    root: {
        boxShadow: '0px 6px 24px rgba(93, 62, 188, 0.04)',
        borderRadius: 2,
        backgroundColor: theme.palette.common.white
    },
    innerRoot:{

        margin: theme.spacing(2),
    },
    fullWidth: {
        width: "100%"
    },
    darkShadow: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    }
}), { classNamePrefix: "MRCard" });
