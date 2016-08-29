import { Component } from '@angular/core';
import { PaginationService, PaginationControlsCmp } from 'ng2-pagination';

import { PartiesFormComponent } from './parties-form.component';
import { RsvpPipe } from '../shared/rsvp.pipe';
import { DisplayMainImagePipe } from '../shared/display-main-image.pipe';
import { PartiesList } from './parties-list.class';

import template from './parties-list.web.component.html';

@Component({
  selector: 'parties-list',
  template,
  viewProviders: [PaginationService],
  directives: [PartiesFormComponent, PaginationControlsCmp],
  pipes: [RsvpPipe, DisplayMainImagePipe]
})
export class PartiesListComponent extends PartiesList {
  constructor(paginationService: PaginationService) {
    super(paginationService);
  }
}
