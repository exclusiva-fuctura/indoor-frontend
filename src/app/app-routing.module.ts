import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './noticias/cadastro/cadastro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';

const routes: Routes = [
  {path: '', redirectTo: 'noticia', pathMatch: 'full'},
  {path: 'visualizador', component: VisualizadorComponent},
  {path: 'noticia', component: NoticiasComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
