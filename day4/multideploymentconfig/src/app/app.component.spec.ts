import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ProductService} from './services/product.service';
 import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
     
declarations: [
        AppComponent
      ],
      providers:[ProductService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'unittest'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unittest');
  }));
  it('should increment as 1 ',async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const button = fixture.debugElement.nativeElement.querySelector('.first');
    //app.doLogin('','');
    button.click();
    fixture.detectChanges();

    const htmlElement = fixture.debugElement.nativeElement.querySelector('h2');
    expect(parseInt(htmlElement.textContent)).toEqual(app.counter);
  }));
  it('component should call a ajax service and get the not null data',async(()=>{
    
 
  // Syntax Code  inject([/* provider tokens */], (/* dependencies */) => {
  // test goes here
  inject([ProductService], (productService) => {
    console.log("Injection ......");
    productService.getProductsAjax().subscribe((pr) => {
      console.log("........ Pr is ",pr);
      expect(pr.length).toBe(4);
     
    });
  });
  }));


  
  it('component should call a service and get length of an array',async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
     const button = fixture.debugElement.nativeElement.querySelector('.last');
     console.log("Button is ",button);
    button.click();
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.nativeElement.querySelector('p');
    console.log("P Tag Value is ",htmlElement.textContent);
    expect(htmlElement.textContent).toContain('10')
  }))
});
