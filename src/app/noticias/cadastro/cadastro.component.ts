import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faEraser, faSave } from '@fortawesome/free-solid-svg-icons';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

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

  constructor(
    private noticiaService: NoticiaService
  ) { }

  ngOnInit(): void {

    Swal.fire(
    'Erro!',
    'Ocorreu um erro ao tentar criar a Notícia!',
    'error'
    );
  }




}
