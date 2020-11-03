import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventosComponent } from './eventos/eventos.component';


import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';

import { EventoService } from './_services/evento.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { ContatosComponent } from './contatos/contatos.component';
import { TituloComponent } from './_shared/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    NavComponent,
    DateTimeFormatPipePipe,
    DashboardComponent,
    PalestrantesComponent,
    TituloComponent,
    ContatosComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EventoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
