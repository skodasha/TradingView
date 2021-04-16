import { Component, OnInit } from '@angular/core';
import { SectionTitleTheme, ButtonTheme } from './../shared/types/types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = ['Добро пожаловать в', 'цифровую трансформацию!'];
  titleTheme = SectionTitleTheme.Blue;
  longText = `Благодарим Вас за проявленный интерес к нашим услугам.
  Эта форма поможет нам обработать Ваш запрос и направить его соответствующим образом.
  Ожидайте ответа в течение одного рабочего дня.`;

  buttonTheme = ButtonTheme.Blue;
  buttonTitle = 'Отправить';

  constructor() { }

  ngOnInit() {
  }

}
