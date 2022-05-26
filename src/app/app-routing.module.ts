import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path:'categorias', component:CategoriaComponent},
  {path:'', component:BienvenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
