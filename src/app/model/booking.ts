import { Channel } from "./channel.enum";
import { Entity } from "./entity";

export class Booking extends Entity {
  static booking = 'booking';
  name!: string;
  email!: string;
  channel!: Channel;
  isMeetAndGreet!: boolean;
  travelDateTime!: Date;
  bookingPrice!: number;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.name = json.name;
      this.email = json.email;
      this.channel = json.channel;
      this.isMeetAndGreet = json.isMeetAndGreet;
      this.travelDateTime = json.date;
      this.bookingPrice = json.bookingPrice;
    }
  }
}