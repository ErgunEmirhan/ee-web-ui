import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    this.isShowCredentials = true;
  }
}
