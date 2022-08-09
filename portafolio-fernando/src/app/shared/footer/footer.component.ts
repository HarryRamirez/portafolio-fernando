import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();//con esto podemos actualizar el año automaticamente

  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
