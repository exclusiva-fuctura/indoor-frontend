
export class AppSettings {

  private static API(): string {
    return '/api';
  }

  public static API_NOTICIA(): string {
    return AppSettings.API + '/noticia'
  }
}
