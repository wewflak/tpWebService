import { Component, OnInit } from '@angular/core';
import { PracticaService } from 'src/app/services/practica.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr-generator',
  template: `
    <div>
      <img [src]="qrCodeImage" alt="QR Code">
    </div>
  `,
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent implements OnInit{
  
  qrCodeImage: SafeUrl | undefined;

  constructor(private qrService: PracticaService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
  }

  prueba() {
    this.qrService.getQr('http://www.neutrinoapi.com').subscribe(
      (response: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Convert the image data to a data URL
          const imageDataUrl = reader.result as string;
          this.qrCodeImage = this.sanitizer.bypassSecurityTrustUrl(imageDataUrl);
        };
        reader.readAsDataURL(response);
      },
      (error) => {
        console.error('Error generating QR code:', error);
      }
    );
  }
}

