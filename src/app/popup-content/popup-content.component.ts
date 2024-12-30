import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-content',
  template: `
    <h1 mat-dialog-title>Informações Adicionais</h1>
    <div mat-dialog-content>
      <div [innerHTML]="data.texto"></div>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Fechar</button>
    </div>
  `,
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { texto: string }
  ) {}

  close(): void {
    this.dialogRef.close(); 
  }
}
