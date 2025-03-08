import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from '../../models/department.model';

@Component({
  selector: 'my-prefix-department-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-filter.component.html',
  styleUrls: ['./department-filter.component.css']
})
export class DepartmentFilterComponent {
  @Input() departments: Department[] = [];
  @Output() departmentSelected = new EventEmitter<number | 'all'>(); 
  onSelectDepartment(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.departmentSelected.emit(selectedValue === 'all' ? 'all' : Number(selectedValue));
  }
}
