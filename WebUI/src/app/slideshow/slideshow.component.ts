import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slideIndex: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.jquery_code();

    this.showSlides(this.slideIndex);
  }
  jquery_code() {
  }



  // Next/previous controls
  plusSlides(n) {
    console.log("a");

    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides: any = document.getElementsByClassName("mySlides");
    var dots: any = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";    
  }

  auto(){
      var i;
      var slides: any = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {this.slideIndex = 1}
      slides[this.slideIndex-1].style.display = "block";
      setTimeout(this.auto, 2000); // Change image every 2 seconds
  }

}
