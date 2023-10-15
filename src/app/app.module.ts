import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    DropdownModule
  ],
  providers: [ DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
