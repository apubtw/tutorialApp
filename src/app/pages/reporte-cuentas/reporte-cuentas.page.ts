import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-cuentas',
  templateUrl: './reporte-cuentas.page.html',
  styleUrls: ['./reporte-cuentas.page.scss'],
})
export class ReporteCuentasPage {
  nombreCompleto: string = '';
  correoUC: string = '';
  descripcionProyecto: string = '';
  archivoZip: File | undefined;
  formSubmitted: boolean = false;

  constructor(private http: HttpClient, private alertController: AlertController) {}

  adjuntarArchivo(event: any) {
    this.archivoZip = event.target.files[0];
  }

  enviarReporte() {
    const formData = new FormData();
    formData.append('nombreCompleto', this.nombreCompleto);
    formData.append('correoUC', this.correoUC);
    formData.append('descripcionProyecto', this.descripcionProyecto);
    if (this.archivoZip) {
      formData.append('archivoZip', this.archivoZip, this.archivoZip.name);
    }
  
    const headers = new HttpHeaders();
    headers.append('Accept', 'text/html'); // Asegúrate de aceptar texto/html
  
    this.http.post('https://soapy-general-blackbird.glitch.me/send-email', formData, { headers, responseType: 'text' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.mostrarAlertaError();
          return throwError('Error al enviar el correo');
        })
      )
      .subscribe(response => {
        this.mostrarAlertaExito();
        setTimeout(() => {
          window.location.reload();
        }, 2000); // 2000 milisegundos = 2 segundos
      });
  }
  

  async mostrarAlertaCamposRequeridos() {
    const alert = await this.alertController.create({
      header: 'Campos requeridos',
      message: 'Por favor complete todos los campos requeridos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarAlertaExito() {
    const alert = await this.alertController.create({
      header: 'Correo enviado',
      message: `El correo con el archivo ${this.archivoZip?.name} se envió correctamente.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarAlertaError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Ocurrió un error al enviar el correo.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
