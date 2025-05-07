import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,  //x compatibility w <Angular19
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{}
