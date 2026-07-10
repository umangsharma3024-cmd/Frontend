import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AdminauthService } from '../adminauth/adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class HirerService {
  baseurl : any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private adminauth : AdminauthService) {
    this.baseurl = _baseurl
  }

  add(form:any){
    var header_object = new HttpHeaders().set("Authorization",this.adminauth.getadmintoken() || '');
    return this.http.post(this.baseurl+"user/add",form,{headers:header_object})
  }

  getall(form:any){
    var header_object = new HttpHeaders().set("Authorization",this.adminauth.getadmintoken() || '');
    return this.http.post(this.baseurl+"user/hirer/all",form,{headers:header_object})
  }

  getsingle(form:any){
    var header_object = new HttpHeaders().set("Authorization",this.adminauth.getadmintoken() || '');
    return this.http.post(this.baseurl+"user/single",form,{headers:header_object})
  }

  update(form:any){
    var header_object = new HttpHeaders().set("Authorization",this.adminauth.getadmintoken() || '');
    return this.http.post(this.baseurl+"user/update",form,{headers:header_object})
  }

}
