import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  students=[
            {"Name":"Kambhampati Mahesh Manikanta","Registration":"201900179","Department":"CSE","Semester":5},
            {"Name":"Raja","Registration":"202000110","Department":"ECE","Semester":3},
            {"Name":"Ishwarya","Registration":"201800199","Department":"ME","Semester":7},
            {"Name":"Vyshnavi","Registration":"201900300","Department":"CSE","Semester":5},
            {"Name":"Maheshwari","Registration":"202000001","Department":"CE","Semester":1}
          ]
  getdetails()
  {
    return this.students
  }
  constructor() { }
}
