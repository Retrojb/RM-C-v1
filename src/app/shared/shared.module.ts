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
  MatCardTitle,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

import { BreadcrumbComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    ToolbarComponent,
    WelcomeBannerComponent,
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
    MatGridListModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,

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
    WelcomeBannerComponent,
    // Material modules
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatGridListModule
  ]
})
export class SharedModule { }
