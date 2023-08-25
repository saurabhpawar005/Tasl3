import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],



})


export class AppComponent {
  title = 'assets';

  

  sections: { header: string; details: string }[] = [];
  newSectionHeader = '';
  newSectionDetails = '';

  addSection() {
    const newSection = {
      header: this.newSectionHeader,
      details: this.newSectionDetails,
    };

    this.sections.push(newSection);
    this.newSectionHeader = '';
    this.newSectionDetails = '';
  }




}

export class InputTextareaAutoResizeDemo {
}
// export class InputTextBasicDemo {
//   value: string;
// }



