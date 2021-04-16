import { ButtonTheme } from './../types/types';
import { Component, OnInit, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AsYouType } from 'libphonenumber-js';
import { HttpClient } from '@angular/common/http';

function removeSpaces(control: AbstractControl) {
  if (control && control.value && !control.value.replace(/\s/g, '').length) {
    control.setValue('');
  }
  return null;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  signUpForm: FormGroup;
  signUpFormFields: any;
  termsOfUseText = `Да, я согласен на обработку моих персональных данных SoftTeco.
  Я могу отозвать свое согласие в любое время, связавшись с SoftTeco по электронной почте,
  и заявить, что я не заинтересован в каких-либо дальнейших советах. `;
  termsOfUse = false;
  note = {
    show: false,
    status: '',
    text: ''
  };

  buttonTitle = 'отправить';
  buttonTheme = ButtonTheme.Blue;

  fields = {
    name: { type: 'text', required: true, placeholder: 'Имя'},
    surName: { type: 'text', required: true, placeholder: 'Фамилия'},
    email: { type: 'text', required: true, placeholder: 'E-Mail'},
    phone: { type: 'number', required: false, placeholder: 'Телефон (не обязательно)'},
    whatCanDo: { type: 'textarea', required: true, placeholder: 'Что мы можем сделать для Вас?', long: true}
  };

  validationMessages = {
    name: [{type: 'required', message: 'Обязательное поле'}],
    surName: [{type: 'required', message: 'Обязательное поле'}],
    email: [
      { type: 'required', message: 'Обязательное поле' },
      { type: 'pattern', message: 'Некорректный email.' }
    ],
    whatCanDo: [{type: 'required', message: 'Обязательное поле'}]
  };

  phoneNumber = '';

  constructor(public fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.signUpForm = this.createFormGroup();
    this.signUpFormFields = Object.keys(this.signUpForm.controls);
  }

  // for Edge
  @HostListener('window:beforeunload') clearFormFields(){
    this.resetSignUpForm();
  }

  createFormGroup() {
    return this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required, removeSpaces])),
      surName: new FormControl('', Validators.compose([Validators.required, removeSpaces])),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,6}$')]),
      phone: new FormControl(''),
      whatCanDo: new FormControl('', Validators.compose([Validators.required, removeSpaces]))
    });
  }

  onSubmit(form: FormGroup) {
    if (this.termsOfUse && form.valid) {
      this.note = {
        show: false,
        status: '',
        text: ''
      };
      const keys = Object.keys(form.value);
      keys.forEach((key) => form.value[key] = form.value[key].trim());
      this.http.request('POST', '/mail/', {
        body: form.value,
        headers: {
          responseType: 'application/json'
        }
      }).subscribe((res: any) => {
        if (res.success) {
          this.note = {
            show: true,
            status: 'success',
            text: 'Ваше сообщение отправлено.'
          };
          this.resetSignUpForm();
        } else {
          this.note = {
            show: true,
            status: 'error',
            text: 'Ваше сообщение не отправлено. Пожалуйста, попробуйте ещё раз.'
          };
        }
      }, (_err) => {
        this.note = {
          show: true,
          status: 'error',
          text: 'Ваше сообщение не отправлено. Пожалуйста, попробуйте ещё раз.'
        };
      });
    }
  }

  private resetSignUpForm() {
    this.signUpForm = this.createFormGroup();
    this.signUpFormFields = Object.keys(this.signUpForm.controls);
  }

  get isButtonDisabled() {
    return !this.termsOfUse || !this.signUpForm.valid;
  }

  focusEvent(item: any, type?: string) {
    this.fields[item].focused = true;
    if (type && this.phoneNumber.length === 0) {
      this.phoneNumber = '+';
    }
  }

  blurEvent(item: any, type?: string, event?: any) {
    this.fields[item].focused = false;
    if (type && (this.phoneNumber.length === 1 || this.phoneNumber.length === 0 || this.phoneNumber === '+')) {
      this.phoneNumber = '';
      event.target.value = '';
    }
  }

  phoneNumberHandler(event: any) {
    if (event.target.value.charAt(0) !== '+') {
      const arr = event.target.value.split('');
      arr.unshift('+');
      event.target.value = arr.join('');
    }
    const value = '' + event.target.value;
    const phoneNumber = new AsYouType().input(value);
    event.target.value = phoneNumber;
    this.phoneNumber = phoneNumber;
  }

}
