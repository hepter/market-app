import { makeStyles } from '@material-ui/core';

export const useStyleMRFooter = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(5)}px 0px`,
        width: '100%',
        color: theme.palette.primary.main,
       
        justifyContent: 'center',
    },
}), { classNamePrefix: "MRFooter" });
