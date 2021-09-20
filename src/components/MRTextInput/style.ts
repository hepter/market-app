import { makeStyles } from "@material-ui/core";

export const useStyleMRTextInput = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        "&::placeholder": {
            color: "red !important"
        }
    },
    textRoot: {
        fontFamily: 'Inter',
        fontSize: theme.mr?.sizes.component.textInput.label,
        letterSpacing: 0.15,
    },
    textFieldInput: {
        padding: 14.5,
        color: theme.palette.text.secondary,
        "&::placeholder": {
            color: theme.palette.text.hint,
            opacity: 1
        }
    },
    textFieldNotchedOutline: {
        borderWidth: 2,
        BorderColor: "#E0E0E0"
    },

}), { classNamePrefix: "MRTextInput" });
