import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


function calculateScrollPercent(element: any) {
  const {
    scrollTop,
    scrollHeight,
    clinetHeight
  } = element;
  return (scrollTop / (scrollHeight - clinetHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  map(({target})=> calculateScrollPercent(target.dispatchEvent) )
)
progress$.subscribe(console.log);