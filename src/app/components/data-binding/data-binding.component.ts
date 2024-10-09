import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',

})
export class DataBindingComponent {
  userDetails = {
    email: 'sample@email.com',
    password: 'password',
  }
  courseName: string = 'Angular 18'
  inputType = 'checkbox'
  rollNo: number = 2080101
  isStudent: boolean = true
  currentDate: Date = new Date()
  customClass = "bg-gray-400"
  check: boolean = true

  //* Initialization Logic Before rendering
  constructor(){
    console.log(this.courseName)
  }
  //* Runs when any dependency chages
  ngOnInit() {

  }
  //* Runs when a specific dependency chages
  ngOnChanges () {

  }
  //* Runs when a component Dies (Clean up function)
  ngOnDestroy() {

  }

  showAlert(message: string) {
    alert(message)
  }

  changeCourseName() {
    this.check = !this.check
    this.check ? this.courseName = "Angular 18" : this.courseName = "React JS"
  }
  // changeCourseName(newCourseName: string) {
  //   this.courseName = newCourseName
  // }
}
