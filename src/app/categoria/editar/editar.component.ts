import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicio/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  
  titulo : string = "Editar Categoría";
  categoria : Categoria = new Categoria();
  listadoDeCategorias : Categoria = new Categoria();  
  editarForm : FormGroup = new FormGroup({
    nombreCategoria: new FormControl(''),
    descripcionCategoria: new FormControl('')
  })

  constructor(private servicio : CategoriaService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"))    
    console.log(id)
    this.servicio.leerCategoria(id).subscribe( categoria => {
      this.listadoDeCategorias = categoria;
      console.log(typeof(this.listadoDeCategorias))
      console.log(this.listadoDeCategorias)
      this.editarForm.setValue({
        'nombreCategoria' : this.listadoDeCategorias.nombreCategoria,
        'descripcionCategoria' : this.listadoDeCategorias.descripcionCategoria
      })
      console.log(this.editarForm)
    });    
  }

  editarCategoria(categoria:Categoria) : void {
    this.servicio.actualizarCategoria(categoria)
  }
}
