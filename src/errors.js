import { add } from "./helpers";
import { of, pipe, from, throwError, EMPTY } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { ajax } from "rxjs/ajax";
import {
  switchMap,
  mergeMap,
  concatMap,
  delay,
  retry,
  catchError,
} from "rxjs/operators";

const checkStatus = () => {
  return switchMap((response) => {
    return response.status === 400 ? throwError() : of("Looks good");
  });
};

const users = fromFetch("https://httpbin.org/status/400", {
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})
  .pipe(
    checkStatus(),
    catchError((err) => {
      return throwError("The status must have been 400");
      // return EMPTY;
    })
  )
  .subscribe(
    (res) => console.log("next:", res),
    (error) => console.error("error", error)
  );
