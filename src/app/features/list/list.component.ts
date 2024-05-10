import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProdutcsService } from '../../shared/services/produtcs.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: any[] = [];

  productsService = inject(ProdutcsService)

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    })
  }
}
