import { Routes } from '@angular/router';
import { EscanerComponent } from './components/escaner/escaner.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { InventarioComponent } from './components/inventario/inventario.component';

export const routes: Routes = [
    { path: '', redirectTo: 'InicioSesion', pathMatch: 'full' }, // Redirigir a la página de inicio
    { path: 'escanear', component: EscanerComponent },
    { path: 'InicioSesion', component: InicioSesionComponent },
    { path: 'inventario', component: InventarioComponent }
];
