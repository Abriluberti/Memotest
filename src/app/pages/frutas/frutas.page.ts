import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Firestore, collection, addDoc } from '@angular/fire/firestore';



import { Card } from './card.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

    uidToEmail: { [key: string]: string } = {
      'ii2358t01QRC2Shtxh4oCYMDBI43': 'usuario@usuario.com',
      '7XP58I7PlvRI352u1YaFEx7AQFA3': 'admin@admin.com',
      'sYKLtymgm4f9g53ppzqkgQZqCnf2': 'invitado@invitado.com',
    };
  
    userId: string | undefined;
    cardRows: Card[][] = [];
    selectedCards: Card[] = [];
    animalImages: string[] = [
      'assets/frutas/banana.jpg',
      'assets/frutas/fruta par 2.jpg',
      'assets/frutas/fruta par 3.jpg',
      'assets/frutas/fruta par 4.jpg',
      'assets/frutas/fruta par 5.jpg',
      'assets/frutas/fruta par 6.jpg',
      'assets/frutas/fruta par 7.jpg',
      'assets/frutas/fruta par 8.jpg',
    ];
    timer: number = 0;
    gameInterval: any;
    gameStarted: boolean = false;
    userName: string | undefined; // Agrega esta propiedad
  
    constructor(private firestore: Firestore, private afAuth: AngularFireAuth, private router: Router,private navCtrl: NavController) {}
  
    ngOnInit() {
      this.initializeGame();
      this.afAuth.onAuthStateChanged(async (user) => {
        if (user) {
          this.userId = user.uid;
          console.log('UserID:', this.userId);
  
          const userName = await this.getUsuarioName(this.userId);
  
          if (userName) {
            this.userName = userName; // Establece el nombre del usuario
          } else {
            console.error('Nombre de usuario nulo. Se establecerá como "Usuario Desconocido".');
            this.userName = 'Usuario Desconocido';
          }
        }
      });
    }
    goToLogin() {
      this.navCtrl.navigateRoot('/login');
    }
    
    goToMain() {
      this.navCtrl.navigateRoot('/principal');
    }
    
    goToList() {
      this.navCtrl.navigateRoot('/listado-f');
    }
    
    async getUsuarioName(userId: string) {
      if (userId in this.uidToEmail) {
        return this.uidToEmail[userId];
      } else {
        // Si no se encuentra el UID en el mapeo, se usa el UID como nombre de usuario
        this.userName = userId;
        return userId;
      }
    }
  
    initializeGame() {
      const pairs = this.animalImages.concat(this.animalImages);
      for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
      }
      this.cardRows = [];
      const rowSize = 4;
      for (let i = 0; i < pairs.length; i += rowSize) {
        this.cardRows.push(
          pairs
            .slice(i, i + rowSize)
            .map((image) => ({
              image,
              flipped: false,
              matched: false,
            } as Card))
        );
      }
      this.startTimer();
    }
  
    flipCard(card: Card) {
      if (this.gameStarted && !card.flipped && this.selectedCards.length < 2) {
        card.flipped = true;
        this.selectedCards.push(card);
        if (this.selectedCards.length === 2) {
          setTimeout(() => {
            this.selectedCards.forEach((selectedCard) => {
              selectedCard.flipped = false;
            });
            this.checkMatch();
            this.selectedCards = [];
          }, 1000);
        }
      }
    }
  
    checkMatch() {
      if (
        this.selectedCards[0].image === this.selectedCards[1].image
      ) {
        this.selectedCards[0].matched = true;
        this.selectedCards[1].matched = true;
      }
    }
  
    startTimer() {
      this.gameStarted = true;
      this.gameInterval = setInterval(() => {
        this.timer++;
        if (this.isGameFinished()) {
          this.endGame();
        }
      }, 1000);
    }
    
    endGame() {
      clearInterval(this.gameInterval);
      this.guardarTiempoEnFirestore(this.timer);
  
      // Implementa la lógica para finalizar el juego
    }
  
    isGameFinished(): boolean {
      return this.cardRows.every((row) => row.every((card) => card.matched));
    }
  
    async guardarTiempoEnFirestore(tiempo: number) {
      if (!this.userId) {
        console.error('Usuario no autenticado');
        return;
      }
    
      const fecha = new Date();
    
      try {
        const referencia = collection(this.firestore, 'registrosDeTiempofrutas'); // Reemplaza 'registrosDeTiempo' con el nombre de tu colección en Firestore
        const tiempoData = {
          jugadorId: this.userId,
          tiempo: tiempo,
          fecha: fecha,
        };
    
        await addDoc(referencia, tiempoData);
        console.log('Tiempo guardado con éxito en Firestore');
      } catch (error) {
        console.error('Error al guardar el tiempo en Firestore', error);
      }
    }
    
  }