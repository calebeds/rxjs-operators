import { add } from "./helpers";
import { BehaviorSubject, interval } from "rxjs";
import { take } from "rxjs/operators";

const nums = new BehaviorSubject(100);

interval(1000).subscribe((value) => nums.next(value));

nums.pipe(take(10)).subscribe(add.li);

nums.pipe(take(10)).subscribe((value) => {
  add.li(`second: ${value}`);
});
