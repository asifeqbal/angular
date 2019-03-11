import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private router: Router, private dataService : DataService) { }

  student:any = {};

  students = [{id:"1",name:"azeem",email:"azeem@azeem.com",phone:"98",address:"xyz"},
  {id:"2",name:"sam",email:"sam@sam.com",phone:"98",address:"xyz"}];


  deleteAllStudent () 
   {
     this.students=[];
   }

   deleteStudent (id) 
   {
     var list=[];

    for (var i=0;i<this.students.length;i++)
    {
      if(id!=this.students[i].id)
      {
        list.push(this.students[i]);
      }
    }
     this.students = list;

     return list;
   }

    selectStudent (student) 
   {
     
     this.student=student;

    
   }
}
