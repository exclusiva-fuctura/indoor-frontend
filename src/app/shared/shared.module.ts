import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DaoService } from './services/dao.service';
import { NoticiaService } from './services/noticia.service';
import { VisualizadorService } from './services/visualizador.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DaoService,
    NoticiaService,
    VisualizadorService
  ]
})
export class SharedModule { }
