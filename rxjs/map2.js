import { fromEvent } from ' rxjs';
import { map, pluck } from 'rxjs/operators';

const keyup$ = fromEvent(documetn, 'keyup');
const keycode$ = keyup$.pipe(
map(event => event.code)
);
keyup$.subscribe(console.log)

const keyCodeWithPluck$ = keyup$.pipe(
    pluck('target', "nodeName")
);

keyCodeWithPluck$.subscribe(console.log);