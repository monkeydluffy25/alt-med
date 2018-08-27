import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchMedProvider{

  constructor(public http: Http) {
    console.log('Hello SearchMedsProvider');
  }

  postsearchmeds(params)
  {
    console.log("provider-"+params);
    return this.http.post('http://localhost:8095/meds/search',
    {
      search: params
    })
    .map(res => res.json());
    // console.log(res);
    // console.log(res.json());
  }
  // postsearchmedsfull(params)
  // {
  //   console.log("provider-"+params);
  //   return this.http.post('http://localhost:8095/meds/searchfull',
  //   {
  //     search: params
  //   })
  //   .map(res => res.json());
  //   // console.log(res);
  //   // console.log(res.json());
  // }
}
