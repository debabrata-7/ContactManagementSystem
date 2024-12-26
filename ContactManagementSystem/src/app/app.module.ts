import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppHTTPInterceptor } from './services/app-http.interceptor';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatTableModule } from '@angular/material/table';

import { FormsModule } from '@angular/forms';

//import {BreadcrumbModule } from 'primeng/primeng'
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { ChipsModule } from 'primeng/chips';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';

import { MatChipListbox } from '@angular/material/chips';
//import { HomePageComponent } from './components/home-page/home-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateComponentsComponent } from './components/update-components/update-components.component';

//import { BreadcrumbModule } from 'xng-breadcrumb';
@NgModule({
  declarations: [
    AppComponent,
    
    HomePageComponent,
    AddContactComponent,
 UpdateComponentsComponent,
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule, 
    MessagesModule,
    MessageModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgxMatSelectSearchModule,
    MatTableModule,
    FormsModule,
    BreadcrumbModule,
    MatPaginatorModule,
    DialogModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    ChipsModule,
    MatCheckboxModule,
    MatSortModule,
    MatChipListbox,
    MatSlideToggleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHTTPInterceptor, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
