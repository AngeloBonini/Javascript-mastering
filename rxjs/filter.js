import { of, fromEvent } from ' rxjs';
import { filter } from 'rxjs/operators';


of(1,2,3,4,4,33,43,4).pipe(
    filter(value => value > 2)
).subscribe(console.log);