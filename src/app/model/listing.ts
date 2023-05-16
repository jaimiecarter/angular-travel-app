import { Entity } from "./entity";
import { VehicleType } from "./vehicle-type";

export class Listing extends Entity {
  static booking = 'booking';
  name!: string;
  pricePerPassenger!: number;
  vehicleType!: VehicleType;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.name = json.name;
      this.pricePerPassenger = json.pricePerPassenger;
      this.vehicleType = json.vehicleType;
    }
  }
}