import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SDKBrowserModule } from '../../../sdk/index';
// Material modules
import {
  MatDialogModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule
} from '@angular/material';

import { BreadcrumbComponent } from './breadcrumbs.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [

  ],
  exports: [
    BreadcrumbComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    // Material modules
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class SharedModule { }
