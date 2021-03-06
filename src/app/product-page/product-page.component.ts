import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectFade, Swiper ,Navigation,Pagination} from 'swiper/core';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Navigation,Pagination]);
  }

}
