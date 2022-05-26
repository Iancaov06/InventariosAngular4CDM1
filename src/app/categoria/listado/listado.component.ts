import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelo/categoria';
import { CategoriaService } from '../../servicio/categoria.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo:string = "Listado de categorias";
  listadoDeCategorias : Categoria[] = [
    {
      idCategoria : 1,
      nombreCategoria: "Pescados",
      descripcionCategoria: "La mejor forma de ser musculoso"
    },
    {
      idCategoria : 2,
      nombreCategoria: "Pescados",
      descripcionCategoria: "La mejor forma de ser musculoso"
    },
    {
      idCategoria : 3,
      nombreCategoria: "Pescados",
      descripcionCategoria: "La mejor forma de ser musculoso"
    }
  ];

  constructor(private servicio : CategoriaService) { }

  ngOnInit(): void {
    this.servicio.listadoCategorias().subscribe( (categorias) => this.listadoDeCategorias = categorias);
  }

}
