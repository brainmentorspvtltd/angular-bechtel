import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../customer';
@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {
  @Input()
  list:Customer[];
  constructor() { }

  ngOnInit() {
  }

}
