import { makeStyles } from '@material-ui/core';

export const useStyleMRHeader = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 76.64,
        backgroundColor: theme.palette.primary.main,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        [theme.breakpoints.down("md")]: {
            height: 50,
        },
        [theme.breakpoints.down("xs")]: {
            height: 40,
        }
    },
    logo: {
        textAlign: "center"
    }
}), { classNamePrefix: "MRHeader" });



export const useStyleMRHeaderBasket = makeStyles((theme) => ({
    root: {
        position: "absolute",
        right: 104,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        width: 129,
        height: 76.64,
        backgroundColor: theme.palette.primary.dark,
        [theme.breakpoints.down("md")]: {
            height: 50,
            width: 110,
            right: 40,
        },
        [theme.breakpoints.down("xs")]: {
            height: 40,
            width: 65,
            right: 0,
        }
    },
    basketIcon: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: -theme.spacing(2)
        }
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: "center",
        display: "flex",
        [theme.breakpoints.down("md")]: {
            cursor: "pointer",
        }
    },
    label: {
        fontWeight: 600,
        fontSize: theme.mr?.sizes.component.header.label,
        width: 49,
        height: 18.39,
        letterSpacing: 0.16,
        textAlign: "center",
        color: theme.palette.common.white,
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.mr?.sizes.component.header.labelXs,
            width: 30,
        }
    },
    img: {
        marginRight: theme.spacing(1)
    }
}), { classNamePrefix: "MRHeaderBasket" });
