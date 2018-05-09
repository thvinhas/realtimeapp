import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2/index';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseAppConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
