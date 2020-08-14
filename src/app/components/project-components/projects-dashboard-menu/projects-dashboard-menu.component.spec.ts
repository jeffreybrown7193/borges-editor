import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDashboardMenuComponent } from './projects-dashboard-menu.component';

describe('ProjectsDashboardMenuComponent', () => {
  let component: ProjectsDashboardMenuComponent;
  let fixture: ComponentFixture<ProjectsDashboardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsDashboardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
