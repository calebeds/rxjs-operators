import { add } from "./helpers";
import { concat, interval, fromEvent } from "rxjs";
import { take, map } from "rxjs/operators";

const button = document.getElementById("submit");
const streamOne = interval(1000).pipe(take(10));
const streamTwo = fromEvent(button, "click").pipe(map((e) => "clicked"));

concat(streamOne, streamTwo).subscribe(add.li);
