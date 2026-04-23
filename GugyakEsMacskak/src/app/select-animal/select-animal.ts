import { Component, inject, signal } from '@angular/core';
import { Dataservice } from '../dataservice/dataservice';

@Component({
  selector: 'app-select-animal',
  imports: [],
  templateUrl: './select-animal.html',
  styleUrl: './select-animal.css',
})
export class SelectAnimal {
  private dataservice = inject(Dataservice);
  animal = signal<string>("");
  
  GetGugya(){
    this.dataservice.getGugya().subscribe((data) => {
      this.animal.set(data.animal);
    });
  }

  GetMacska(){
    this.dataservice.getMacska().subscribe((data) => {
      this.animal.set(data.animal);
    });
  }
}
