console.group("PROCESS_ENV");
console.log("APP_ENV: ", process.env.APP_ENV);

const configEnv = {
  local: {
    ...require("./config/local.json"),
  },
  dev: {
    ...require("./config/dev.json"),
  },
  stg: {
    ...require("./config/stg.json"),
  },
  prod: {
    ...require("./config/prod.json"),
  },
};
const conf = configEnv[process.env.APP_ENV] ?? {};
console.log("conf: ", conf);

console.groupEnd();
