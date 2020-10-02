import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { StorageRepository } from '../repositories/storage.repository';

@Injectable({
  providedIn: 'root',
})
export class MedicService {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageRepository
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.pathApi}/medics`).pipe(pluck('result'));
  }
}
