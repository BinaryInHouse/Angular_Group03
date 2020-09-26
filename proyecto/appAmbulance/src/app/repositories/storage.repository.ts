import { Injectable } from '@angular/core';
import { IStorage } from '../interfaces/storage.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageRepository implements IStorage {
  save(propertyName: string, value: string): void {
    sessionStorage.setItem(propertyName, value);
  }

  get(propertyName: string): string {
    return sessionStorage.getItem(propertyName);
  }
}
