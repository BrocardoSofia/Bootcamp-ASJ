import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'toDoList', component:ToDoListComponent},
  {path:'fomrularioLosSimpsons', component:FormularioSimpsonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
