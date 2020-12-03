import {TourPackage} from './tourPackage';

export interface Tour {
  id: number;
  dateCreated: string;
  lastUpdated: string;
  title: string;
  description: string;
  image: string;
  day: string;
  fromDate: string;
  toDate: string;
  member: string;
  lastDate: string;
  tourPackages: TourPackage [];

  // List<TourPackage> tourPackages
}
