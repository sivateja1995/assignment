import {
  HttpInterceptor as MainHttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpInterceptor implements MainHttpInterceptor {
  constructor(private tosterService: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const lang: string = 'en';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('locale', lang);

    // to avoid the cloning twice
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ headers });
      request = request.clone({
        url: `${environment.backendUrl}${request.url}`,
      });
    }

    return next.handle(request);
  }
}
