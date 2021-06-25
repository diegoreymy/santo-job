import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IEmailData {
  name: string;
  telephone: string;
  _replyto: string;
  _subject: string;
  message: string
}

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class MailService {

  private urlEmailApi = "https://formspree.io/f/mdoyznqk";

  constructor(private http: HttpClient) { }

  public sendEmail(data: IEmailData): Observable<any> {
    return this.http.post(this.urlEmailApi, data);
  }

}
