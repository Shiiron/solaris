import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { DataService } from 'src/app/services/name.service';

@Component({
  selector: 'app-header',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data!: Person[];
  personForm = false;
  newPerson!: Person;
  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.initPerson();
    this.dataService.getData().then((data) => {
      this.data = data;
    });
  }

  onSubmit() {
    this.data.push(this.newPerson);
    this.initPerson();
    this.personForm = false;
  }

  initPerson() {
    this.newPerson = { name: '', lastName: '', age: 0, zipCode: '', city: '' };
  }

  removePerson(index: number) {
    this.data.splice(index, 1);
  }
}
