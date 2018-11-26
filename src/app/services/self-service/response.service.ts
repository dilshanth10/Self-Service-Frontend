import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/models/self-service/response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }
  private responseAPI = "http://localhost:8080/hrm_system/response";


  public getAllResponse() {
    return this.http.get<Response[]>(this.responseAPI);
  }
 
  public createResponse(response: Response) {
    return this.http.post<Response>(this.responseAPI, response);
  }
}
