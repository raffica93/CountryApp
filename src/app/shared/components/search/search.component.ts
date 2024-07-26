import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit,OnDestroy {



@Input() placeholder: string = '';
@Input() initialValue: string = '';
@Output () onValue = new EventEmitter<string>();
@Output () onDebound = new EventEmitter<string>();
@ViewChild('txtInput') txtInput: any;

private debouncer:Subject<string> = new Subject<string>();
private debouncerSubscription?:Subscription

ngOnInit(): void {
  this.debouncerSubscription=this.debouncer
  .pipe(
    debounceTime(400)
  )
  .subscribe(term => {
    this.onDebound.emit(term);
  })
}

emitValue(term: string) {
  this.onValue.emit(term);
}
onkeyPress(event: any) {

  this.debouncer.next(event)
}

ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
}
}
