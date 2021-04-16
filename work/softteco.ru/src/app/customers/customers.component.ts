import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers = [
    {
      icon: 'assets/works/samsung.svg',
      height: 52
    },
    {
      icon: 'assets/works/evernote.svg',
      height: 64
    },
    {
      icon: 'assets/works/kinvey.svg',
      height: 41
    },
    {
      icon: 'assets/works/worldbank.svg',
      height: 31
    },
    {
      icon: 'assets/works/barnes.svg',
      height: 27
    },
    {
      icon: 'assets/works/johnson.svg',
      height: 29
    },
    {
      icon: 'assets/works/vw.svg',
      height: 43
    },
    {
      icon: 'assets/works/sber.svg',
      height: 33
    },
    {
      icon: 'assets/works/blue.svg',
      height: 34
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
