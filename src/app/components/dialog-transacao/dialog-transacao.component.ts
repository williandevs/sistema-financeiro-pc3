import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';

@Component({
  selector: 'app-dialog-transacao',
  templateUrl: './dialog-transacao.component.html',
  styleUrls: ['./dialog-transacao.component.scss']
})
export class DialogTransacaoComponent implements OnInit {

  transacao: Transacao = {} as Transacao

  descricaoInput: string = '';
  valorInput: number = 0;
  tipoInput: string = '';



  constructor(
    public dialogRef: MatDialogRef<DialogTransacaoComponent>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {


    if (this.data && this.data.transacao) {
      this.transacao = this.data.transacao;
      this.descricaoInput = this.transacao.descricao;
      this.valorInput = this.transacao.valor;
      this.tipoInput = this.transacao.tipo
    }
  }


  salvar() {

    let transacaoObj = this.formToModel();

    let that = this;

    this.transacaoService.insertOrUpdate(transacaoObj).subscribe(
      {
        next(transacao) {
          that.dialogRef.close(transacao)
        },
        error(err) {
          console.log(err)
        },
        complete() {
          console.log("update complete")
        }
      }

    );


  }


  formToModel(): Transacao {

    this.transacao.descricao = this.descricaoInput;
    this.transacao.valor = this.valorInput;
    this.transacao.tipo = this.tipoInput;

    return this.transacao;

  }


  cancelar() {
    this.dialogRef.close('tem certeza')
  }



}