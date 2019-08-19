"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Import EmployeeService
var employee_services_1 = require("./employee.services");
var EmployeeListComponent = (function () {
    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        // The view template will bind to this property to display
        // "Loading data. Please wait..." message when the data is
        // being loaded. If there is an error the second arrow
        // function in the subscribe method sets this property to
        // "Problem with the service. Please try again after sometime"
        this.statusMessage = 'Loading data. Please wait...';
        // This property keeps track of which radio button is selected
        // We have set the default value to All, so all the employees
        // are displayed in the table by default
        this.selectedEmployeeCountRadioButton = 'All';
    }
    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeesData) { return _this.employees = employeesData; }, function (error) {
            console.error(error);
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
        });
    };
    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.Gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.Gender === 'Female'; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
            providers: [employee_services_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_services_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map