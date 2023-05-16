import { Entity } from "./entity";
import { VehicleTypeName } from "./vehicle-type-name.enum";

export class VehicleType extends Entity {
  static booking = 'vehicleType';
  name!: VehicleTypeName;
  maxPassengers!: number;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.name = json.name;
      this.maxPassengers = json.maxPassengers;
    }
  }
}