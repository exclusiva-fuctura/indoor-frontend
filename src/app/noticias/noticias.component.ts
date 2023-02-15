import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEraser, faPencilAlt, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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

  onNovo(): void {
    this.router.navigate(['cadastro']);
  }

}
