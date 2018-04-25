import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";

@Component({
  moduleId : module.id,
  selector: 'allProfiles',
  templateUrl: 'allProfiles.component.html',
  providers:[PostsService]
})
export class AllProfilesComponent  {
  posts: Post[];

  constructor(private postsService: PostsService){
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
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
