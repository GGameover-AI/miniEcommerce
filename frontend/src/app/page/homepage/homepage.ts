import { Component, Pipe,OnInit } from '@angular/core';
import { NgFor, NgClass, CurrencyPipe } from '@angular/common';
import { Stock } from '../../services/stock';
import { ProductsModel } from '../../models/products-model';

@Component({
  selector: 'app-homepage',
  imports: [NgFor, NgClass, CurrencyPipe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {

  productList:ProductsModel[]=[]

  //นำเข้า products
  constructor(private stockService:Stock){}
  ngOnInit(): void {
      this.productList = this.stockService.getProduct()
  }

  setFillterProduct(category:string){
    this.productList = this.stockService.fillterProduct(category)
  }

  productPerPage = 10
  currentPage = 1
  

  get pagitionProduct() {
    const pagitionStart = (this.currentPage - 1) * this.productPerPage
    const pagitionEnd = pagitionStart + this.productPerPage
    return this.productList.slice(pagitionStart, pagitionEnd);
  }

  onNextPage(page: number) {
    this.currentPage = page
    console.log("Current Page : " + this.currentPage)
  }

  get totalPages() {
    return Math.ceil(this.productList.length / this.productPerPage)
  }

}
