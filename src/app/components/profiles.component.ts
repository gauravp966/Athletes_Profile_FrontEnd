import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";

@Component({
  moduleId : module.id,
  selector: 'profiles',
  templateUrl: 'profiles.component.html',
  providers:[PostsService]
})
export class ProfilesComponent  {
  posts: Post[];
  slide:string;
  name: string;
  dob: string;
  nationality: string;
  locations: string;
  association: string;
  team: string;
  gender: string;
  sports: string;
  abouts: string;
  interests: string;
  charities: string;
  social_media: string;
  pets: string;
  drinks: string;
  married: string;
  profile_image: string;


  constructor(private postsService: PostsService){
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
    this.slide = 'slide1';
  }

  addPosts(){
    event.preventDefault();
    var newPost = {
      name: this.name,
      dob: this.dob,
      nationality: this.nationality,
      locations: this.locations,
      association: this.association,
      team: this.team,
      gender: this.gender,
      sports: this.sports,
      abouts: this.abouts,
      interests: this.interests,
      charities: this.charities,
      social_media: this.social_media,
      pets: this.pets,
      drinks: this.drinks,
      married: this.married,
      profile_image: this.profile_image

    }

    this.postsService.addPosts(newPost).subscribe(post => {
      this.posts.push(post);
      this.name = "";
      this.dob = "";
      this.nationality = "";
      this.locations = "";
      this.association = "";
      this.team = "";
      this.gender = "";
      this.sports = "";
      this.abouts = "";
      this.interests = "";
      this.charities = "";
      this.social_media = "";
      this.pets = "";
      this.drinks = "";
      this.married = "";
      this.profile_image = "";
      this.slide = 'slide1';

    })

  };

}

interface Post{
  name: string;
  dob: string;
  nationality: string;
  locations: string;
  association: string;
  team: string;
  gender: string;
  sports: string;
  abouts: string;
  interests: string;
  charities: string;
  social_media: string;
  pets: string;
  drinks: string;
  married: string;
  profile_image: string;
}
