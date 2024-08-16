import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { IProductHiper, ProductService } from '../../product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, AfterViewInit
{
  productOfHiperBrain: IProductHiper[]  =  [
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news1.png'
    },
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news1.png'
    },
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news1.png'
    },
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news1.png'
    },
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news1.png'
    },
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news2.png'
    },
    {
      name: 'ID Verification',
      description: 'ID verification ensures the authenticity of candidates, mitigates potential risks',
      image: 'assets/news1.png'
    }
  ];
  responsiveOptions: any[] | undefined;
  constructor(private productService: ProductService,private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.productOfHiperBrain = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
      }
      return '';
  }

  ngAfterViewInit(): void {
    // const element = this.el.nativeElement.querySelector('#left-first-div');
    // const pointElement = element.querySelector('.point')

    // let rect = element.getBoundingClientRect();
    // console.log(rect, "hello");
    // const pointX = rect.x + rect.width/2;
    // const pointY = rect.y + rect.height/2;

    // console.log(pointX, rect.x, rect.width/2, 'test')

    // pointElement.style.left = 0 + 'px';
    // pointElement.style.top = pointY;

    // console.log(pointElement, "point element")
    // console.log(element, "point element")

    // debugger;
    // element.appendChild(circle);
    // if (element) {
    //   // Apply dynamic styles
    //   this.renderer.setStyle(element, 'background-color', 'lightblue');
    //   this.renderer.setStyle(element, 'padding', '10px');
    //   // Add more styles as needed
    // }
  }
}