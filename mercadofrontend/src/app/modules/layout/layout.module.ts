import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';//estas lineas las agregamos manuealmente
import { NavbarComponent } from './component/navbar/navbar.component';//una por cada componente nuevo creado
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,//al igual que las lineas de arriba tambien debemos hacer lo mismo con estas
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [//he importarlos para que todos los modulos puedan utilizar los componentes creados 
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
