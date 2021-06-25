import { IEmailData, MailService } from './../../services/mail.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() view: string = 'default';

  contactForm = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    assunto: new FormControl(''),
    mensagem: new FormControl('')
  });

  constructor(private mail: MailService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const data: IEmailData = {
      name: this.contactForm.controls['nome'].value,
      telephone: this.contactForm.controls['telefone'].value,
      _replyto: this.contactForm.controls['email'].value,
      _subject: this.contactForm.controls['assunto'].value,
      message: this.contactForm.controls['mensagem'].value
    }
    this.mail.sendEmail(data).subscribe((res: any) => {
      const mensagem =  res.ok ? 'Sua mensagem foi enviada!' : 'Sua mensagem não foi enviada, por favor, tente novamente.';
      const type = res.ok ? 'Success' : 'Danger';
      this.notificationService.showNotification(type, mensagem);
    })
  }

  resetForm() {
    this.contactForm.reset();
  }
}
