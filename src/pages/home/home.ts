import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteProvider } from '../../providers/remote/remote';
import { SettingsPage } from '../../pages/settings/settings';
import { NewsPage } from '../../pages/news/news';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

contents: any;
quotes: string [];
newName: string;
mname: string;

  constructor(public navCtrl: NavController, private rt: RemoteProvider, private storage: Storage) {

  }

  ionViewDidLoad(){
this.rt.getContent().subscribe(data =>{
this.quotes = data.contents.quotes;
	
});

  }

  updateNews(){
  this.navCtrl.push(NewsPage);
  }
  settings(){
 this.navCtrl.push(SettingsPage);
  }


ionViewWillEnter(){
  this.storage.get("mname")
  .then((data)=>{
  if (data == null){
  this.mname = "";
  }
else{
this.mname = data;
  }
  
  })
  .catch((error) => alert("Problem acessing local storage"));
}

}

