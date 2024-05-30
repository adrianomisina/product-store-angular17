import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/produtcs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  route = inject(ActivatedRoute);

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  });

  ngOnInit() {
    const product = this.route.snapshot.data['product'] as Product;
    if (product) {
      this.form.setValue({ title: product.title });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.productsService.put(id, {
        title: this.form.controls.title.value
      }).subscribe(() => {
        this.matSnackBar.open('Produto Atualizado com sucesso!', 'Ok');
        this.router.navigate(['/']);
      });
      this.form.reset();
    }
  }
}
