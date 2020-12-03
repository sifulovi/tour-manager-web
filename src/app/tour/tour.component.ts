import {Component, OnInit} from '@angular/core';
import {Tour} from './model/tour';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TourPackage} from './model/tourPackage';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tour: Tour;
  tourPackages: FormArray;
  tourForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tourForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', ''],
      day: ['', [Validators.required]],
      tourPackages: this.fb.array([this.createPackage()])
    });
  }

  createPackage(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      amount: '',
    });
  }

  ngOnInit(): void {

  }

  addPackage(): void {
    this.tourPackages = this.tourForm.get('tourPackages') as FormArray;
    this.tourPackages.push(this.createPackage());
  }

  get packageControls() {
    return this.tourForm.get('tourPackages')['controls'];
  }

  removePackage(i: number) {
    this.tourPackages.removeAt(i);
  }


  submitForm(): void {
    console.log(this.tourForm.value);
    // tslint:disable-next-line:forin
    for (const i in this.tourForm.controls) {
      this.tourForm.controls[i].markAsDirty();
      this.tourForm.controls[i].updateValueAndValidity();
    }
  }
}
