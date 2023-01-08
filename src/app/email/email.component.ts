import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    message:""
  }



  constructor(private email:EmailService, private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("try to submit form");
    console.log("DATA",this.data);


    if(this.data.to=='' || this.data.subject=='' || this.data.message=='')
    {


      this.snak.open("fields can not be empty","ok");
      return;
    }
    this.email.sendEmail(this.data).subscribe(
      (response:any)=>{
        console.log(response);

      },
      (error:any) =>{
        console.log(error);
      }
      
    )
  }

}
