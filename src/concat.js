import { add } from "./helpers";
import { combineLatest, interval, fromEvent } from "rxjs";
import { take, map } from "rxjs/operators";

const button = document.getElementById("submit");
const streamOne$ = interval(1000).pipe(take(10));
const streamTwo$ = fromEvent(button, "click").pipe(map((e) => "clicked"));
const streamThree$ = interval(10).pipe(take(50));
const streamFour$ = interval(2500).pipe(take(3));

combineLatest(streamOne$, streamTwo$, streamThree$, streamFour$).subscribe(
  add.li
);
