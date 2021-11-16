import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//para hacer peticiones
import { Region } from '../_model/region';//modelo al que mapearemos 
import { ApisURI } from '../../../shared/apis-uri';
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiURI= ApisURI.regionURI;
  private recurso = "/region";//necesario ya que la url unicamente nos llevara a la api en general y no al json de regiones
  
  constructor(private http :HttpClient) { }

  getRegiones(){//obtenemos todo el json con las regiones
    return this.http.get<Region[]>(this.apiURI + this.recurso);
  }

  getRegion(id_region: number){//obtenemos una region
    return this.http.get<Region>(this.apiURI + this.recurso + "/" + id_region);//sin arreglo por que solo obtendremos una region
  }

  createRegion(region: Region){//creamos una region
    return this.http.post(this.apiURI + this.recurso, region);
  }

  updateRegion(region: Region){//actualizamos la region
    return this.http.put(this.apiURI + this.recurso + "/" + region.id_region, region);
  }

  deleteRegion(id_region: number){//borramos una region
    return this.http.delete(this.apiURI + this.recurso + "/" + id_region);
  }
}
