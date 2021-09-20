const groupBy = <T extends string, K extends { [key: string]: any }>(arr: K[] | string[], key: T | undefined = undefined) => {
    const initialValue = {};
    return (arr as []).reduce((acc: { [key: string]: any }, cval: any) => {
        var myAttribute: string;
        if (key === undefined && typeof cval[0] === "string") {
            myAttribute = cval.toString();
        } else {
            myAttribute = cval[key];
        }
        acc[myAttribute] = [...(acc[myAttribute] || []), cval]
        return acc;
    }, initialValue) as { [key: string]: K[] };
};

const ArrayHelper = { groupBy };
export default ArrayHelper