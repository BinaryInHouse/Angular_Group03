import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: Menu[] = [
    {
      title: 'Resumen',
      icon: 'dashboard',
      path: '/summary',
    },
    {
      title: 'Usuarios',
      icon: 'face',
      path: '/users',
    },
    {
      title: 'Médicos',
      icon: 'favorite_border',
      path: '/medics',
    },
    {
      title: 'Pilotos',
      icon: 'local_hospital',
      path: '/drivers',
    },
  ];

  constructor() {}

  getMenu(): Menu[] {
    // Object.assign([], this.listMenu)
    return [...this.listMenu];
  }
}
