import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  formData = {
    fisrtname : "",
    lastname  : "",
    gender : "",
    age : "",
    email : "",
  }
  constructor() { }

  ngOnInit() {
  }

  create(){
    console.log(this.formData);
    
    axios.post("http://localhost/ionic-php-sql/student.php" , this.formData)
    .then(
      (reponse) =>{
        console.log(reponse);
      })
      .catch((error)=>{
        console.log(error);
      })
  }
}
