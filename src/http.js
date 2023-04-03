import { add } from "./helpers";
import { from } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { ajax } from "rxjs/ajax";
import { of, pipe } from "rxjs";
import { switchMap, mergeMap, concatMap, delay, retry } from "rxjs/operators";

//Custom Operators
// const getJSON = () => {
//   return switchMap((response) => response.json());
// };

// const emitEach = (d) => {
//   return pipe(
//     mergeMap((response) => of(...response)),
//     concatMap((response) => of(response).pipe(delay(d)))
//   );
// };

// const getUsers = fetch("https://jsonplaceholder.typicode.com/users");

// const users = from(getUsers);
// const users = fromFetch("https://jsonplaceholder.typicode.com/users");

// users.pipe(getJSON(), emitEach(2000)).subscribe((user) => add.li(user.name));

const users = ajax.getJSON("https://jsonplaceholder.typicode.com/users");

users.pipe(retry(3)).subscribe((response) => {
  response.forEach((user) => add.li(user.name));
});
