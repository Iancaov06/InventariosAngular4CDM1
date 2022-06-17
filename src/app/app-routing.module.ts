import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { EditarComponent } from './categoria/editar/editar.component';

const routes: Routes = [
  {path:'categorias', component:CategoriaComponent},
  {path:'listado', component:ListadoComponent},
  {path:'', component:BienvenidoComponent},
  {path:'editarCategoria/:id', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
