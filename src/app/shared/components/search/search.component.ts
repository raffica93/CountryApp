import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
@Input() placeholder: string = '';
@Output () onValue = new EventEmitter<string>();
@ViewChild('txtInput') txtInput: any;


emitValue(term: string) {
  this.onValue.emit(term);
}

}
