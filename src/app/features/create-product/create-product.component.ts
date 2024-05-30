import { Component, inject } from '@angular/core';
import { ProductsService }  from '../../shared/services/produtcs.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interfaces/product.interface';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})

export class CreateProductComponent {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);


  onSubmit(product: Product) {
    this.productsService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto Criado com Sucesso :)', 'ok');
      this.router.navigateByUrl('/');
    });
  }
}
