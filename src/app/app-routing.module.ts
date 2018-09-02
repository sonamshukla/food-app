import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { VerificationComponent } from 'src/app/verification/verification.component';
import { UserInfoComponent } from 'src/app/user-info/user-info.component';
import { LinkAccountComponent } from 'src/app/link-account/link-account.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { CartViewComponent } from 'src/app/cart-view/cart-view.component';


@NgModule({
  imports: [
      RouterModule.forRoot([
          { path: 'login', component: LoginComponent },
          { path: 'verification', component: VerificationComponent },
          { path: 'user', component: UserInfoComponent },
          { path: 'link-office-account', component: LinkAccountComponent },
          { path: 'footer', component: FooterComponent },
          { path: 'cart-view', component: CartViewComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' }
      ]) // , { enableTracing: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
