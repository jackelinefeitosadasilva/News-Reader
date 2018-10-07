import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from'@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
newName:string;
mname:String;
source:string;
dsize:string;
font:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

savethisSettings(){
	
	if((this.newName) == null){
	}
	else{
	this.mname = this.newName;
	this.newName = "";
	this.storage.set("mname", this.mname);
	}
  switch(this.source) {
case"r":
this.storage.set("source", this.source);
case"b":
this.storage.set("source", this.source);
case"n":
this.storage.set("source", this.source);
default:
}
switch(this.dsize) {
case"1":
this.storage.set("dsize", this.dsize);
case"2":
this.storage.set("dsize", this.dsize);
case"3":
this.storage.set("dsize", this.dsize);
case"4":
this.storage.set("dsize", this.dsize);
case"5":
this.storage.set("dsize", this.dsize);
default:
}
switch(this.font) {
case"1":
this.storage.set("font", this.font);
case"2":
this.storage.set("font", this.font);
case"3":
this.storage.set("font", this.font);
case"4":
this.storage.set("font", this.font);
case"5":
this.storage.set("font", this.font);
default:
this.navCtrl.pop();


  }
}
ionViewWillEnter(){
  this.storage.get("source")
  .then((data)=>{
  if (data == null){
  }
else{
this.source = data;
  }
  
  });
  this.storage.get("font")
  .then((data)=>{
  if (data == null){
  }
else{
this.font = data;
}
});
  this.storage.get("dsize")
  .then((data)=>{
  if (data == null){
  }
else{
this.dsize = data;
}
})

  .catch((error) => alert("Problem acessing local storage"));
  }

}

  
  











