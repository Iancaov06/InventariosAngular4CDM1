import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../modelo/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint: string = "http://localhost:8181/api/categoria/get-all";// direccion de la api
  constructor(private http : HttpClient) { }
  private httpHeader = new HttpHeaders({'ContentType':'application/json'})

  listadoCategorias() : Observable<Categoria[]>{
    return this.http.get(this.endPoint).pipe(map((response) => response as Categoria[]));
  }
}
