import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barras', component: BarrasComponent },
      { path: 'barrasDoble', component: BarrasDoblesComponent },
      { path: 'dona', component: DonaComponent },
      { path: 'donaHttp', component: DonaComponent },
      { path: '**', redirectTo: 'barras' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
