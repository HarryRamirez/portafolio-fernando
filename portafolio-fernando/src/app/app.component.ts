import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-fernando';
  
// usamos esto para que el servicio se pueda usar en este componente
  constructor(public infoPaginaServis: InfoPaginaService){

  }
}
