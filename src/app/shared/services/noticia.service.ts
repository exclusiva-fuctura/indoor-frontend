import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { INoticia } from '../models/noticia';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSelecionada!: INoticia;
  isModoEdicao = false;

  constructor(
    private daoService: DaoService
  ) { }

  listar(): Observable<HttpResponse<INoticia[]>> {
    return this.daoService.get<INoticia[]>(AppSettings.API_NOTICIA);
  }

  obter(numero: number): Observable<HttpResponse<INoticia>> {
    return this.daoService.get<INoticia>(AppSettings.API_NOTICIA + '/' + numero);
  }

  salvar(noticia: INoticia): Observable<HttpResponse<INoticia>> {
    return this.daoService.post<INoticia>(AppSettings.API_NOTICIA, noticia);
  }

  atualizar(noticia: INoticia): Observable<HttpResponse<INoticia>> {
    return this.daoService.put<INoticia>(AppSettings.API_NOTICIA + '/' + noticia.numero, noticia);
  }

  remover(numero: number): Observable<HttpResponse<INoticia>> {
    return this.daoService.delete<INoticia>(AppSettings.API_NOTICIA + '/' + numero);
  }
}
