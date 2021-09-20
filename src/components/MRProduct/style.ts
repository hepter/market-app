import { makeStyles } from "@material-ui/core";

export const useStyleMRProduct = makeStyles((theme) => ({
    root: {
    },
    productCard: {
        padding: "4px 6px",
        height: 1008
    },
    productTitle: {
        fontsize: theme.mr?.sizes.component.product.title,
        letterSpacing: 0.25,
        color: theme.mr?.palette.component.product.title,
        marginBottom: 16
    },
    productPagination: {
        margin: "24px 30px 0px 30px",
        [theme.breakpoints.down("xs")]: {
            margin: 0,
        }
    }
}), { classNamePrefix: "MRProduct" });


export const useStyleMRProductToggle = makeStyles((theme) => ({
    root: {
        margin: "16px 0px",
        fontSize: theme.mr?.sizes.component.product.label,
        fontWeight: 600
    },

    button: {
        width: 60,
        height: 30,
        marginRight: theme.spacing(1),
        "& > span": {
            color: theme.palette.primary.main,
        },
        backgroundColor: theme.mr?.palette.component.product.toggle,
        transition: "0.3s",
        "&:hover": {
            backgroundColor: theme.mr?.palette.component.product.toggle,
            color: theme.palette.primary.dark,

        }
    },
    buttonActive: {
        width: 60,
        backgroundColor: theme.palette.primary.main,
        "& > span": {
            color: theme.mr?.palette.component.product.toggle,
        },
        transition: "0.3s",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.mr?.palette.component.product.toggle,
        }
    },
    iconFilter: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderRadius: 2,
        width: 30,
        height: 30,
        margin: "0px -6px 0px -12px"
    }


}), { classNamePrefix: "useStyleMRProductToggle" });