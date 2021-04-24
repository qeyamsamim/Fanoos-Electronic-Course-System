import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-training-policy',
  templateUrl: './training-policy.component.html',
  styleUrls: ['./training-policy.component.css']
})
export class TrainingPolicyComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Input() message: string;

  title: string = 'Fanoos Training Center Training Policy';
  criterias: string[] = [
    'Mission Statement',
    'Objectives',
    'Outline of the training subject',
    'To support every departments every individual, business and corporation goals',
    'To improve our students satisfactions by providing them high quality training services, it mean class environment, training materials'
  ];
  missionStatement: string = "Mission Statements";
  missionMessage: string = "We support individuals and teams in developing the skills and behaviors they need to achieve high "+
  "performance for growth now and in the future.";
  missionStatementObj: string[] = [
    "To provide update training materials",
    "To achieve competitive advantage of Fanoos Training Center what do we mean by competitive advantages? It mean the unique position "+
    "of our Training Center what we offer and our competitors cant ,we should play role off boss we should compete our competitors ,"+
    "because we are  living in such environment that there is a lot of training center ,we should keep our quality.",
    "To develop and implement management training programs for all."
  ];
  outline: string[] = [
    "Step 1: Define your training/learning objectives. What exactly do you need people to know or be able to do by the end of the training",
    "Step 2: Purpose and Opening. Why is it important for people to take this training? What will you do to capture their attention and "+
    "get them engaged right from the start",
    "Step 3: Clarify key topics, related concepts, and timing.",
    "Step 4: Presentation techniques and materials. How will you present the content and what materials do you need.",
    "Step 5: Evaluation, assessment, reflection. How will you determine if participants have learned what they need to know? How will "+
    "you find out if participants thought the training was effective and enjoyable? How will you learn lessons from this training that "+
    "can be applied to future trainings."
  ];
  support: string = "In this term we should focus on to provide facility and material to support the expectation of our students "+
    "what they want and what we offer ?We must meet the expectation of our students  ,fee that they are giving us must support their "+
    "expectation, our job is  to keep our standard by providing  quality services to our students.";
  improve: string = "As I mentioned above we should more focus on to provide update training material and also create such environment "+
    "to every one share their source of information what actually our students want from us, what is their expectation in order to "+
    "meet our students needs and wants this process will help us to find our weakness in which process we have weakness. Students are "+
    "most valuable asset of our training center they are also called the main chain of our training center without them our training "+
    "center mean nothing they are our customers we must care, by this way we can improve ability of our students. "+
    "While we creating policy we should take care of ";
  improveContent: string[] = [
    "All policy items should relate to Fanoos Training Center  goals and objectives , Profit ,Quality Services",
    "Should meet Fanoos Training Center mission statement and objectives.",
    "Most important and clearly written through which we can easily communicate."
  ];
  corePoints: string[] = [
    "Evaluation of training programs",
    "Selection of employees",
    "Availability of training",
    "Location of training session",
    "Program to be establish",
    "Length of training day",
    "Training design standards",
    "Tuition paid plan",
    "Outside services and programs"
  ];
  evaluation: string = "To measure learning, start by identifying what we want to evaluate. These things could be changes in knowledge, "+
    "skills, or attitudes. It's often helpful to measure these areas both before and after training. So, before training, test our "+
    "trainees to determine their knowledge, skill levels, and attitudes. And also to evaluate our training subjects Fanoos Training "+
    "Center more focus on core subjects it mean Accounting solution and also different subjects, but here we give more priority to "+
    "accounting because we have unique position in this field of accounting that is why we are more interested to improve our unique "+
    "position and achieve our target. We have a lot of competitors around they also offer accounting but they are not unique because "+
    "our competitors are not specialized as much we are.";
  employeeSelection: string = "In order to meet the desire of Fanoos Training Center we must select employees on the basis of their "+
    "knowledge to meet the desire of our center .How to find qualified teachers? We should submit our application to Acber or Job.af "+
    "and mention the position and requirements of job this will be easy way to find.";
  availability: string = "Fanoos training center providing academic environment special and well-designed classes, for their students, "+
    "well and qualified teachers and availability to standard training materials.";
  location: string = "Training location is verity, for the individuals, by default our training will be launched in our own training "+
    "center, but for officials and corporates we can set the location where they are satisfied. Write anything you can.";

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

}
