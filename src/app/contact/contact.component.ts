import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Arnon Nascimento - Contact')

  }
  openDiscordConversation(): void {
    const username: string = "4rNoNy";
    const discriminator: string = "1834";
    const discordURI: string = `discord://send?to=${username}#${discriminator}`;

    window.location.href = discordURI;
  }
}
