import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css', '../../../app.component.css']
})
export class StudentsListComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  search: string = '';
  studentsSub: Subscription;
  students: Student[] = [];
  @ViewChild('table') content:ElementRef;
  order: string = '';
  reverse: boolean = false;
  sortedCollection: any[];

  constructor(
    private studentsService: StudentsService,
    private orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.students, 'info.name');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.studentsSub = this.studentsService.students
      .subscribe(
        (studentsData: Student[]) => {
          this.students = studentsData;
        }
      );
    this.studentsService.fetchStudents().subscribe(() => {
      this.isLoading = false;
    });
  }

  SavePDF() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Students List', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      //head: this.students,
      body: this.students,
      theme: 'striped',
      didDrawCell: data => {}
    })

    // Open PDF document in new tab
    // doc.output('dataurlnewwindow')

    // Download PDF document
    doc.save('table.pdf');
    // let DATA = document.getElementById('table');

    // html2canvas(DATA).then(canvas => {

    //     let fileWidth = 208;
    //     let fileHeight = canvas.height * fileWidth / canvas.width;

    //     const FILEURI = canvas.toDataURL('image/png')
    //     let PDF = new jsPDF('p', 'mm', 'a4');
    //     let position = 0;
    //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

    //     PDF.save('angular-demo.pdf');
    // });
  }

  onSort(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  onDelete(id: string) {

  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }
}
