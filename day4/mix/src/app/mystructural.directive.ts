import { Directive, Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMystructural]'
})
export class MystructuralDirective {
  @Input()
  set appMystructural(flag:boolean){
    if(flag){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainer.clear();
    }
  }
  flag:boolean;

  constructor(private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) { }

}
