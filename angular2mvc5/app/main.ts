import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Operator } from 'rxjs/Operator';
import { Observable } from 'rxjs/Observable';

declare module 'rxjs/Subject' {
    interface Subject<T> {
        lift<R>(operator: Operator<T, R>): Observable<R>;
    }
}

platformBrowserDynamic().bootstrapModule(AppModule);

