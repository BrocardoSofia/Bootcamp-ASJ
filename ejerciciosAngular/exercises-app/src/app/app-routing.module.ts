import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'to-do-list', component:ToDoListComponent},
  {path:'formulario-los-simpsons', component:FormularioSimpsonsComponent},
  {path:'prime-numbers', component:PipesExampleComponent},
  {path:'**', component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
