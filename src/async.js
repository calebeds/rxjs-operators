import { add } from "./helpers";

add.li("Line 3");

const runPromise = async () => {
  add.li("line 6");
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("We are complete!");
    }, 5000);
  });
  await p;

  add.li("Line 14");
};

runPromise();

add.li("Line 19");
