import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchMedFullProvider{

  constructor(public http: Http) {
    console.log('Hello SearchMedsFUllProvider');
  }
  postsearchmedsfull(params)
  {
    console.log("provider-"+params);
    return this.http.post('https://pacific-bastion-89841.herokuapp.com/meds/searchfull',
    {
      search: params
    })
    .map(res => res.json());
    // console.log(res);
    // console.log(res.json());
  }
}
