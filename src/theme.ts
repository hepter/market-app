import { createTheme } from "@material-ui/core";
import '@material-ui/core/styles';

export const colors = {

    white: "#FFFFFF",
    white50: "#FEFEFE",
    white100: "#FAFAFA",

    cyan: "#1EA4CE",
    cyanDark: "#147594",

    black50: "#F4F4F4",
    black300: "#A8A8A8",
    black500: "#6F6F6F",
    black600: "#525252",

    grey500: "#697488",
    grey700: "#191919",

    toggle: "#F2F0FD",

    img: "#C4C4C4",
    imgFrame: "#F3F0FE",

    radioBorder: "#DFDEE2",
    appBackground: "#E5E5E5"
}


export const sizes = {
    /**
     * Size 10px
     */
    x: 10,
    /**
     * Size 12px
     */
    s: 12,
    /**
    * Size 14px
    */
    m: 14,
    /**
     * Size 16px
     */
    l: 16,
    /**
     * Size 18px
     */
    xl: 18,
    /**
     * Size 20px
     */
    xxl: 20,
}




const MRTheme = {
    colors: colors,
    sizes: {
        component: {
            header: {
                label: sizes.m,
                labelXs: sizes.x,
            },
            basket: {
                product: sizes.m,
                icon: sizes.xxl,
            },
            pagination: {
                item: sizes.m,
                icon: sizes.xxl,
            },
            product: {
                title: sizes.xxl,
                label: sizes.xl,
            },
            productItem: {
                label: sizes.m,
            },
            sideCard: {
                title: sizes.m
            },
            textInput: {
                label: sizes.m
            }
        },
        ...sizes
    },
    palette: {
        primary: {
            main: colors.cyan,
            dark: colors.cyanDark
        },
        component: {
            radio: {
                text: colors.black600,
                text2: colors.black600,
            },
            product: {
                title: colors.black500,
                toggle: colors.toggle
            },
            productItem: {
                frame: colors.imgFrame,
                img: colors.img,
                label: colors.grey700,
                labelPrice: colors.cyan,
                background: colors.white50
            },
            basketItem: {
                labelProduct: colors.grey700,
                divider: colors.black50,
            },
            pagination: {
                label: colors.grey500,

            },
            filter: {
                label: colors.black600,
                labelCount: colors.black300
            },
            sideCard: {
                title: colors.grey500,
            }
        }
    }
}

/**
 * Override to the material theme to enable IntelliSense on style hooks
 */
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        mr?: typeof MRTheme;
    }
    interface ThemeOptions {
        mr?: typeof MRTheme;
    }
}
const theme = createTheme({
    mr: MRTheme,
    overrides: {
        MuiButton: {
            label: {
                color: colors.white
            },
            root: {
                height: 22,
                borderRadius: 2,
                fontSize: sizes.s,
            }
        }
    },
    palette: {
        primary: {
            main: colors.cyan,
            dark: colors.cyanDark,
            light: colors.white,
        },
        text: {
            primary: colors.cyan,
            secondary: colors.black600,
            hint: colors.black300,
        },
        action: {
            active: "#DFDEE2",
            selected: colors.cyan,
        }
    },
    typography: {
        fontFamily: '"Open Sans", sans-serif, Helvetica'
    }
});

export default theme;

