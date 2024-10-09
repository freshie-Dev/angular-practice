import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
  
})
export class TemplateFormComponent {
  studentObj: any = {
    fName: '',
    lName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    isTermsAccepted: false
  }

  formValue: any;
  onSubmit() {
    // debugger;
    this.formValue = this.studentObj
    
  }
}
