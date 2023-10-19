import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, collection, getDocs, query, orderBy, limit } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';


@Component({
  selector: 'app-listado-f',
  templateUrl: './listado-f.page.html',
  styleUrls: ['./listado-f.page.scss'],
})
export class ListadoFPage implements OnInit {

  mejoresRegistros: any[] = [];
  uidToEmail: { [key: string]: string } = {
    'n2QyvpG3CMZ0Kb1V6eCQ7L2Qzyk1': 'invitado@invitado.com',
    'h5Ht3PBxMecqh5MJPR3oblvK2Xy1': 'admin@admin.com',
  };

  constructor(private route: ActivatedRoute, private router: Router, private firestore: Firestore) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['mejoresRegistros']) {
        this.mejoresRegistros = params['mejoresRegistros'];
      }
    });

    // Llamar a la función para obtener los mejores registros cuando se carga esta página
    await this.obtenerMejoresRegistros();
  }

  async obtenerMejoresRegistros() {
    const querySnapshot = await getDocs(query(
      collection(this.firestore, 'registrosDeTiempofrutas'),
      orderBy('tiempo'),
      limit(5)
    ));

    this.mejoresRegistros = querySnapshot.docs.map((doc) => doc.data());
  }

  // Función para formatear la fecha a un formato legible
  formatDate(timestamp: Timestamp) {
    const date = timestamp.toDate(); // Convierte Timestamp a una fecha JavaScript
    return date;
  }

  // Puedes usar esta función para navegar a la página 'animales' cuando lo necesites
  navigateToAnimalesPage() {
    // Usa el enrutamiento para navegar a la página 'animales' y pasa los datos como entrada
    this.router.navigate(['/animales'], {
      queryParams: {
        mejoresRegistros: this.mejoresRegistros
      }
    });
  }
}
