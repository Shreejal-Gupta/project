import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IProductHiper, ProductService } from '../../product.service';
import {
  DiagramComponent,
  Diagram,
  ConnectorModel,
  Connector,
  Node,
  HierarchicalTree,
  DataBinding,
  PointPortModel,
  SnapSettingsModel,
  ScrollSettingsModel,
  PortVisibility,
  MindMap,
  SnapConstraints,
  NodeModel,
  DiagramTools,
  ConnectorConstraints,
  PointPort,
  ShapeStyleModel,
} from '@syncfusion/ej2-angular-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
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


    const firstDiv = this.el.nativeElement.querySelector('#left-first-div').getBoundingClientRect();
    const secondDiv = this.el.nativeElement.querySelector('#left-second-div').getBoundingClientRect();
    const svgContainer = this.el.nativeElement.querySelector('#svg-container');

    // Calculate the start and end points
    const startX = `${firstDiv.x  + firstDiv.width / 2}`;  // Right side of the first div
    const startY = `${firstDiv.top + firstDiv.height / 2}`;  // Center vertically of the first div
    
    // const endX = `${secondDiv.x  + secondDiv.width / 2}`; // Left side of the second div
    // const endY = `${secondDiv.top - secondDiv.height / 2}`; // Vertical center of the second div

    // Create the line element
    // const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // line.setAttribute("x1", startX);
    // line.setAttribute("y1", startY);
    // line.setAttribute("x2", endX);
    // line.setAttribute("y2", endY);
    // line.setAttribute("stroke", "red");
    // line.setAttribute("stroke-width", "2");
    // line.setAttribute("stroke-dasharray", "5");
    // console.log({startX})
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", startX);  // X-coordinate of the center
    circle.setAttribute("cy", startY);  // Y-coordinate of the center
    circle.setAttribute("r", "10");  // Radius of the circle
    circle.setAttribute("fill", "red");  // Fill color of the circle
    svgContainer.appendChild(circle);

    // const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // circle2.setAttribute("cx", endX);  // X-coordinate of the center
    // circle2.setAttribute("cy", endY);  // Y-coordinate of the center
    // circle2.setAttribute("r", "10");  // Radius of the circle2
    // circle2.setAttribute("fill", "blue");  // Fill color of the circle2

    // // Append the line to the SVG container
    // svgContainer.appendChild(circle2);

    

  }
  















}

export interface TreeInfo {
  branch: string;
  color: string;
  Left: string;
  Right: string;
  Root: string;
  Label: string;
  Level: string;
}