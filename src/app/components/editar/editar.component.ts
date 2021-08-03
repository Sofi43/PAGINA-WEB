import { Component, OnInit } from '@angular/core';
import {MochilasService} from "../../services/mochilas.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public formulario: any;
  public status: boolean;
  public id: string;
  public key: string;
  public nombre: string;
  public descripcion: string;
  public precio: number;

  constructor(
    private mochilaService: MochilasService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ){
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl()
    });

    this.status = false;
    this.id = '0';
    this.key = '';

    activatedRoute.params.subscribe( prm => {
      this.key = prm['id'];
    });

    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
    this.getDocument()
  }

  ngOnInit(): void {
  }

  getDocument(){
    this.mochilaService.getDocument(this.key).subscribe(
      res => {
        let response = JSON.parse(JSON.stringify(res));
        this.formulario.value = res;
        this.nombre = response.nombre;
        this.descripcion = response.descripcion;
        this.precio = response.precio;
        this.id = response.id;
      }
    );
  }

  onSubmit(){
    this.formulario.value.nombre = this.formulario.value.nombre ? this.formulario.value.nombre : this.nombre;
    this.formulario.value.descripcion = this.formulario.value.descripcion ? this.formulario.value.descripcion : this.descripcion;
    this.formulario.value.precio = this.formulario.value.precio ? this.formulario.value.precio : this.precio;
    this.formulario.value.id = this.id;

    const DATA = this.formulario.value;

    this.mochilaService.update(this.key, DATA)
      .then(
        res => {
          this.router.navigate(['/']);
        },
        err => {
          console.error(err);
        }
      );
  }
}
