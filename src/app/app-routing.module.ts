import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page-compoment/landing-page.component';
import { SingleFaceSnapComponent } from './face-snaps/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './face-snaps/new-face-snap/new-face-snap.component';

const routes: Routes = [
    { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {

}