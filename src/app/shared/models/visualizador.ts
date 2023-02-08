import { INoticia } from "./noticia";

export class Visualizador {
  time: number;
  noticia: INoticia;

  constructor(tempo: number, noticia: INoticia) {
    this.noticia = noticia;
    this.time = tempo;
  }
}
