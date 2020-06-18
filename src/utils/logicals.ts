const moment = require("moment");

export const testUtils = (preCount: any, incomingCount: any) => {
  if (incomingCount < preCount) {
    return { onreduce: true, value: preCount - incomingCount };
  } else {
    const result = incomingCount - preCount;
    return { onreduce: false, value: result };
  }
};
