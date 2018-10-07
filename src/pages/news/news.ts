import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

articles:string[];
src:string;
source:string;
font:any;
dsize:string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public addNews: NewsProvider, public storage:Storage) {
  }

  ionViewDidLoad() {
    this.storage.get("source")
  .then((data)=>{
  this.src=data;
});
 
}


ionViewWillEnter(){
	switch(this.src) {
	case"r":
	this.addNews.getRemoteData().subscribe(data => {
	this.articles=data.articles;
	
	});
	break;
	case"b":
	this.addNews.getBBC().subscribe(data => {
	this.articles=data.articles;
		});
	break;
	case"n":
	this.addNews.getNG().subscribe(data => {
	this.articles=data.articles;
		});
		break;
}
}


  setDesFont(){
  let font ={
  'font-size': '20px'
  };
  return font;
  }
  setDesFont1(){
  let font ={
  'font-size': '25px'
  };
  return font;
  }
  setDesFont2(){
  let font={
  'font-size': '30px'
  };
  return font;
  }
  setDesFont3(){
  let font={
  'font-size': '35px'
  };
  return font;
  }
  setDesFont4(){
  let font={
  'font-size': '40px'
  };
  return font;
  }
  setDesFont5(){
  let font={
  'font-size': '45px'
  };
  return font;
  }



  setTitleFont(){
  let font ={
  'font-size': '20px'
  };
  return font;
  }
  setTitleFont1(){
  let font ={
  'font-size': '25px'
  };
  return font;
  }
  setTitleFont2(){
  let font={
  'font-size': '30px'
  };
  return font;
  }
  setTitleFont3(){
  let font={
  'font-size': '35px'
  };
  return font;
  }
  setTitleFont4(){
  let font={
  'font-size': '40px'
  };
  return font;
  }
  setTitleFont5(){
  let font={
  'font-size': '45px'
  };
  return font;

  }
  ionVieDidLoad(){
  this.storage.get("font")
  .then((data)=>{
  this.font=data;
  if (this.font== "1"){
  this.setTitleFont();
  }
  else if (this.font == "2"){
  this.setTitleFont = this.setTitleFont1;
  }
  else if (this.font == "3" ){
this.setTitleFont = this.setTitleFont2;
}
else if (this.font == "4"){
	this.setTitleFont = this.setTitleFont3;
}
else if (this.font == "5"){
	this.setTitleFont= this.setTitleFont4;

}
  })
  .catch((err) => {
  alert( "error accesing storage");

  });
  this.storage.get("dsize")
  .then((data)=>{
  this.dsize=data;
 if (this.dsize== "1"){
  this.setDesFont();
  }
  else if (this.dsize == "2"){
  this.setDesFont = this.setDesFont1;
  }
  else if (this.dsize == "3" ){
this.setDesFont = this.setDesFont2;
}
else if (this.dsize == "4"){
	this.setDesFont = this.setDesFont3;
}
else if (this.font == "5"){
	this.setDesFont= this.setDesFont4;
}
  })
  .catch((err) => {
  alert( "error accesing storage");

  });
}

}
  






