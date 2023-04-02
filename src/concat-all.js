import { add } from "./helpers";
import { interval, fromEvent } from "rxjs";
import { concatAll, map, tap, take } from "rxjs/operators";

const button = document.getElementById("submit");
const clicks = fromEvent(button, "click");

const source = clicks.pipe(
  tap((ev) => add.li("click")),
  map(
    //Inner
    (ev) => interval(1000).pipe(take(3))
  )
);

source.pipe(concatAll()).subscribe(add.li);
