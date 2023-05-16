import { Entity } from "./entity";
import { Listing } from "./listing";

export class Journey extends Entity {
  entityType = 'journey';
  from!: string;
  to!: string;
  listings!: Listing[];

  constructor(json?: any) {
    super(json);

    if (json) {
      this.from = json.from;
      this.to = json.to;
      
      if (json.listings && Array.isArray(json.listings)) {
        this.listings = json.listings.map((listing: any) => new Listing(listing));
      } else {
        this.listings = [];
      }
    }
  }
}