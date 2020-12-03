import {Injectable} from '@angular/core';
import {Tour} from '../model/tour';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RandomUser} from '../model/random-user';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) {
  }

  public API = 'http://localhost:8080/tour';

  tourList: Tour[] = [
    {
      title: 'cox baxar',
      description: 'lorem5 lorem korem',
      image: 'phonto.jpg',
      day: '4',
      dateCreated: '13/34/2020',
      fromDate: '13/34/2020',
      lastDate: '23',
      member: '3',
      lastUpdated: '',
      id: 1,
      toDate: '13/32/2020',
      tourPackages: [
        {id: 1, name: 'bus', description: 'description', amount: 344},
        {id: 1, name: 'boat', description: 'description', amount: 344},
        {id: 1, name: 'lunch', description: 'description', amount: 344},
      ]
    }
  ];

  randomUserUrl = this.tourList;

  addOrUpdateEmployee(tour: Tour) {
    const existEmp: number = this.getTourId(tour.id);
    if (existEmp === -1) {
      // will creates leave
      tour.id = this.tourList.length + 1;
      this.tourList.push(tour);
    } else {
      // will updates leave
      this.deleteTour(tour.id);
      this.tourList.push(tour);
    }
  }

  getTourId(tourId: number): number {
    return this.tourList.findIndex(x => x.id === tourId);
  }

  deleteTour(id: number) {
    const tourId = this.getTourId(id);
    this.tourList.splice(tourId, 1);
  }

  getTourList() {
    return this.tourList;
  }

  getTourListFormAPI()  {
   return this.http.get<Tour[]>(`${this.API}/tourList`);
  }
}
