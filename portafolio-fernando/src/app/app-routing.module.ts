import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent},
  {path: '**',pathMatch: 'full' ,redirectTo: 'home'}// aui lo que hacemos es que nos redireccione
  // a la rutta de portafolio cuando la ruta sea desconocida
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]//con esto exportamos las rutas usando el router-outlet del component
})
export class AppRoutingModule { }
