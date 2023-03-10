import { ShopParams } from './../models/shopParams';
import { Type } from './../models/type';
import { Brand } from './../models/brand';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ShopServService {

  baseApi = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProduct(shopParams: ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId > 0) params = params.append('brandId', shopParams.brandId);
    if(shopParams.typeId) params = params.append('typeId', shopParams.typeId);
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber);
    params = params.append('pageSize', shopParams.pageSize);
    if(shopParams.search) params = params.append('search', shopParams.search);
    return this.http.get<Pagination<Product[]>>(this.baseApi + 'products', {params});
  }

  getProductDetails(id: number){
    return this.http.get<Product>(this.baseApi + 'products/' + id);
  }

  getBrands(){
    return this.http.get<Brand[]>(this.baseApi + 'products/brands');
  }

  getTypes(){
    return this.http.get<Type[]>(this.baseApi + 'products/types');
  }
}
