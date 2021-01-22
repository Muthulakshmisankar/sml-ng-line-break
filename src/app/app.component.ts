import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sml-line-break';
  message : any = "Hi, Welcome to sml-ng-line-break pipe component. Here, we are going to see the steps to implement in your angular app.\n Step 1: Npm install sml-ng-line-break. \n step 2: Import SmlNgLineBreakPipe from npm and add it into declarations part of your app module. \n step 3: Provide the pipe string `| smlnglinebreak ` into your ngmodel definition. \n step 4: Provide `\\ n` into your message , it will helps you to provide the line break in the html document."
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
