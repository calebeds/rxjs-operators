import { add, animate } from "./helpers";
import { fromEvent, interval } from "rxjs";
import { exhaustMap, switchMap, mergeMap, map, take } from "rxjs/operators";

const startButton = document.getElementById("start");
const startClicked$ = fromEvent(startButton, "click");
const circle = document.getElementById("circle");

startClicked$
  .pipe(
    exhaustMap(() => {
      return animate(5000);
    })
  )
  .subscribe((t) => {
    circle.style.marginLeft = `${t * 450}px`;
  });

// interval(1000)
//   .pipe(
//     take(3),
//     map((value) => `source(${value})`),
//     exhaustMap((x) => {
//       add.li(`Source: ${x}`);

//       return interval(10).pipe(
//         take(5),
//         map((value) => `inner(${value * 10})`)
//       );
//     })
//   )
//   .subscribe((value) => add.li(`Emitted Value: ${value}`));
