export class FormHelpers {
  /*
   Use this to change the local time to time of the asset

   As an example if were making a booking for a traveller in NSW (australia/sydney) 
   but are physically making the booking from Auckland:

   Start time of booking: 06/08/2021 4pm

   DateTime in browser: Fri Aug 06 2021 16:00:00 GMT+1200 (New Zealand Standard Time)
   DateTime after update: Fri Aug 06 2021 18:00:00 GMT+1200 (New Zealand Standard Time)

   You can see that it has shifted the time 2 hours forward.
   Now UTC is correct at 06/08/2021 6:00:00 am
   Sydney Time: 06/08/2021 4:00:00 pm

   */

  static userTimezoneToSpecifiedTimeZone(date: Date, timeZone: string): Date {
    // Collect raw values to create date object
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const requested = new Date(year, month, day, hours, minutes, 0);

    const localised = requested.toLocaleString("en-US", { timeZone: timeZone });

    const passedLocal = new Date(localised);
    const offset = Math.round((requested.getTime() - passedLocal.getTime()) / 60000);
    requested.setMinutes(requested.getMinutes() + offset);
    const returnDate = requested.toUTCString();

    return new Date(returnDate);
  }
}