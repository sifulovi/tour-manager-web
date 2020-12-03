import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {
  NzButtonModule,
  NzDividerModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzPopconfirmModule, NzRadioModule, NzSwitchModule,
  NzTableModule,
  NzToolTipModule
} from 'ng-zorro-antd';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    TourListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzDividerModule,
    NzInputModule,
    NzFormModule,
    NzToolTipModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzRadioModule,
    NzSwitchModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
