import { fromEvent } from 'rxjs';

const scroll$ = fromEvent(document, 'scroll');
scroll$.subscribe(console.log) 