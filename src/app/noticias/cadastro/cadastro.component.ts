import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faCalendarAlt, faEraser, faLongArrowAltLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { relativeTimeThreshold } from 'moment';
import { INoticia } from 'src/app/shared/models/noticia';
import { ISituacao } from 'src/app/shared/models/situacao';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { SituacaoService } from 'src/app/shared/services/situacao.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  iconSalvar = faSave;
  iconApagar = faEraser;
  iconCalendario = faCalendarAlt;
  iconVoltar = faLongArrowAltLeft;

  situacoes: ISituacao[] = [];

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private noticiaService: NoticiaService,
    private situacaoService: SituacaoService
  ) { }

  ngOnInit(): void {
    this.showModalSucesso('');
    this.initForm();
  }

  private initForm(): void {
    this.formulario = this.formBuilder.group({
      dataInicio: '',
      dataFinal: '',
      titulo: '',
      duracao: '0',
      situacao: '',
      descricao: ''
    });
  }

  private loadForm(noticia: INoticia): void {
    this.formulario.patchValue({
      dataInicio: noticia.inicio,
      dataFinal: noticia.fim,
      titulo: noticia.titulo,
      duracao: noticia.duracaoSegundos,
      situacao: noticia.situacao,
      descricao: noticia.descricao
    })
  }

  private showModalError(msg: string): void {
    const mensagemErro = msg ? msg : 'Ocorreu um erro ao tentar criar a Notícia!';

    Swal.fire(
    'Erro!',
    mensagemErro,
    'error'
    );
  }

  private showModalSucesso(msg: string): void {
    const mensagemSucesso = msg ? msg : 'Processado com sucesso!';

    Swal.fire(
    'Sucesso!',
    mensagemSucesso,
    'success'
    );
  }

  private obterListaSituacao() {
    this.situacaoService.listar().subscribe({
      next: (resp) => {
        const dados = resp.body;
        this.situacoes = dados ? dados : [];
      }, error: (err: HttpErrorResponse) => {
        this.showModalError(err.message);
        this.situacoes = [];
      }
    });
  }

  onVoltar(): void {
    this.router.navigate(['/']);
  }
}
