import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatButtonModule,
          MatCardModule, MatInputModule, MatIconModule, MatRadioModule,
          MatTableModule, MatSlideToggleModule} from '@angular/material';

const appRoutes: Routes = [
  { path: 'consulta', component: ConsultaComponent },
  { path: 'cadastro',      component: CadastroComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatRadioModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


