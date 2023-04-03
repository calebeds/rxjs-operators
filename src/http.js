import { add } from "./helpers";
import { from } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";

// const getUsers = fetch("https://jsonplaceholder.typicode.com/users");

// const users = from(getUsers);
const users = fromFetch("https://jsonplaceholder.typicode.com/users");

users.pipe(switchMap((response) => response.json())).subscribe((users) => {
  users.forEach((user) => add.li(user.name));
});
