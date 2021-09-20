import { makeStyles } from "@material-ui/core";

export const useStyleMRSideCard = makeStyles((theme) => ({
    root: {
        width: 296,
        marginTop: theme.spacing(2),
        "&:first-child": {
            marginTop: 0,
        },
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',

    },
    cardTitle: {
        fontSize: theme.mr?.sizes.component.sideCard.title,
        fontWeight: 600,
        lineHeight: "18px",
        marginBottom: 12,
        color: theme.mr?.palette.component.sideCard.title
    }

}), { classNamePrefix: "MRSideCard" });
