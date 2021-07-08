import{ Observable } from 'rxjs/Observable';

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete')
}

const observable = new Observable(subscriber => {
    subscriber.next('Hey friend');
    subscriber.next('Bonantagon');
});


observable.subscribe(
    x => console.log
    )