import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Journey } from '../model/journey';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Listing } from '../model/listing';

@Component({
  selector: 'trv-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})

export class OptionsComponent implements OnInit {
  journey$: Observable<Journey> = new Observable<Journey>();
  listings: Listing[] = [];
  fullListings: Listing[] = [];
  to: string = '';
  from: string = '';
  minPrice: number = 0;
  maxPrice: number = 0;
  avgPrice: number = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.apiService.getJourneyOptions().pipe(
      tap(j => {
        this.to = j.to;
        this.from = j.from;
        this.fullListings = j.listings;
        this.fullListings = j.listings;
        this.minPrice = this.getMinPrice();
        this.maxPrice = this.getMaxPrice();
        this.avgPrice = this.getAvgPrice();
      }),
      map(j => {
        return j.listings.filter(l => l.vehicleType.maxPassengers === 3)
          .sort((a, b) => a.pricePerPassenger - b.pricePerPassenger);
      })
    ).subscribe(listings => {
      this.listings = listings;
    });
  }

  getMinPrice(): number {
    if (this.fullListings.length === 0) {
      return 0;
    }
    return this.fullListings.reduce(
      (min, listing) => (listing.pricePerPassenger < min ? listing.pricePerPassenger : min),
      this.fullListings[0].pricePerPassenger
    );
  }

  getMaxPrice(): number {
    if (this.fullListings.length === 0) {
      return 0;
    }
    return this.fullListings.reduce(
      (max, listing) => (listing.pricePerPassenger > max ? listing.pricePerPassenger : max),
      this.fullListings[0].pricePerPassenger
    );
  }

  getAvgPrice(): number {
    if (this.fullListings.length === 0) {
      return 0;
    }
    const total = this.fullListings.reduce((sum, listing) => sum + listing.pricePerPassenger, 0);
    return total / this.fullListings.length;
  }

  currencyConvertor(amount: number): string {
    return amount.toLocaleString('en-AU', {
      style: 'currency',
      currency: 'AUD'
    });
  }

}
