import { makeStyles } from "@material-ui/core";
import { colors } from "../../theme";

export const useStyleHome = makeStyles((theme) => ({

    root: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(3)
    },
    body: {
        maxWidth: 1232
    },
    drawerContainer: {
        height: "100%",
        padding: theme.spacing(1),
        backgroundColor: colors.appBackground
    }
}), { classNamePrefix: "Home" });


export const useStyleHomeFilter = makeStyles((theme) => ({
    root: {
        position: "sticky",
        height: 844,
        top: theme.spacing(2)
    }

}), { classNamePrefix: "HomeFilter" });
