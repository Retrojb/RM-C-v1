import { HttpClientModule } from '@angular/common/http';
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
  MatChipsModule,
  MatMenuModule,
  MatIconModule,
  MatCard,
  MatCardContent,
  MatCardModule
} from '@angular/material';

import { BreadcrumbComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    ToolbarComponent,
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
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [

  ],
  exports: [
    BreadcrumbComponent,
    ToolbarComponent,
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
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatCard,
    MatCardContent
  ]
})
export class SharedModule { }
