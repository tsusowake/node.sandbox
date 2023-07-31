console.group("PROCESS_ENV");
console.log("APP_ENV: ", process.env.APP_ENV);

const configEnv = {
  ...require(`./config/${process.env.APP_ENV || "local"}.json`),
};
console.log("configEnv: ", configEnv);

console.groupEnd();
