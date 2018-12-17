import { Directive, ElementRef, OnInit,Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
  
})
export class ColorDirective implements OnInit {
  @Input('appColor') attrColor:string='aqua';  // Input Var name same as selector name, otherwise pass alias
  //@HostBinding('style.backgroundColor') bgColor:string;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
  //this.bgColor = this.attrColor;

  }
  ngOnInit(){
    console.log("Native Element ",this.elementRef.nativeElement);
    //this.elementRef.nativeElement.style.backgroundColor='red';  // Bad Practice to Use
    console.log("After Change Color is ",this.elementRef.nativeElement.style.backgroundColor);
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange');
    //this.bgColor = this.attrColor;
  }
  @HostListener('click')
  myMouseIsClicked(event:Event){
    console.log("Clicked Call");
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
    //this.bgColor = 'red'; // Another Way to do the above code
    //console.log("Attr Color is ",this.attrColor);
    //this.bgColor=this.attrColor;
  }
  @HostListener('mouseenter')
  myMouseIsEntered(event:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.attrColor);
    //var h1 = this.renderer.createElement('<h1>');

    //this.renderer.addClass('dialog');
  }
  @HostListener('mouseleave')
  myMouseIsLeave(event:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }
}
