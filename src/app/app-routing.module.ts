// Modulos
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Modulos Personalizados
import {PagesRoutingModule} from './pages/pages.routing';
import {AuthRoutingModule} from './auth/auth.routing';

// Componentes
import {NopagefoundComponent} from './nopagefound/nopagefound.component';


const routes: Routes = [
    // path: '/dashborad' PagesRoutingModule
    // path: 'auth' AuthRoutingModule
    { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent },
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}

