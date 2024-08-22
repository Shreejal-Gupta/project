import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IProductHiper, ProductService } from '../../product.service';
import LeaderLine from 'leader-line-new';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, AfterViewInit
{
  leftDecisionList = [
    {
      title: 'Job Seeker',
      image: 'assets/jobseeker.png',
      id: 'left-first-div'
    },
    {
      title: 'Candidate',
      image: 'assets/candidate.png',
      id: 'left-second-div'
    },
    {
      title: 'Matching JD',
      image: 'assets/matching-jd.png',
      id: 'left-third-div'
    },
    {
      title: 'Interviews',
      image: 'assets/interviews.png',
      id: 'left-fourth-div'
    },
  ]
  rightDecisionList = [
    {
      title: 'Company',
      image: 'assets/company.png',
      id: 'right-first-div'
    },
    {
      title: 'HR',
      image: 'assets/hr.png',
      id: 'right-second-div'
    },
    {
      // title: 'Hiring Manager',
      // image: 'assets/matching-jd.png',
      // id: 'right-third-div',
      child: [
        {
        title: 'Hiring Manager',
        image: 'assets/hiring-manager.png',
        id: 'right-third-one-div'
      },
      {
        title: 'External Onsite Interview Marketplace',
        showArrow: true,
        id: 'right-third-two-div',
        notSmallLogo: true
      },
      {
        title: 'External In-Person Onsite Marketplace by Technical Freelancers',
        showArrow: true,
        id: 'right-third-three-div',
        notSmallLogo: true
      }
    ],
    },
    {
      title: 'Hiring team',
      image: 'assets/hiring-team.png',
      id: 'right-fourth-div'
    },
  ]
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
  constructor(private productService: ProductService) {}

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



  

  ngAfterViewInit(): void {
    const S1 = document.querySelector('#left-first-div')  as HTMLElement;;
    const S2 = document.querySelector('#left-second-div')  as HTMLElement;
    const S3 = document.querySelector('#left-third-div') as HTMLElement;
    const S4 = document.querySelector('#left-fourth-div') as HTMLElement;
    const S5 = document.querySelector('#left-fifth-div') as HTMLElement;
    const line = new LeaderLine(S1, S2,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind'});
    new LeaderLine(S2, S3,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind'});
    new LeaderLine(S3, S4,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind'});
    new LeaderLine(S4, S5,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind'});
///////////////////////////////////////////////////
    const R1 = document.querySelector('#right-first-div')  as HTMLElement;;
    const R2 = document.querySelector('#right-second-div')  as HTMLElement;
    const R31 = document.querySelector('#right-third-one-div') as HTMLElement;
    const R32 = document.querySelector('#right-third-two-div') as HTMLElement;
    const R33 = document.querySelector('#right-third-three-div') as HTMLElement;
    const R4 = document.querySelector('#right-fourth-div') as HTMLElement;
    const R5 = document.querySelector('#right-fifth-div') as HTMLElement;
    /////////////////
    new LeaderLine(R1, R2,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind'});
    new LeaderLine(R2, R31,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind',startSocket: 'bottom', // Adjust socket position for R2
      endSocket: 'top',startSocketGravity: [0, -0.3], endSocketGravity: [0, 0.3] });
    new LeaderLine(R2, R32,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind',startSocket: 'bottom', 
      endSocket: 'top',startSocketGravity: [0, -0.3], endSocketGravity: [0, 0.3] });
    new LeaderLine(R2, R33,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind',startSocket: 'bottom', 
      endSocket: 'top',startSocketGravity: [0, -0.3], endSocketGravity: [0, 0.3]  });

    new LeaderLine(R31,R4,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind',startSocket: 'bottom', 
      endSocket: 'top',startSocketGravity: [0, -0.3], endSocketGravity: [0, 0.3]  });   
    new LeaderLine(R33,R4,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind',startSocket: 'bottom', 
      endSocket: 'top',startSocketGravity: [0, -0.3], endSocketGravity: [0, 0.3]  });  
    new LeaderLine(R32,R4,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind',startSocket: 'bottom', 
      endSocket: 'top',startSocketGravity: [0, -0.3], endSocketGravity: [0, 0.3]  }); 
    new LeaderLine(R4, R5,{dash: true,color: '#BBBBBB',endPlugSize: 1.5,endPlug: 'behind',startPlug: 'behind'});    
  }

}
