import { add } from "./helpers";
import { fromFetch } from "rxjs/fetch";
import { from, of, fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

const users = fromFetch("https://jsonplaceholder.typicode.com/users")
  .pipe(
    switchMap((response) => {
      return response.json();
    })
  )
  .subscribe((result) => {
    result.forEach((user) => {
      add.li(user.name);
    });
  });

const submit = document.getElementById("submit");
const clicks = fromEvent(submit, "click").subscribe((ev) => {
  add.li("clicked");
});

const numbers = of(1, 2, 3, 4).subscribe(add.li);
const fruits = from(["apples", "oranges", "grapes"]).subscribe(add.li);
