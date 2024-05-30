import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/produtcs.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  products: Product[] = [];
  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(productId: string) {
    this.router.navigate(['/edit-product', productId]);
  }
}
