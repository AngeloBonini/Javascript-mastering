import { Observable } from "rxjs";

const observer = { 
    next: value => console.log("next", value),
    error: error => console.log("error", error),
    complete: () => console.log("complete!")
};

const observable = new Observable((subscriber) => {
  subscriber.next("HI friend");
  subscriber.next("World");
  subscriber.complet();
});

observable.subscribe(observer);
