import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css'
})
export class SignalsLayoutComponent {

}
