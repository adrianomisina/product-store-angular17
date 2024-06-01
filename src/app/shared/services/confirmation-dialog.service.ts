import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Excluir Produto</h2>
    <mat-dialog-content>
      Tem Certeza que Deseja EXCLUIR esse Produto?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button (click)="onNo()" color="warn">Não</button>
      <button mat-flat-button color="primary" (click)="onYes()">Sim</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  matDialog = inject(MatDialog)

  constructor() { }

  openDialog(): Observable<boolean> {
    return this.matDialog
    .open(ConfirmationDialogComponent).afterClosed()
  }
}
