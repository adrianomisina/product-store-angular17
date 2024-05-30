import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/produtcs.service';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () => 
      import('./features/create-product/create-product.component')
      .then((m) => m.CreateProductComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
        const productsService = inject(ProductsService);
        return productsService.get(route.paramMap.get('id') as string);
      }
    },
    loadComponent: () => 
      import('./features/edit/edit.component')
      .then((m) => m.EditComponent)
  },
];
