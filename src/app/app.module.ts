import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ContainerComponent } from './container/container.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonComponent } from './calculator-button/calculator-button.component';
import { StoreModule } from '@ngrx/store';
import { calculatorReducer } from './calculator-store/calculator.reducers';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContainerComponent,
    CalculatorComponent,
    CalculatorButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    StoreModule.forRoot({ accumulator: calculatorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
