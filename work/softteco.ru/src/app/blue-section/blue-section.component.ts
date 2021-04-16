import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-section',
  templateUrl: './blue-section.component.html',
  styleUrls: ['./blue-section.component.scss']
})
export class BlueSectionComponent implements OnInit {
  text = `Наши ценности включают в себя удовлетворенность клиентов и сотрудников,
   а также корпоративную социальную ответственность. SoftTeco, будучи социальной
   и экологически ответственной компанией, неоднократно признавалась
   лучшим IT-работодателем в Беларуси. Мы используем лучшие практики
   для раскрытия потенциала наших сотрудников,
   преодоления коммуникационных барьеров, создания доверия и повышения эффективности.`;
  constructor() { }

  ngOnInit() {
  }

}
