import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  get(id: string) {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  post(payload: ProductPayload) {
    return this.httpClient.post<Product>('http://localhost:3000/products', payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put<Product>(`http://localhost:3000/products/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete<Product>(`http://localhost:3000/products/${id}`);

  }
}
