import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEraser, faPencilAlt, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { INoticia } from '../shared/models/noticia';
import { NoticiaService } from '../shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: INoticia[] = [];

  iconSalvar = faSave;
  iconNovo = faPlus;
  iconExcluir = faTrashAlt;
  iconEditar = faPencilAlt;

  constructor(
    private router: Router,
    private noticiaService: NoticiaService,
  ) { }

  ngOnInit(): void {
    this.listNoticias();
  }

  private listNoticias(): void {
    this.noticiaService.listar().subscribe({
      next: (coisa) => {
        if (coisa.body) {
          this.noticias = coisa.body;
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private removeNoticia(numero: number): void {
    this.noticiaService.remover(numero).subscribe({
      next: () => {
        this.listNoticias();
        this.showModalSucesso('Noticia excluído com sucesso!');
      },
      error: (err: HttpErrorResponse) => {
        this.showModalError('Ocorreu um erro ao tentar remover a Notícia');
      }
    })
  }

  private showModalSucesso(msg: string): void {
    const mensagemSucesso = msg ? msg : 'Processado com sucesso!';

    Swal.fire(
    'Sucesso!',
    mensagemSucesso,
    'success'
    );
  }

  private showModalError(msg: string): void {
    const mensagemErro = msg ? msg : 'Ocorreu um erro ao tentar criar a Notícia!';

    Swal.fire(
    'Erro!',
    mensagemErro,
    'error'
    );
  }

  private showModalQuestion(msg: string, id: number): void {
    const mensagemQuestion = msg ? msg : 'Deseja executar essa ação?';

    Swal.fire({
      title: 'Tem certeza?',
      text: mensagemQuestion,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Detona!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeNoticia(id);
      }
    })
  }

  onNovo(): void {
    this.noticiaService.isModoEdicao = false;
    this.router.navigate(['cadastro']);
  }

  onEdit(noticia: INoticia): void {
    // atribuir a noticia para edicao
    this.noticiaService.noticiaSelecionada = noticia;
    // informar que esta em edicao
    this.noticiaService.isModoEdicao = true;
    // navegar para o cadastro
    this.router.navigate(['cadastro']);
  }

  onRemover(noticia: INoticia): void {
    if (noticia.numero) {
      this.showModalQuestion('Deseja remover a notícia "'+noticia.numero+'"?', noticia.numero);
    }
  }

}
