const sampleUser = {
  name: "farhad",
  lastName: "niaz",
  age: 32,
};
export const authLogin = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data.userName == "test" && data.password == "123456") {
        res({
          user: sampleUser,
          token: "sampleToken" + new Date().toISOString(),
        });
      } else {
        rej();
      }
    }, 2000);
  });
};
