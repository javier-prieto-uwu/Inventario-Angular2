import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ZXingScannerModule // Importación correcta del módulo del escáner
  ],
  selector: 'app-escaner',
  templateUrl: './escaner.component.html',
  styleUrls: ['./escaner.component.css']
})
export class EscanerComponent {
  // Propiedad corregida (scannerEnabled en lugar de ScannerEnabled)
  scannerEnabled = false;
  scanResult: string | null = null;
  
  // Formatos soportados
  allowedFormats = [
    BarcodeFormat.EAN_13, // Códigos de barras estándar
    BarcodeFormat.QR_CODE, // Códigos QR
    BarcodeFormat.CODE_128, // Códigos 128
    BarcodeFormat.DATA_MATRIX // Códigos Data Matrix
  ];

  // Manejo del escaneo exitoso
  onScanSuccess(result: string) {
    this.scanResult = result;
    this.scannerEnabled = false;
    console.log('Código escaneado:', result);
  }

  // Iniciar el escáner
  startScanner() {
    this.scanResult = null;
    this.scannerEnabled = true;
  }

  // Detener el escáner
  stopScanner() {
    this.scannerEnabled = false;
  }
}