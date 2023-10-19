import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { FirestoreModule, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';



const firebaseConfig = {
  apiKey: "AIzaSyCvV4RUyyvVEAkDy8xsbpcygh9dbKVdCtk",

    authDomain: "memotest-dfbd9.firebaseapp.com",
  
    projectId: "memotest-dfbd9",
  
    storageBucket: "memotest-dfbd9.appspot.com",
  
    messagingSenderId: "850839902505",
  
    appId: "1:850839902505:web:621479bbb8997cc48f3f38"
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig), // Utiliza la configuración de firebaseConfig
    FirestoreModule, // Esta importación está en el lugar correcto
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Utiliza la configuración de firebaseConfig
    provideFirestore(() => getFirestore()),
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule]
})
export class AppModule {}
