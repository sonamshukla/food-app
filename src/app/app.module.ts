import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { VerificationComponent } from './verification/verification.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LinkAccountComponent } from './link-account/link-account.component';
import { FooterComponent } from './footer/footer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { HeaderComponent } from './header/header.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerificationComponent,
    UserInfoComponent,
    LinkAccountComponent,
    FooterComponent,
    ItemCardComponent,
    HeaderComponent,
    CartViewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
