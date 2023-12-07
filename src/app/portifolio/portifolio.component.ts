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
  aspnet: boolean = false;
  csharp: boolean = false;
  dart: boolean = false;
  flutter: boolean = false;

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

    if (this.aspnet){
      filterTags.push(Tag.PYTON);
    }

    if (this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if (this.dart){
      filterTags.push(Tag.DART);
    }

    if (this.react){
      filterTags.push(Tag.REACT);
    }

    if (this.flutter){
      filterTags.push(Tag.FLUTTER);
    }

    if (this.aspnet || this.csharp || this.dart || this.angular || this.typescript || this.react || this.flutter) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.ProjectsService.GetProjectsByFilter(filterTags);
  }
  ResetFilters() {
    this.aspnet = false;
    this.csharp = false;
    this.angular = false;
    this.react = false;
    this.dart = false;
    this.typescript = false;
    this.filtering = false;
    this.flutter = false;

    this.projects = this.ProjectsService.GetProjects();
  }
}
