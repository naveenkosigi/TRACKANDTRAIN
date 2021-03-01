import { Component, OnInit } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';
import SwiperCore,{Navigation,Pagination,Scrollbar,A11y} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView:1,
      autoHeight:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      }
    });
  }

}
