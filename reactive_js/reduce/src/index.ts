import './style.css';
console.clear();

import { interval, fromEvent } from 'rxjs';
import { scan, mapTo, takeWhile, takeUntil, tap } from 'rxjs/operators';