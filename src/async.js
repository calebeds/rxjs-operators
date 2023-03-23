import { add } from "./helpers";

add.li("Line 3");

const callback = (message) => {
  add.li(message);
};

const greeting = (message, cb) => {
  let start = Date.now();
  for (let i = 0; i < 1000000000; i++) {
    //do nothing
  }
  add.li(`took: ${Date.now() - start}ms`);
  cb(message);
};

greeting("Hello from line 18", callback);

add.li("Line 20");

add.li("Line 22");
