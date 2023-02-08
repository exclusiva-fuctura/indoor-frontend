import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { INoticia } from '../models/noticia';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class VisualizadorService {

  constructor(
    private daoService: DaoService,
  ) { }

  listar(): Observable<HttpResponse<INoticia[]>> {
    return this.daoService.get<INoticia[]>(AppSettings.API_NOTICIA());
  }


}
