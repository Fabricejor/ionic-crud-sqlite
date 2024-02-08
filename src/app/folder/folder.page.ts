import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  student: any=[];
  constructor(private navCtrl: NavController) {this.getstudents();}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  getstudents(){
    axios.get("http://localhost/ionic-php-sql/student.php")
    .then(
      (reponse) =>{
        console.log(reponse.data);
        this.student = reponse.data;
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  navigateToEdit(id:number){
    console.log(id);
    this.navCtrl.navigateForward(`edit/${id}`);
  }
}
