import { makeStyles } from "@material-ui/core";

export const useStyleMRPagination = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttonLabel: {
        color: `${theme.mr?.palette.component.pagination.label} !important`,
        fontWeight: 600,
        size: 14,
        textTransform: "none",
        "&:hover": {
            color: `${theme.palette.primary.main}!important`,
        }
    },
    paginationActive: {
        backgroundColor: `${theme.palette.primary.main}`,
        color: `${theme.palette.common.white}`,
        borderRadius: 2,
        "&:hover": {
            backgroundColor: `${theme.palette.primary.dark}`,
        }
    },
    paginationContainer: {
        listStylePosition: 'inside',
        paddingLeft: 0,
        display: 'flex',
        alignItems: 'center'
    },
    paginationBreak: {
        marginTop: -6
    },
    paginationPageLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 40
    },
    paginationItem: {
        color: `${theme.mr?.palette.component.pagination.label}`,
        userSelect: 'none',
        listStyleType: 'none',
        fontFamily: theme.typography.fontFamily,
        fontWeight: 600,
        fontSize: theme.mr?.sizes.component.pagination.item,
        cursor: "pointer",
        "&:hover": {
            color: `${theme.palette.primary.main}`,
        }
    },
    paginationNext: {
        marginLeft: "auto"
    },
    paginationPrevious: {
        marginRight: "auto"
    },
    icon: {
        fontSize: theme.mr?.sizes.component.pagination.icon,
        margin: "0px 5px"
    }
}), { classNamePrefix: "MRPagination" });
