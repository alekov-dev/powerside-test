import { Component, OnInit, OnDestroy } from '@angular/core';
import { LabelUpdateService } from 'src/app/services/label-update.service';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, OnDestroy {
  labelValueRef: Subscription = null;
  labelValue: string = '';
  customerInfo = '';
  constructor(private labelUpdateService: LabelUpdateService) { }

  ngOnInit() {
    this.labelUpdateService.startTimer();
    this.labelValueRef = this.labelUpdateService.labelValueObs.subscribe((value) => {
      this.labelValue = value;
    });
  }

  showCustomerData(pCustomer: Customer): void {
    this.customerInfo = `Prénom: ${pCustomer.firstName}, Nom: ${pCustomer.lastName}, Statut: ${pCustomer.status}, Sexe: ${pCustomer.sex}`;
  }

  ngOnDestroy() {
    this.labelUpdateService.stopTimer();
    this.labelValueRef.unsubscribe();
  }
}
