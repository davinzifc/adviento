import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor() {
    this.boobstrap(1); // Esto es un ejemplo
  }

  ngOnInit(): void {
    this.boobstrap(2); // Esto es un ejemplo
  }

  // Esta funcion es un ejemplo
  public boobstrap(index: number) {
    console.log('Hello World!' + index);
  }
}
