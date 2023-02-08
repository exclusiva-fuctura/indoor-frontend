import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  public static readonly MEDIA_TYPE_APP_JSON = 'application/json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Gravar uma nova noticia na base
   * @param url path do recurso
   * @param body corpo do objeto
   * @returns objeto criado
   */
  post<T>(url: string, body: any): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(url, body,
      {headers: this.getHeaders(DaoService.MEDIA_TYPE_APP_JSON), observe: 'response'});
  }

  /**
   * Atualiza uma noticia já existente na base
   * @param url path do recurso com o id da noticia
   * @param body corpo da noticia que com a alteração
   * @returns a noticia persistida na base
   */
  put<T>(url: string, body: any): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(url, body,
      {headers: this.getHeaders(DaoService.MEDIA_TYPE_APP_JSON), observe: 'response'});
  }

  /**
   * Obter uma ou várias noticias existentes na base
   * @param url path do recurso
   * @returns uma ou uma lista de noticias
   */
  get<T>(url: string): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(url,
      {headers: this.getHeaders(DaoService.MEDIA_TYPE_APP_JSON), observe: 'response'});
  }

  /**
   * Remove uma noticia da base
   * @param url path do recurso com o id da noticia que deseja remover
   * @returns a noticia removida
   */
  delete<T>(url: string): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(url,
      {headers: this.getHeaders(DaoService.MEDIA_TYPE_APP_JSON), observe: 'response'});
  }

  /**
   * Obter o header da requisição
   * @param media media type da integração
   * @returns objeto headers configurado
   */
  private getHeaders(media: string): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', media);

    return headers;
  }
}
