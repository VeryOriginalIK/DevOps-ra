import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectAnimal } from "./select-animal/select-animal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SelectAnimal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GugyakEsMacskak');
}
