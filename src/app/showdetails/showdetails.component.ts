import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../model/movie';
import { MyServiceService } from '../services/my-service.service';
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {
  myNewData:any=[]
  constructor(private service:MyServiceService) {
    }
    dummydata=[
      {
        name:"Sam",
        Age:"20",
        image:"https://yt3.ggpht.com/a/AATXAJzfKwJjAIcI8kXxQ_7rXWdakcwYZ-e4WK8shKXe9A=s900-c-k-c0xffffffff-no-rj-mo"
      },
      {
        name:"Sahlini",
        Age:"20",
        image:"https://images.hivisasa.com/1200/It9Rrm02rE20.jpg"
      },
      {
        name:"Rohini",
        Age:"20",
        image:"https://th.bing.com/th/id/OIP.Xm1EXmPOVQQajFrYh3F_WAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      }

    ]

    
movie:Movie={
  movieName: "",
    movieType:"",
    movieRating:0
}

  ngOnInit(): void {
    //this.getAllData();
  }
  //   public getAllData(){
  //     this.service.getAllData().subscribe((rsp)=>{this.myNewData=rsp, console.log(Response)},(error:HttpErrorResponse)=>{console.log(error)});
     
   
  // }
  // public addMoviefunc(addMovie:NgForm)
  // {   
  //   this.movie.movieName = addMovie.value.movieName
  //   console.log(this.movie)
    
    
    

  // }

}
