import {
  HttpInterceptor as MainHttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpInterceptor implements MainHttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders = new HttpHeaders();
    // avoiding the cloning twice.
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ headers });
      request = request.clone({ url: `${environment.backendUrl}${request.url}` });
    }
    console.log(request)
    return next.handle(request);
  }
}
