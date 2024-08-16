
import { Injectable } from '@angular/core';
    

export interface IProductHiper {
    name: string;
    description: string;
    image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    getProductsData() {
        return [
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
    }

    getProductsWithOrdersData() {
        return [
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
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};
