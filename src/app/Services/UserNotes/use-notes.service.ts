import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UseNotesService {

  constructor(private http:HttpClient) { }
  link = 'https://localhost:44358/api/Note/'
  GetNotes(url, token){ 

    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.link+url, { headers: headers_object });
  
  }
  AddNotes(url,noteModel,token){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.link+url,noteModel,{ headers: headers_object });
  }
  patchUpdateNotes(url,noteUpdateModel,token){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.patch(this.link+url,noteUpdateModel,{headers:headers_object});
  }
  



}
