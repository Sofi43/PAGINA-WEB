import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MochilasService} from "../../services/mochilas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public formulario: any;
  public status: boolean;
  public id: number;

  constructor(
    private mochilaService: MochilasService,
    private router: Router
  ){
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl()
    });
    this.status = false;
    this.id = 0;
    this.getLast();
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this.formulario.value.id = this.id;

    this.mochilaService.crear(this.formulario.value)
      .then(
        res => {
          this.status = true;
          this.router.navigate(['/']);
        },
        err => {
          console.error(err);
        }
      );
  }

  getLast(){
    this.mochilaService.getLast().subscribe(
      res => {
        let mochila = JSON.parse(JSON.stringify(res));
        this.id = mochila[0].id + 1;
      },
      error => {
        console.error(error);
      }
    );
  }

}
