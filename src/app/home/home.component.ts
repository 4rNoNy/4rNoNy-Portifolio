import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;

  constructor(private titleService: Title, private ProjectsService: ProjectsService, private translate: TranslateService){
    this.titleService.setTitle('Arnon Nascimento - Home')

  }
  ngOnInit(): void {
    this.featuredProject = this.ProjectsService.GetProjectsById(0);
  }
}
