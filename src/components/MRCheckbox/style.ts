import { makeStyles } from "@material-ui/core";

export const useStyleMRCheckbox = makeStyles((theme) => ({
    root: {
    },
    input: {
        content: '',
        background: '#fff',
        border: '2px solid #ddd',
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 20,
        height: 20,
        padding: 2,
        marginRight: 10,
        textAlign: 'center',
        "&:checked": {
            content: '\f00c',
            fontFamily: 'FontAwesome',
            background: 'rebeccapurple',
            color: '#fff',
        }
    },
    icon: {
        color: `${theme.palette.action.selected}`,
    },
    checkboxRoot: {
        "& > span": {
            width: 22,
            height: 22,
        },
        padding: "16px 8px 8px 8px",
    },
    labelBase: {

        fontSize: theme.mr?.sizes.m,
        lineHeight: "18px",
    },
    label: {
        color: theme.mr?.palette.component.filter.label,
        display: 'block',
        textOverflow: "ellipsis",
        letterSpacing: 0.16,
        whiteSpace: 'nowrap',
        maxWidth: 150,
        overflow: 'hidden',

    },
    labelCount: {
        color: theme.mr?.palette.component.filter.labelCount
    }
}), { classNamePrefix: "MRCheckbox" });
