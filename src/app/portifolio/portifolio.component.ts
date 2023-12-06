import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;

  filtering: boolean = false;
  constructor(private titleService: Title, private ProjectsService: ProjectsService){
    this.titleService.setTitle('Arnon Nascimento - Portifolio')

  }
  ngOnInit(): void {
    this.projects = this.ProjectsService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if (this.python){
      filterTags.push(Tag.PYTON);
    }

    if (this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if (this.java){
      filterTags.push(Tag.JAVA);
    }

    if (this.react){
      filterTags.push(Tag.REACT);
    }

    if (this.python || this.csharp || this.java || this.angular || this.typescript || this.react) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.ProjectsService.GetProjectsByFilter(filterTags);
  }
  ResetFilters() {
    this.python = false;
    this.csharp = false;
    this.angular = false;
    this.react = false;
    this.java = false;
    this.typescript = false;
    this.filtering = false;

    this.projects = this.ProjectsService.GetProjects();
  }
}
