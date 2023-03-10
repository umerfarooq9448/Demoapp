import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {

  constructor() { }
  city:string = "bangalore";
  newemail:string="";
  isDisabled:boolean=true;
  isHidden:boolean=true;
  isChecked:boolean=true;
  nameofperson:string="";
  show:string="Red";
  condition:boolean=false;

  //relevent to ngIf
  empData=["Umer","Shraddha","Vishal"]
  empSalary=["10000","15000","20000"]
  value:boolean=true;

//relevent to ngFor

data=["shraddha","Vishal","Umer"]

newdata=[
  {
    Name:"shradha",
    Salary:"40000"
  },
  {
    Name:"Vishal",
    Salary:"45000"
  }

]

  //relevent to pipes
  name="Umer FarOoQ";
  todayDate = new Date;
  month = ['Jan','Feb','March','April','May','June']
  str = 'umerfarooq'
  price:number=20;
  
  checked(){
    this.value=true;
  }
  option1 = false;
  option2 = false;
  selectedOption: string="";



  submit() {

    console.log(this.selectedOption);

  }
 
  
  login(loginForm:any) {
    console.log(loginForm.email);
    this.newemail = loginForm.email
  }


  myNewData:any=[]

  
  displaycity(){
    return "Delhi";
  }
 


  ngOnInit(): void {
    //this.getAllData()
  }



}
