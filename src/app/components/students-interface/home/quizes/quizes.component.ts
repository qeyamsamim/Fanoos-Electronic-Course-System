import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  // stepperHeader = [
  //   { number: '1', dataTarget: '#test-l-1' },
  //   { number: '2', dataTarget: '#test-l-2' },
  //   { number: '3', dataTarget: '#test-l-3' },
  //   { number: '4', dataTarget: '#test-l-4' },
  //   { number: '5', dataTarget: '#test-l-5' },
  //   { number: '6', dataTarget: '#test-l-6' },
  //   { number: '7', dataTarget: '#test-l-7' },
  //   { number: '8', dataTarget: '#test-l-8' }
  // ];

  stepperContent = [
    {
      id: 'test-l-1',
      question: 'This is the first question. What is the answer?',
      answers: [
        { answerId: 'option1', value: 'option1', option: 'This is the first option' },
        { answerId: 'option2', value: 'option2', option: 'This is the second option' },
        { answerId: 'option3', value: 'option3', option: 'This is the thrid option' },
        { answerId: 'option4', value: 'option4', option: 'This is the fourth option' }
      ]
    },
    {
      id: 'test-l-2',
      question: 'This is the second question. What is the answer?',
      answers: [
        { answerId: 'option1', value: 'option1', option: 'This is the first option' },
        { answerId: 'option2', value: 'option2', option: 'This is the second option' },
        { answerId: 'option3', value: 'option3', option: 'This is the thrid option' },
        { answerId: 'option4', value: 'option4', option: 'This is the fourth option' }
      ]
    },
    {
      id: 'test-l-3',
      question: 'This is the third question. What is the answer?',
      answers: [
        { answerId: 'option1', value: 'option1', option: 'This is the first option' },
        { answerId: 'option2', value: 'option2', option: 'This is the second option' },
        { answerId: 'option3', value: 'option3', option: 'This is the thrid option' },
        { answerId: 'option4', value: 'option4', option: 'This is the fourth option' }
      ]
    }
  ]

  constructor() { }

  private stepper: Stepper;

  next() {
    this.stepper.next();
  }

  prev() {
    this.stepper.previous();
  }

  onSubmit() {
    return false;
  }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'),
    {
      linear: false,
      animation: true
    });
  }

}
