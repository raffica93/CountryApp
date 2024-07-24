import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../../interfacce/country';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
@Input() countries: Country[] = [];
}
