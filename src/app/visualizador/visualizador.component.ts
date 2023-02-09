import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { INoticia } from '../shared/models/noticia';

import { VisualizadorService } from '../shared/services/visualizador.service';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.scss']
})
export class VisualizadorComponent implements OnInit {

  noticia!: INoticia;
  noticias: INoticia[] = []

  constructor(
    private router: Router,
    private visualizadorService: VisualizadorService
  ) { }

  ngOnInit(): void {
    this.loadNoticia();
  }

  private loadNoticia(): void {
    this.visualizadorService.listar().subscribe({
      next: (resp) => {
        if (resp.body) {
          this.noticias = resp.body;
          for (const noticia of this.noticias) {
            this.noticia = noticia;
            setTimeout(()=>{},noticia.duracaoSegundos * 1000);
          }
        }
      }
    });
  }

}
