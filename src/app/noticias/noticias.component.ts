import { Component, OnInit } from '@angular/core';
import { INoticia } from '../shared/models/noticia';
import { NoticiaService } from '../shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: INoticia[] = [];

  constructor(
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

}
