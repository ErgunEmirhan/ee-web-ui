import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = "";
  password: string = "";
  isShowCredentials: boolean = false;

  showCredentials() {
    if (this.isCredentialsFilled()){
          this.isShowCredentials = true;
    }
    else{
      swal("Login error", "You have to fill username and password to login!", 'error')
    }
  }

  isCredentialsFilled(): boolean  {
    return !(this.username.length == 0) && !(this.password.length == 0)
  }
}
