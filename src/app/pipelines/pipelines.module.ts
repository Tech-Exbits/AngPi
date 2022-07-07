import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing Custom Pipes
import { LinkyPipe } from './linky.pipe';
import { TextPipe } from './text.pipe';
import { TimezonePipe } from './timezone.pipe';
import { HtmlPipe } from './html.pipe';
import { HoursPipe } from './hours.pipe';
import { SafePipe } from './safe.pipe';
import { ContainsPipe } from './contains.pipe';
import { TrimPipe } from './trim.pipe';
import { HighlightPipe } from './highlight.pipe';
import { ComparePipe } from './compare.pipe';


@NgModule({
  declarations: [
    LinkyPipe, 
    TextPipe, 
    TimezonePipe, 
    HtmlPipe,
    HoursPipe,
    SafePipe,
    ContainsPipe,
    TrimPipe,
    HighlightPipe,
    ComparePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinkyPipe, 
    TextPipe, 
    TimezonePipe, 
    HtmlPipe,
    HoursPipe,
    SafePipe,
    ContainsPipe,
    TrimPipe,
    HighlightPipe,
    ComparePipe
  ]
})
export class PipelinesModule { }
