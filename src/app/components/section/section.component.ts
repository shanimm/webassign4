import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable} from 'rxjs';
import {SectionService} from '../../Services/section.service';
import {Section} from '../../Models';



@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  sections: Section[];
  sub: any;

  constructor(private sectionService: SectionService) {
  }

  ngOnInit() {
    this.sub = this.sectionService.getSections()
      .subscribe(sections => this.sections);
  }

  ngOnDestroy() {
    if (this.sub)
    {
      this.sub.unsubscribe();
    }
  }

}
