import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { MyerrorhandlerService } from '../myerrorhandler.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  height = 300;
  width = 300;
  imgsource= "../assets/front.jpg";

  leave():void{

  this.imgsource ="../assets/front.jpg"
 }
  
  setproperty():void {
    
    this.imgsource = "../assets/back.jpg"
  }

  constructor(private handleerror:MyerrorhandlerService) { }

  ngOnInit(): void {
  }

  generateError(): void {
    this.handleerror.handleError('I will handle all my error other than api errors');
  }

}
