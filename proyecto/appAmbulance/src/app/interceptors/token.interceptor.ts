import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageRepository } from '../repositories/storage.repository';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly storage: StorageRepository) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }

    const user = JSON.parse(this.storage.get('user'));
    const token = user.accessToken;

    const requestClone = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`),
    });

    return next.handle(requestClone);
  }
}
