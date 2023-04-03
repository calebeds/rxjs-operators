import { add, animate } from "./helpers";
import { fromEvent, interval } from "rxjs";
import { exhaustMap, switchMap, mergeMap, map, take } from "rxjs/operators";

interval(2000)
  .pipe(
    take(3),
    map((value) => `${value * 100}`),
    mergeMap((x) => {
      return interval(1000).pipe(
        take(3),
        map((value) => `inner(${value}), outer(${x})`)
      );
    })
  )
  .subscribe((value) => add.li(`Emitted Value: ${value}`));
