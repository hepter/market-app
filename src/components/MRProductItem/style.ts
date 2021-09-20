import { makeStyles } from "@material-ui/core";

export const useStyleMRProductItem = makeStyles((theme) => ({
    root: {
        width: 124,
        height: 225,
        backgroundColor: theme.mr?.palette.component.productItem.background,
        display: 'flex',
        flexDirection: "column",

    },
    placeholderItem: {
        opacity: 0,
        pointerEvents: 'none',
    },
    frame: {
        border: '1.17666px solid ' + theme.mr?.palette.component.productItem.frame,
        borderRadius: 12,
        padding: theme.spacing(2),
    },
    img: {

        backgroundColor: theme.mr?.palette.component.productItem.img,
        width: 92,
        height: 92
    },
    labelPriceSymbol: {
        marginTop: 8,
        color: theme.mr?.palette.component.productItem.labelPrice,
        fontSize: theme.mr?.sizes.component.productItem.label,
        fontFamily: "Helvetica"

    },
    labelPrice: {
        color: theme.mr?.palette.component.productItem.labelPrice,
        fontSize: theme.mr?.sizes.component.productItem.label,
        fontWeight: 700
    },
    labelName: {
        color: theme.mr?.palette.component.productItem.label,
        fontSize: theme.mr?.sizes.component.productItem.label,
        fontWeight: 600,
        marginBottom: "auto"
    }

}), { classNamePrefix: "MRProductItem" });
