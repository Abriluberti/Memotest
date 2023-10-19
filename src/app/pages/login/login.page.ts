import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {}

  async login() {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      if (result.user) {
        // Inicio de sesión exitoso, redirigir al usuario a la página principal
        this.navCtrl.navigateRoot('/principal');
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error: any) {
      console.error('Error de inicio de sesión:', error.message);
    }
  }

  OnFillFields(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
