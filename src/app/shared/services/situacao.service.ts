import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { INoticia } from '../models/noticia';
import { ISituacao } from '../models/situacao';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  constructor(
    private daoService: DaoService
  ) { }

  listar(): Observable<HttpResponse<ISituacao[]>> {
    return this.daoService.get<ISituacao[]>(AppSettings.API_SITUACAO);
  }
}
