
export class AppSettings {

  private static API(): string {
    return '/api';
  }

  static get API_NOTICIA(): string {
    return AppSettings.API() + '/noticia'
  }
}
