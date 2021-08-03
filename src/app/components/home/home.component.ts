import { Component, OnInit } from '@angular/core';
import {MochilasService} from "../../services/mochilas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mochilas: any;

  constructor(
    private mochilasService: MochilasService
  ){
    this.getMochilas();
  }

  ngOnInit(): void {
  }

  getMochilas(){
    this.mochilasService.get().subscribe(
      res => {
        this.mochilas = res;
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteMochila(id: string){
    this.mochilasService.delete(id).then(
      res => {
        console.log(res);
      }
    );
  }

}
