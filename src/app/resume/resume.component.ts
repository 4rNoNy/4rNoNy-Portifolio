import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private render: Renderer2){
    this.titleService.setTitle('Arnon Nascimento - Resume')

  }
  DownloadFile(){
    const link = this.render.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Arnon Nascimento - 27 992248102.pdf');
    link.setAttribute('download', 'Arnon Nascimento - 27 992248102.pdf');
    link.click();
    link.remove();
  }
}
