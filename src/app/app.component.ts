import { Component } from '@angular/core';
import { NotificationService, INotificationParams } from './shared/services/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'santo-job';
  showNotification$ = new Observable<boolean>();
  notificationParams$ = new Observable<INotificationParams>();
  constructor(private notificationService: NotificationService) {
    this.showNotification$ = this.notificationService.showNotification$;
    this.notificationParams$ = this.notificationService.notificationParams$;
  }
}
