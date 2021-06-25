import { IEmailData, MailService } from './../../services/mail.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private mail: MailService) { }

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
    this.mail.sendEmail(data).subscribe((res: any) => console.log(res))
  }

  resetForm() {
    this.contactForm.reset();
  }
}
