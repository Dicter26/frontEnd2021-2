import { Component, OnInit } from '@angular/core';
import { Region } from '../../_model/region';
import { RegionService } from '../../_service/region.service';
import { FormBuilder, Validators } from '@angular/forms';

declare var $: any;//para utilizar jquery en angular

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regiones: Region[] = [];
  region: Region = new Region();
  formulario = this.formBuilder.group({
    id_region: [''],
    region: ['', Validators.required]
  });
  post_region = false;
  submitted = false;

  constructor(private region_service: RegionService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getRegiones();
  }

  getRegiones(){//obtiene todas las regiones de la api
    this.region_service.getRegiones().subscribe(
      res =>{
        this.regiones = res;
        console.log(this.regiones);
      },
      err => console.log(err)
    )
  }

  getRegion(id_region: number){//obtiene una sola region que le pasamos como parametro
    this.region_service.getRegion(id_region).subscribe(
      res =>{
        this.region = res;
        console.log(this.region);
      },
      err => console.log(err)
    )
  }

  onSubmit(){
    this.submitted = true;
    if(this.post_region){
      this.region_service.createRegion(this.formulario.value).subscribe(
        res =>{
          console.log(this.region);
          this.getRegiones();
          this.closeModal();
        },
        err => console.log(err)
      )
    }else{
      this.region_service.getRegion(this.formulario.value).subscribe(
        res =>{
          console.log(this.region);
          this.getRegiones();
          this.closeModal();
        },
        err => console.log(err)
      )
    }
  }

  //creamos una nueva region
  createRegion(){
    this.post_region = true;
    this.formulario.reset();//limpia el formulario
    $("#region_modal").modal("show");//muestra un formulario modal en jquery y asi llamaremos a nuestro modal
  }
  
  //actualizamos la region que nos pasaron
  //asignamos a la etiqueta 'id_region' y 'region' del formulario el nuevo valor del objeto que nos pasaron como parametro
  updateRegion(region: Region){
    this.post_region = false;
    this.formulario.controls['id_region'].setValue(region.id_region);
    this.formulario.controls['region'].setValue(region.region);
    $("#region_modal").modal("show");
  }

  //borramos una region que nos pasaron como parametro
  deleteRegion(id_region: number){
    this.region_service.deleteRegion(id_region).subscribe(
      res => {
        console.log(this.region);
        this.getRegiones();
      },
      err => console.log(err)
    );
  }

  //funcion que nos permite acceder al formulario 
  get f(){
    return this.formulario.controls;
  }

  closeModal(){
    $("#region_modal").modal("hide");
    this.submitted = false;
  }
}
