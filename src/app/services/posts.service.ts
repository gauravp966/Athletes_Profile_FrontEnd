import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
  constructor(private http:Http){
    console.log('PostsService Initialized...');
  }
  getPosts(){
    return this.http.get('http://127.0.0.1:5000/profiles')
      .map(res => res.json());
  }

  addPosts(newPost){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:5000/profile', JSON.stringify(newPost), {headers: headers})
      .map(res => res.json());
  }
}
