import { add } from "./helpers";
import { Observable } from "rxjs";

// const observable = (subscriber) => {
//   subscriber.next("Hello Universe!");
// };

const observer = {
  next: add.li,
  error: add.li,
  complete: () => {
    add.li("There are no more values!");
  },
};

// observable(observer);

// class Observable {
//   constructor(subscribeTo) {
//     this.subscribeTo = subscribeTo;
//   }

//   subscribe(observer) {
//     return this.subscribeTo(observer);
//   }
// }

const producer = new Observable((subscribe) => {
  subscribe.next("Hello from the Observable class");
  subscribe.complete();
  subscribe.next("Something I forgot");
});

producer.subscribe(observer);
