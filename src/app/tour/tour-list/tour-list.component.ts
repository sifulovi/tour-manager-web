import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzTableLayout, NzTablePaginationPosition, NzTableSize} from 'ng-zorro-antd/table';
import {TourService} from '../service/tour.service';
import {TourPackage} from '../model/tourPackage';
import {Tour} from '../model/tour';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  settingForm?: FormGroup;
  listOfData: Tour [] = [];
  listOfTours: Tour [] = [];
  displayData: Tour [] = [];
  allChecked = false;
  indeterminate = false;
  fixedColumn = false;
  scrollX: string | null = null;
  scrollY: string | null = null;
  settingValue!: Setting;


  currentPageDataChange($event: Tour[] ): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
  }

  checkAll(value: boolean): void {
  }

  generateData(): Tour[]  {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
    return data;
  }
  getTOurListDataFromAPI(): Tour[] {
     this.tourService.getTourListFormAPI()
      .subscribe(response => {
        this.listOfData = response;
        console.log('Tour List : ' , this.listOfData);
      });
     return this.listOfData;
  }

  constructor(private formBuilder: FormBuilder, private tourService: TourService ) {
  }

  ngOnInit(): void {
    this.settingForm = this.formBuilder.group({
      bordered: false,
      loading: false,
      pagination: true,
      sizeChanger: false,
      title: true,
      header: true,
      footer: true,
      expandable: true,
      checkbox: true,
      fixHeader: false,
      noResult: false,
      ellipsis: false,
      simple: false,
      size: 'small',
      tableScroll: 'unset',
      tableLayout: 'auto',
      position: 'bottom'
    });
    this.settingValue = this.settingForm.value;
    this.settingForm.valueChanges.subscribe(value => (this.settingValue = value));

    this.listOfData = this.getTOurListDataFromAPI();

    console.log('List Of data : ' , this.listOfData);
  }
}

interface ItemData {
  name: string;
  age: number | string;
  address: string;
  checked: boolean;
  expand: boolean;
  description: string;
  disabled?: boolean;
}

interface Setting {
  bordered: boolean;
  loading: boolean;
  pagination: boolean;
  sizeChanger: boolean;
  title: boolean;
  header: boolean;
  footer: boolean;
  expandable: boolean;
  checkbox: boolean;
  fixHeader: boolean;
  noResult: boolean;
  ellipsis: boolean;
  simple: boolean;
  size: NzTableSize;
  tableScroll: string;
  tableLayout: NzTableLayout;
  position: NzTablePaginationPosition;
}
