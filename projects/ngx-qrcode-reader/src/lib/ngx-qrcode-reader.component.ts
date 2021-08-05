import { Component, Input, Output ,EventEmitter , OnChanges,OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';


declare var require: any;

var QrCode = require('qrcode-reader').default;

@Component({
  selector: 'ngx-qrcode-reader',
  template: `<div #qrCodeElement [class]="cssClass"></div>`,
  styles: []
})
export class NgxQrcodeReaderComponent implements OnChanges , OnInit {

  @Input('qrClass') cssClass = 'qrcode-reader'; 
  @Input("showQr") showQRCode = true;
  @Input('qrFile') fileValue ='';
  
  @ViewChild('qrCodeElement', { static: true })
  qrCodeElement!: ElementRef;

  @Output('onfetchQRContent') qrContentResult  = new EventEmitter();

  qrReader: any;

  constructor(private renderer: Renderer2) { 
        this.qrReader = new QrCode();
  }

  ngOnInit(){
    let that = this;
    this.qrReader.callback = (error: any, result: any) => {
      if(error) {
        console.log(error);
        return;
      }
      that.qrContentResult.emit({result : result.result , type : "text"  });
    } 
  }

  ngOnChanges() {
    this.decode(this.fileValue);
    if(this.showQRCode) {
      this.render();
    }
  }


  decode(value: any){
    this.qrReader.decode(value);    
  }

  render(){
    let element : Element ;
    element = this.renderer.createElement('img');
    element.setAttribute("src",this.fileValue);
    this.renderElement(element);
  }
  
  renderElement(element: any){
    for (let node of this.qrCodeElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrCodeElement.nativeElement, node);
    }            
    this.renderer.appendChild(this.qrCodeElement.nativeElement, element);
  }
}
