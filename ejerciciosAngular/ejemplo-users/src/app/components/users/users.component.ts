import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  usuarios: any[] = [];

  constructor(public userService: UsersService)
  {}

  ngOnInit(): void {
    this.list();
  }

  //Listar Usuarios
  list(){
    this.userService.getUsers().subscribe(
      (res) =>{ 
        console.log("Respouesta del get");
        console.log(res);
        this.usuarios = res.data;
      }
    );
  }

  resetId(){
    this.userService.datosUsuario = {
      id: -1
    }
  }

  resetForm(form: NgForm){
    form.reset();
    this.resetId();
  }

  //Crear Usuario
  create(form: NgForm){
    if(form.value.id != -1){
      //actualizo el usuario
      this.userService.updateUser(form.value).subscribe(
        (res)=>{
          console.log(res);
          this.list();
          this.resetForm(form);
        }
      )
    }else{
      //valido datos del formulario
      if(!form.valid){
        console.log("Formulario invalido");
      }else{
        this.userService.createUser(form.value).subscribe(
          (res)=>{
            console.log(res);
            this.list();
            this.resetForm(form);
          }
        )
      }
      
    }
  }

  //Eliminar Usuario
  delete(idUsuario: any){
    let confirmacion = confirm(`Esta seguro que desea eliminar al usuario #${idUsuario}?`);

    if(confirmacion){
      this.userService.deleteUser(idUsuario).subscribe(
        (res)=>{
          console.log(res);
          this.list();
        }
      )
    }
  }

  update(usuario: any){
    console.log(usuario);
    this.userService.datosUsuario = {
      id: usuario.id,
      name: usuario.first_name,
      job: 'Astrofisico'
    }
  }
}
