import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { transfer } from '@authzn/core/util-common';
import { userProviders } from '@authzn/user/data-access';

userProviders.infrastructure();
userProviders.useCases();
userProviders.application();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    transfer(),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: () => appProviders,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
