import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  startGame(nivel: string) {
    // Redirige al usuario a la página de juego correspondiente al nivel seleccionado
    if (nivel === 'easy') {
      this.router.navigate(['/animales']);
    } else if (nivel === 'medium') {
      this.router.navigate(['/herramientas']);
    } else if (nivel === 'hard') {
      this.router.navigate(['/frutas']);
    }
  }
}
