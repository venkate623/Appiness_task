import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor( private http : HttpClient ){}
  url;
  datas;
  allRepo;
  showRepos = false;
  count;
  userName;

  ngOnInit(){
    this.url = "https://api.github.com/users";
   this.http.get(this.url).subscribe(data => {
     this.datas = data;
       console.log(data);
     }
   );
  }

 showRepo(loginId){
   this.showRepos = true;
   let url = "https://api.github.com/users/"+loginId+"/repos";
   this.http.get(url).subscribe(data => {
     this.allRepo = data;
     console.log("all repos", this.allRepo);
   });
 }
  search(value){
    console.log('value', value)
    if(!!value) {
      this.datas = this.datas.filter(item => item.login === value);
      console.log('obj', this.datas);
      this.showRepos = false;
    }
  }
}
