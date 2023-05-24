import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snaps.service';
import { Observable, Subject, filter, interval, map, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<boolean>;
  interval$!: Observable<string>;

  constructor (private faceSnapsService: FaceSnapsService) {
    
  }

  ngOnInit(): void {
    // this.faceSnaps = this.faceSnapsService.faceSnaps;
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    this.destroy$ = new Subject<boolean>();
    // this.subscribeToObservbleRequiresDestroy();
    // this.subscribeToObservatbleUsingAsync();

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  subscribeToObservbleRequiresDestroy(): void {
    interval(1000).pipe(
      // take(10),
      tap(console.log),
      takeUntil(this.destroy$)
    )
    .subscribe();
  }

  subscribeToObservatbleUsingAsync(): void {
    this.interval$ = interval(1000).pipe(
      filter(value => value %3 === 0),
      map(value => value % 2 === 0? 
      `Je suis ${value} et je suis pair`:
      `Je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text))    
    )
  }

  logger(text: string): void {
    console.log(`log: ${text}`);
  }
  
}