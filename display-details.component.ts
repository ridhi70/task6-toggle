import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})

export class DisplayDetailsComponent  {
public display_details:boolean = false;
public buttonName:any = 'Show Details';
public count:number=0;
public changeColor:boolean = false;


 toggle() {

   	   this.display_details = !this.display_details;

       if(this.count==5)
       {
         this.changeColor= true;
         this.count=this.count+1;
         
       }
       else
       {
         this.count=this.count+1;
         
       }
     
     /*This is optional*/
       if(this.display_details)  
        this.buttonName = "Hide Details";
      else
        this.buttonName = "Show Details";
     
}
 
 
}
