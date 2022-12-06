// Basic Stuff was imported here 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
// End of basic stuff
// Elements to create the drag and drop thing 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { TableDragComponent } from './table-drag/table-drag.component';
// Elements to create the drag and drop thing 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TableDragComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
