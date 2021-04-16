import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branchen',
  templateUrl: './branchen.component.html',
  styleUrls: ['./branchen.component.scss']
})
export class BranchenComponent implements OnInit {
  title = ['Индустриальный сектор'];
  subTitle = 'Наши решения для отраслей промышленности позволяют нашим клиентам стимулировать инновации.';

  phrases = [
    'Финансы и банковское дело',
    'Страхование',
    'Автомобилестроение',
    'Электронная коммерция',
    'Телекоммуникации',
    'Недвижимость',
    'Медицина',
    'Фармацевтология',
    'Электронное обучение'
  ];


  constructor() { }

  ngOnInit() { }

}
