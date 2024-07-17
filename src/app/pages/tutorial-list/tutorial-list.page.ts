import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.page.html',
  styleUrls: ['./tutorial-list.page.scss'],
})
export class TutorialListPage {

  tutorials = [
    { id: 1, title: 'Cómo rendir tu boleta', content: 'Paso 1: Hacer esto...\nPaso 2: Hacer aquello...' },
    { id: 2, title: 'Cómo solicitar un viático', content: 'Paso 1: Completar el formulario...\nPaso 2: Enviarlo a...' },
    { id: 3, title: 'Cómo enviar una solicitud DOI', content: 'Paso 1: Completar tanto...\nPaso 2: completar aquello... '}
  ];

  constructor(private router: Router) { }

  goToDetail(tutorial: { id: any; }) {
    this.router.navigate(['/tutorial/', tutorial.id]);
  }
}
