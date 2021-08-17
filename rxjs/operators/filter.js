import { of, fromEvent } from ' rxjs';
import { filter, map } from 'rxjs/operators';


// of(1,2,3,4,4,33,43,4).pipe(
//     filter(value => value > 2)
// ).subscribe(console.log);

const keyup$ = fromEvent(document, 'keyup');
const keyCode$ = keyup$.pipe(
    map(event => event.code)
);

const enter$ = keyup$.pipe(
    filter(code => code === 'Enter')
);


enter$.subscribe(console.log);
keyCode$.subscribe(console.log);