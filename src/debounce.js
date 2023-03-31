import { add } from "./helpers";
import { fromEvent, interval } from "rxjs";
import { debounce, take, debounceTime } from "rxjs/operators";

const inputBox = document.getElementById("input");

const renderBox = document.getElementById("display-content");

const submitBox = document.getElementById("submit");

const content = fromEvent(inputBox, "keyup");
const submit = fromEvent(submitBox, "click");

content
  .pipe(
    // debounce(() => submit)
    debounceTime(2000)
  )
  .subscribe(() => {
    renderBox.innerHTML = inputBox.value;
  });
