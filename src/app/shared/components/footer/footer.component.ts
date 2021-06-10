import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactForm = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    assunto: new FormControl(''),
    mensagem: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  resetForm() {
    this.contactForm.reset();
  }

}
