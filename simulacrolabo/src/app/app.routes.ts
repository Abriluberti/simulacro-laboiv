import { Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculasAltaComponent } from './components/peliculas-alta/peliculas-alta.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

export const routes: Routes = [
    { path: 'bienvenido', pathMatch: 'full', redirectTo: '/busqueda' },
    { path: 'busqueda', component: BusquedaComponent},
    { path: 'peliculas/alta', component: PeliculasAltaComponent},
    { path: 'actor/alta', component: ActorAltaComponent},
    { path: 'actor/listado', component: ActorListadoComponent},
    { path: 'tabla/pelicula', component: TablaPeliculaComponent},
    { path: 'tabla/paises', component: TablaPaisesComponent},
    { path: 'actor/actorpelicula', component: ActorAltaComponent},
    { path: 'peliculas/listado', component: PeliculasAltaComponent},
];
