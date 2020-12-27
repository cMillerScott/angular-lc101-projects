import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look and See!!!';
  image1 = 'https://images.all-free-download.com/images/graphicthumb/forest_light_514954.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/2/21/Old_growth_forest_scenic.jpg';
  image3 = 'https://www.publicdomainpictures.net/pictures/30000/velka/september-in-the-forest.jpg';

  constructor() { }

  ngOnInit() {
  }

}