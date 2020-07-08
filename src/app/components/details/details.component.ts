import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  @Output() onSaveEvent = new EventEmitter();
  private status = ['Présent', 'Absent', 'Peut-être'];
  private sex = ['M', 'F'];
  private customer: Customer = new Customer();
  private isDataCompleted = false;

  constructor() { }

  ngOnInit() {
    this.customerInit();
  }

  private customerInit(): void {
    this.customer = new Customer();
    this.customer.firstName = '';
    this.customer.lastName = '';
    this.customer.sex = null;
    this.customer.status = null;
  }

  private onInputChanged(): void {
    // Set flag "isDataCompleted" to true if all fields were filled. Uses to show/hide Save button.
    this.isDataCompleted = !!(this.customer.firstName && this.customer.lastName && this.customer.sex && this.customer.status);
  }

  private onSave(): void {
    // Send event to parent component.
    this.onSaveEvent.emit(this.customer);

    // Clear controls
    this.customerInit();
    this.isDataCompleted = false;
  }
}
