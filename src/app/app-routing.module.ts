import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page-compoment/landing-page.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'facesnaps', 
    loadChildren: () =>
      import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)
  },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    AuthModule
  ]
})
export class AppRoutingModule {

}