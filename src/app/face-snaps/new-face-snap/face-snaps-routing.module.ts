import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleFaceSnapComponent } from '../single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from '../face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './new-face-snap.component';

const routes: Routes = [
    { path: 'create', component: NewFaceSnapComponent },
    { path: ':id', component: SingleFaceSnapComponent },
    { path: '', component: FaceSnapListComponent },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}