import { Injectable } from '@angular/core';
import { ExchangeRate } from '../_model/exchange-rate';
/**modelo del que se consumira la api, es decir el modelo del que mapearemos el json */
import { HttpClient } from '@angular/common/http';
/**importar un cliente http para hacer una consulta/peticion**/
import { ApisURI } from '../../../shared/apis-uri';
/**uri a donde haremos la peticion**/
@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  /**variable con la uri**/
  private apiURI = ApisURI.exchangeRateURI;

  /**representacion del cliente**/
  constructor(private http: HttpClient) { }

  /**funcion para consumir la api**/
  getExchangeRate(rate: string){
    /**aqui vamos a remplazar el valor que nos den como entrada en la liga de la que extraeremos la informacion**/
    this.apiURI = ApisURI.exchangeRateURI;
    this.apiURI = this.apiURI.replace("{rate}", rate);
    return this.http.get<ExchangeRate>(this.apiURI);
    /**primero obtenderemos la informacion mediante una peticion get con http
     *  y lo vamos a mapear a la clase dentro de los <>, despues la funcion 
     * get recibe a la liga para extraer la informacion**/
  }
}
