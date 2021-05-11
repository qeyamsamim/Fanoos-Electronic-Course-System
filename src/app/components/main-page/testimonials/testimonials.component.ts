import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  carousel = [
    {
      name: 'Student One',
      date: new Date,
      text: '',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrxeC-T8CO1_Iu63OkIrbsS0CjUAQIVeIrQ&usqp=CAU'
    },
    {
      name: 'Student Two',
      date: new Date,
      text: '',
      imageURL: 'https://news.yale.edu/sites/default/files/d6_files/imce/Wazhma_Sadat-2.jpg'
    },
    {
      name: 'Student Three',
      date: new Date,
      text: '',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKLhhPTTq_dJ5Hf7w4jMZlst9-UfadOVhSgxI8ftfyhsxlpjWNeRAV0q996Y6_YCdHnE&usqp=CAU'
    },
    {
      name: 'Student Four',
      date: new Date,
      text: '',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k2M42nhG0-unCTywYw7RU_cr7FOIe5ffHAlz3BTPMnvV6zKyfC76sM3Bm-6xSg-GTxM&usqp=CAU'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
