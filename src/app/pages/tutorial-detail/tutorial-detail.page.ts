// src/app/pages/tutorial-detail/tutorial-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial, TutorialService } from '../../services/tutorial.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.page.html',
  styleUrls: ['./tutorial-detail.page.scss'],
})
export class TutorialDetailPage implements OnInit {
  tutorial: Tutorial | undefined;

  constructor(
    private route: ActivatedRoute,
    private tutorialService: TutorialService
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.tutorial = this.tutorialService.getTutorial(id);
    } else {
      console.error('ID no proporcionado en la ruta.');
    }
  }
  downloadPDF() {
    const element = document.getElementById('tutorial-content');
    if (!element) {
      console.error('ID no encontrado');
      return;
    }

    html2canvas(element).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF();
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('tutorial.pdf');
    });
  }
}
