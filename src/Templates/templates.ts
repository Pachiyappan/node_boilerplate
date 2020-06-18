import _ = require("lodash");
export const dataTemplate = (templateStr: any, insertData: any) => {
    const compiled = _.template(templateStr);
    return compiled(insertData);
};
