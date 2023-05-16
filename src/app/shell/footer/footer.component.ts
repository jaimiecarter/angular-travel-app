import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = 0;
  linkUrl: string = "https://www.linkedin.com/in/jaimie-carter-b5836919/";
  constructor() {
    //
  }

  ngOnInit(): void {
    this.year = this.getThisYear();
  }

  getThisYear(): number {
    const now = new Date();
    return now.getFullYear();
  }

}
