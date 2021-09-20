import { makeStyles } from "@material-ui/core";

export const useStyleMRBasket = makeStyles((theme) => ({
    root: {
        width: 280,
        minHeight: 338,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 2,
        padding: theme.spacing(1),
        position: "sticky",
        top: theme.spacing(3),
    },
    panel: {
        width: "100%",
        height: "100%",
        minHeight: 338,
        backgroundColor: theme.palette.common.white,
        borderRadius: 2,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        paddingTop: theme.spacing(2),
    },
    divider: {
        height: 0,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: theme.mr?.palette.component.basketItem.divider,
        width: 246,
        margin: `${theme.spacing(2)}px 0px 0px  0px `
    },
    total: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: "auto",
        width: 92,
        height: 51.1,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        fontWeight: 600,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
    empty: {
        marginTop: 140,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column',
    }
}), { classNamePrefix: "MRBasket" });




export const useStyleMRBasketItem = makeStyles((theme) => ({
    root: {
        width: 231,
        height: 40.88,
        marginRight: theme.spacing(1),
        padding: theme.spacing(1)
    },
    productName: {
        color: theme.mr?.palette.component.basketItem.labelProduct,
        width: 140,
        lineHeight: "18px",
        display: 'block',
        textOverflow: "ellipsis",
        letterSpacing: 0.16,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    productPrice: {
        fontSize: theme.mr?.sizes.component.basket.product,
        letterSpacing: 0.16,
        fontWeight: 600,
    },
    productCountContainer: {
        display: 'flex',
        alignItems: "center",
        height: 56.5
    },
    productCount: {
        width: 32,
        height: 32,
        fontWeight: 700,
        fontSize: theme.mr?.sizes.component.basket.product,
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    icon: {
        fontSize: theme.mr?.sizes.component.basket.icon,
        color: theme.palette.primary.main,
    },
    button: {
        width: 10,
        height: 10,
    }
}), { classNamePrefix: "MRBasketItem" });
