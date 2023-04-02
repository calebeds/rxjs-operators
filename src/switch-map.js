import { from, fromEvent } from "rxjs";
import { map, switchMap, takeUntil, tap } from "rxjs/operators";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const moves$ = fromEvent(canvas, "mousemove");
const down$ = fromEvent(canvas, "mousedown");
const up$ = fromEvent(canvas, "mouseup");

const brush = (coords) => {
  context.lineWidth = 5;
  context.lineTo(coords.x, coords.y);
  context.stroke();
};

down$
  .pipe(
    tap((event) => {
      context.strokeStyle = "blue";
      context.beginPath();
      context.moveTo(event.offsetX, event.offsetY);
    }),
    switchMap((event) => {
      return moves$.pipe(
        map((event) => {
          return { x: event.offsetX, y: event.offsetY };
        }),
        takeUntil(up$)
      );
    })
  )
  .subscribe((coords) => {
    brush(coords);
  });
