import { FormHelpers } from './../form-helpers/form-helpers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../model/booking';

@Component({
  selector: 'trv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  bookingDateTimeUtc: Date = new Date();
  timeZone: string = "Australia/Sydney";

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.setupForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(change => console.log(change)); // normally custom validation here
    this.form.get('travelDatetime')?.valueChanges.subscribe(dateChange => {
      if (dateChange instanceof Date)
        this.bookingDateTimeUtc = FormHelpers.userTimezoneToSpecifiedTimeZone(dateChange, this.timeZone);
    });
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      travellerName: [null, Validators.required],
      travellerEmail: [null, [Validators.required, Validators.email]],
      channel: [null, Validators.required],
      meetAndGreet: [false, null],
      travelDatetime: [null, Validators.required],
      bookingPrice: [null, Validators.required]
    });
  }

  /* validation -> I haven't added custom validation
  like date cannot be before today etc.
  Further -> I know the *required div moves the form elements. Sorry... I know.
  */

  onSubmit() {
    if (this.form.valid) {
      const booking = new Booking();
      booking.name = this.form.value.travellerName;
      booking.email = this.form.value.travellerEmail;
      booking.channel = this.form.value.channel;
      booking.isMeetAndGreet = this.form.value.meetAndGreet;
      booking.travelDateTime = this.bookingDateTimeUtc
      booking.bookingPrice = this.form.value.bookingPrice;

      console.log('this is the booking to send to the API', booking)
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
