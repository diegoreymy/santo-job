import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface INotificationParams {
  type: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private show = new BehaviorSubject<boolean>(false);
  private params = new BehaviorSubject<INotificationParams>({ type: '', message: '' });
  showNotification$ = this.show.asObservable();
  notificationParams$ = this.params.asObservable();

  constructor() { }

  showNotification(type: string, message: string) {
    this.params.next({ type, message });
    if (type && message) {
      this.show.next(true);
      setTimeout(() => {
        this.show.next(false);
      }, 4000);
    }
  }
}
