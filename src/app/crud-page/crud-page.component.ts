import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { employee } from '../employee';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements OnInit {
  employee:any=[];
  employeeList:employee={
    id:0,
    Name:"",
    salary:0

  }
  id:number=0;
  data:any;
    

  
  constructor(public crudHttpService:MyServiceService) { }

  ngOnInit(): void {
    this.listEmployee()
   
  }

  listEmployee(){
    this.crudHttpService.getList().subscribe((resp)=>{
      console.log(resp)
        this.employee = resp
        console.log(this.employee)
    })
  }

  createEmployee(){
    console.log(this.employeeList)
    this.crudHttpService.addData(this.employeeList).subscribe((resp)=>{
      console.log(resp)
      this.listEmployee()
     
     })
  }

  deleteEmployee(id:number){
    this.crudHttpService.delete(id).subscribe((resp)=>{
      console.log(resp)
      this.listEmployee()
    })
  }

  updateEmployee(){
    this.crudHttpService.update(this.id,this.employeeList).subscribe((resp)=>{
      console.log(resp)
      this.listEmployee()
    })
  }

  getid(data:any){

    this.id = data.id
    this.data = data
    
  }

}
