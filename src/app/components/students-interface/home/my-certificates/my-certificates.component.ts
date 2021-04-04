import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent implements OnInit {

  certificates = [
    {
      name: 'Advanced QuickBooks',
      issueDate: 'March 31, 2021',
      btnText: 'Download',
      imgURL: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
    },
    {
      name: 'Basic Accounting Class',
      issueDate: 'March 12, 2021',
      btnText: 'Download',
      imgURL: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
