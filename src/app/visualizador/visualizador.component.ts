import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from '../shared/services/noticia.service';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.scss']
})
export class VisualizadorComponent implements OnInit {

  constructor(
    private router: Router,
    private noticiaService: NoticiaService
  ) { }

  ngOnInit(): void {
  }

}
