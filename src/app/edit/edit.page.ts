import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  studentId : number = 0;
  formData = {
    fisrtname : "",
    lastname  : "",
    gender : "",
    age : "",
    email : "",
  }
  constructor(private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.studentId = +params['id'];
      console.log(this.studentId);
      this.getstudentdata();
    });
  }
  
  getstudentdata(){
    axios.get(`http://localhost/ionic-php-sql/student.php?studentId=${this.studentId}`)
    .then(
      (reponse) =>{
        console.log(reponse.data);
        this.formData = {
          fisrtname : reponse.data[0].fisrt_name,
          lastname  : reponse.data[0].last_name,
          gender : reponse.data[0].gender,
          age : reponse.data[0].age,
          email : reponse.data[0].mail,
        }
        // this.student = reponse.data;
      })
      .catch((error)=>{
        console.log(error);
      })
  }
}
