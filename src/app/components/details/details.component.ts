import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  @Output() onSaveEvent = new EventEmitter();
  status = ['Présent', 'Absent', 'Peut-être'];
  sex = ['M', 'F'];
  customer: Customer = new Customer();
  isDataCompleted = false;

  constructor() { }

  ngOnInit() {
    this.customerInit();
  }

  customerInit(): void {
    this.customer = new Customer();
    this.customer.firstName = '';
    this.customer.lastName = '';
    this.customer.sex = null;
    this.customer.status = null;
  }

  onInputChanged(): void {
    // Set flag "isDataCompleted" to true if all fields were filled. Uses to show/hide Save button.
    this.isDataCompleted = !!(this.customer.firstName && this.customer.lastName && this.customer.sex && this.customer.status);
  }

  onSave(): void {
    // Send event to parent component.
    this.onSaveEvent.emit(this.customer);

    // Clear controls
    this.customerInit();
    this.isDataCompleted = false;
  }
}
