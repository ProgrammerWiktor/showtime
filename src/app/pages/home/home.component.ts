import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerResult: any = [];
  trendingMoviesResult: any = [];
  actionMoviesResult: any = [];
  adventureMoviesResult: any = [];
  animationMoviesResult: any = [];
  comedyMoviesResult: any = [];
  documentaryMoviesResult: any = [];
  scienceFictionMoviesResult: any = [];
  thrillerMoviesResult: any = [];

  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  bannerData() {
    this.service.bannerApiData().subscribe(result => {
      this.bannerResult = result.results;
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe(result => {
      this.trendingMoviesResult = result.results;
    })
  }

  actionMovie() {
    this.service.fetchActionMovies().subscribe(result => {
      this.actionMoviesResult = result.results;
    })
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe(result => {
      this.adventureMoviesResult = result.results;
    })
  }

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe(result => {
      this.animationMoviesResult = result.results;
    })
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe(result => {
      this.comedyMoviesResult = result.results;
    })
  }

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe(result => {
      this.documentaryMoviesResult = result.results;
    })
  }

  scienceFictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe(result => {
      this.scienceFictionMoviesResult = result.results;
    })
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe(result => {
      this.thrillerMoviesResult = result.results;
    })
  }
}