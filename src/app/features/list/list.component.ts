import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/produtcs.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/internal/operators/filter';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';

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
  matDialog = inject(MatDialog);
 confirmationDialogService = inject(ConfirmationDialogService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product]);
  }

  onDelete(product: Product) {
    this.confirmationDialogService
    .openDialog()
    .pipe(filter((answer) => answer === true))
    .subscribe(()=> {
      this.productsService.delete(product.id) .subscribe(()=> {
        this.productsService.getAll().subscribe((products) => {
          this.products = products
        })
      })
    })
  }
}
