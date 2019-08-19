import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { IEmployeeFromDB } from './employeeFromDBInterface';
// Import EmployeeService
import { EmployeeService } from './employee.services';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployeeFromDB[];

    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    constructor(private _employeeService: EmployeeService) {
        
    }    

    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData,
                error => {
                console.error(error);
                this.statusMessage = 'Problem with the service. Please try again after sometime';
            });
    }

    // The view template will bind to this property to display
    // "Loading data. Please wait..." message when the data is
    // being loaded. If there is an error the second arrow
    // function in the subscribe method sets this property to
    // "Problem with the service. Please try again after sometime"
    statusMessage: string = 'Loading data. Please wait...';

    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }


    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.Gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.Gender === 'Female').length;
    }

}