import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(private router: Router) { }

onViewFaceSnap() {
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}
