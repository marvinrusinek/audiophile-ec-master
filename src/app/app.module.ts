import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './audiophile/containers/header/header.component';
import { MainComponent } from './audiophile/containers/main/main.component';
import { FooterComponent } from './audiophile/containers/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'audiophile',
    pathMatch: 'full'
  },
  {
    path: 'audiophile',
    loadChildren: () =>
      import('./audiophile/routing/audiophile-homepage-routing.module').then(m => m.AudiophileRoutingModule)
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
