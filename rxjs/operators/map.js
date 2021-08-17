import { of } from 'rxjs';
import { map } from ' rxjs/operators';


of(1,2,3,4,5,676,7,67,68,567,534,5).pipe(
    map(value => value *10)
).subscribe(console.log);