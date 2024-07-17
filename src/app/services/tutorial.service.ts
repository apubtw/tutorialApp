// src/app/services/tutorial.service.ts
import { Injectable } from '@angular/core';

export interface Tutorial {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private tutorials: Tutorial[] = [
    { id: 1, title: 'Cómo rendir tu boleta', content: 'Paso 1: Hacer esto...<br>Paso 2: Hacer aquello...' },
    { id: 2, title: 'Cómo solicitar un viático', content: 'Paso 1: Completar el formulario...<br>Paso 2: Enviarlo a...' },
    { id: 3, title: 'Cómo enviar una solicitud DOI', content: 'Paso 1: Completar tanto...\nPaso 2: completar aquello... '}
  ];

  constructor() { }

  getTutorials(): Tutorial[] {
    return this.tutorials;
  }

  getTutorial(id: number): Tutorial | undefined {
    return this.tutorials.find(tutorial => tutorial.id === id);
  }
}
