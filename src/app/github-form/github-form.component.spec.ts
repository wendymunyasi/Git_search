import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFormComponent } from './github-form.component';

describe('GithubFormComponent', () => {
  let component: GithubFormComponent;
  let fixture: ComponentFixture<GithubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
