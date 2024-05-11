import { Component, inject } from '@angular/core';
import { ProdutcsService } from '../../shared/services/produtcs.service';
import { Product } from '../../shared/interfaces/product.interface';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = [];

  productsService = inject(ProdutcsService)

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    })
  }
}
