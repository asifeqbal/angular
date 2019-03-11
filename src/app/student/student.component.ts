import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor( private router: Router, private dataService : DataService ) { }

  student:any = {};

 students = [{id:"1",name:"azeem",email:"azeem@azeem.com",phone:"98",address:"xyz"},
  {id:"2",name:"sam",email:"sam@sam.com",phone:"98",address:"xyz"}];

  resetStudent()
   {
     this.student= [{

       id:0,
       name:'',
       email:'',
       phone:'',
       address:''
     }];
   }

   deleteAllStudent () 
   {
     this.dataService.deleteAllStudent();  
   }

   addUpdateStudent (id)

   {
     var updated= false;
     console.log(this.student.id);
     if(typeof(this.student.id) =='undefined' || this.student.id==0)
     {
     	this.student.id= Math.round(Math.random()*1000000);
     }

     for (var i=0;i<this.students.length;i++) 
     {
       if(id==this.students[i].id)
       {
          this.students[i]=this.student;
          updated= true;
          break;  
       }
     }  

     if (!updated)
     {
       this.students.push(this.student);
     }

     this.resetStudent();
   }

   selectStudent (student) 
   {
     
     this.student = this.dataService.selectStudent(student);
   }

  addStudent () 
  {
    
    this.students.push(this.student);
    this.resetStudent();
  }
  
  deleteStudent (id)
  {
   this.students = this.dataService.deleteStudent(id);
  }

  ngOnInit() {
  }

}
