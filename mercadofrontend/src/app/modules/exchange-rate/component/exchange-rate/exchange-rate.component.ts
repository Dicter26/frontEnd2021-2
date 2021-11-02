import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from '../../_model/exchange-rate';
import { ExchangeRateService } from '../../_service/exchange-rate.service';
import { FormBuilder, Validators } from '@angular/forms';
/**consume la funcion que se conecta al api de exchange rate**/
 
@Component({
  selector: 'app-exchange-rate',//nos permite mostrarlo en el html con las etiquetas <app-...></app-...>
  templateUrl: './exchange-rate.component.html',//para poder usar variables y demas definiciones en el html
  styleUrls: ['./exchange-rate.component.css']//le da estilo al html de esta carpeta
})
export class ExchangeRateComponent implements OnInit {
  
  exchange_rate = new ExchangeRate();//creamos un modelo 
  formulario = this.formBuilder.group({
    rate: ['', Validators.required]//campos que tendrá nuestro formulario 
  });

//instanciamos las clases y podemos utilizar 
  constructor(private exchange_rate_service: ExchangeRateService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.getExchangeRate("USD");
  }

  //funcion para el formulario, para avisar que se envia el formulario.
  ngSubmit(){
    var rate = this.formulario.controls['rate'].value;//recupera el valor del formulario
    this.getExchangeRate(rate);//llamamos a la funcion que devuelve la informacion de la consulta
  }

  //para cada funcion dentro del servicio tambien habrá una dentro del componente para consumir al mismo.
  getExchangeRate(rate: string){
    this.exchange_rate_service.getExchangeRate(rate).subscribe(//objeto, llamada a funcoon y parametro, de manera sincrona(subscribe)
      res => {
        console.log(res);
        this.exchange_rate = res;//mapeo del resultado al objeto exchange rate
      },
      err => console.log(err)
    )
  }


}

