// generador.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent {
  @ViewChild('barcodeCanvas') barcodeCanvas!: ElementRef<HTMLCanvasElement>;
  barcodeValue = '123456789012'; // Valor inicial de 12 dígitos (estándar UPC)
  displayText = true;
  statusMessage = '';
  barcodeFormat = 'CODE128'; // Formato estándar industrial

  ngAfterViewInit() {
    this.generateBarcode();
  }

  generateBarcode() {
    try {
      JsBarcode(this.barcodeCanvas.nativeElement, this.barcodeValue, {
        format: this.barcodeFormat,
        displayValue: this.displayText,
        width: 2, // Grosor de línea estándar
        height: 100, // Altura recomendada
        margin: 10, // Márgenes adecuados
        lineColor: '#000000', // Negro estándar para las barras
        background: '#FFFFFF', // Fondo blanco estándar
        font: 'OCRB', // Fuente OCR estándar para códigos de barras
        fontSize: 16,
        textMargin: 5,
        valid: (valid) => {
          if (!valid) {
            this.statusMessage = 'Código no válido para el formato seleccionado';
          }
        }
      });
      this.statusMessage = 'Código de barras generado correctamente';
      setTimeout(() => this.statusMessage = '', 3000);
    } catch (error) {
      this.statusMessage = 'Error al generar el código de barras';
      console.error(error);
    }
  }

  generateRandom() {
    // Genera un código de 12 dígitos (estándar UPC)
    this.barcodeValue = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    this.generateBarcode();
  }

  downloadBarcode() {
    const canvas = this.barcodeCanvas.nativeElement;
    const link = document.createElement('a');
    link.download = `barcode-${this.barcodeValue}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  validateBarcode() {
    // Validación básica para CODE128
    return /^[!-~ ]+$/.test(this.barcodeValue);
  }
}