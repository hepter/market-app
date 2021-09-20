import { makeStyles } from "@material-ui/core";

export const useStyleMRRadio = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1)
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
    radioRoot: {
        padding: `0px ${theme.spacing(1) * (3 / 2)}px 0px 0px`
    },
}), { classNamePrefix: "MRRadio" });
