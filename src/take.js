import { add } from "./helpers";
import { interval, fromEvent } from "rxjs";
import { take, takeWhile, takeUntil, takeLast } from "rxjs/operators";

const button = document.getElementById("submit");
const buttonEvents = fromEvent(button, "click");

interval(500).pipe(takeUntil(buttonEvents)).subscribe(add.li);
