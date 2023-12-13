import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Pokedex em Angular/PokeApi", pictures: ["../../assets/c1.jpg","../../assets/c2.jpg","../../assets/c3.jpg"], projectLink: "https://github.com/4rNoNy/Pokedex-em-Angular-PokeApi", summary: "PokeDex Online: Explore, Descubra e Desafie-se", description: "Apresento minha PokeDex online, uma plataforma que oferece uma rica experiência de pesquisa sobre Pokémon. Na Home Page, explore uma lista paginada e ordenada, realizando pesquisas por nome ou tipo. Detalhes minuciosos, como estatísticas de ataque, defesa, altura e peso, são revelados na página dedicada a cada Pokémon. Para adicionar um toque de diversão, integrei um jogo inspirado no 'Who's that Pokémon?', desafiando os usuários a adivinhar o nome do Pokémon ao ver apenas sua sombra. Mergulhe neste universo Pokémon interativo e descubra o fascínio por trás de cada criatura! 🌟🔍", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 1, name: "Chat multiplataforma com SignalR", pictures: ["../../assets/c1.jpg","../../assets/c2.jpg","../../assets/c3.jpg"], projectLink: "https://github.com/4rNoNy/Chat-multiplataforma-com-SignalR", summary: "Chat em Tempo Real com React, ASP.NET e Flutter", description: "Explore este repositório que destaca a integração do SignalR em um projeto de chat em tempo real. Com front-end em React para uma interface amigável, back-end em ASP.NET gerenciando a lógica do chat, e um aplicativo móvel em Flutter com integração ao OneSignal para uma experiência completa em dispositivos móveis. 🚀", tags: [Tag.REACT, Tag.TYPESCRIPT, Tag.CSHARP, Tag.DOTNET, Tag.FLUTTER]},
    {id: 2, name: "Movie app Flutter", pictures: ["../../assets/c1.jpg","../../assets/c2.jpg","../../assets/c3.jpg"], projectLink: "https://github.com/4rNoNy/Movie_App_Flutter", summary: "Explorando o Mundo do Cinema com o Flutter e a API do The Movie DB", description: "Um aplicativo de filmes desenvolvido em Flutter com a poderosa API do The Movie DB. Navegue por uma vasta coleção de filmes, descubra detalhes fascinantes e mergulhe em uma experiência cinematográfica única, tudo na palma da sua mão! 🎬✨", tags: [Tag.DART ,Tag.FLUTTER]},
    {id: 3, name: "Simulador de pagamento", pictures: ["../../assets/c1.jpg","../../assets/c2.jpg","../../assets/c3.jpg"], projectLink: "https://github.com/4rNoNy/credit-card-payment-simulator-Angular", summary: "Simulando Transações Financeiras com Facilidade", description: "Explore o AngularPay, um projeto inovador que visa simular o envio de dinheiro entre usuários por meio de cartão de crédito. Navegue pela lista de usuários na primeira tela, escolha um destinatário e inicie o processo de pagamento. Um modal intuitivo apresenta as informações do destinatário, opções de cartão de crédito e um botão para efetuar o pagamento. Completando o formulário, o usuário aciona um endpoint de pagamento que determina o sucesso ou falha da transação, exibindo um modal correspondente. Uma experiência simples e eficiente para simular transferências financeiras! 💸🌐", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 4, name: "GameBoy Pokemon-Flutter", pictures: ["../../assets/c1.jpg","../../assets/c2.jpg","../../assets/c3.jpg"], projectLink: "https://github.com/4rNoNy/GameBoy-Pokemon-Flutter", summary: "Explorando Mapas e Pokédex", description: "Testei os limites da programação com o Gameboy Pokemon, um projeto audacioso onde desenvolvi um Game Boy em Flutter em apenas dois dias. Neste jogo, os jogadores podem movimentar o personagem pelo mapa, entrar em casas e acessar uma Pokédex completa, alimentada pela pokeAPI. Uma jornada intensiva que resultou em um emocionante desafio de codificação, trazendo à vida um universo de aventuras em tempo recorde! 🚀🎮", tags: [Tag.FLUTTER, Tag.DART]},
    {id: 5, name: "ReactFlix", pictures: ["../../assets/c1.jpg","../../assets/c2.jpg","../../assets/c3.jpg"], projectLink: "https://github.com/4rNoNy/Projeto-React-Clone-Netflix", summary: "Clone Responsivo da Netflix com API do The MovieDB", description: "Explore o ReactFlix, meu projeto que recria a página inicial da Netflix utilizando React e a API poderosa do The MovieDB. Desfrute de uma experiência totalmente responsiva, perfeita para desktops e dispositivos móveis, enquanto navega por uma extensa coleção de filmes e séries. Este projeto não apenas demonstra minhas habilidades em React, mas também destaca meu comprometimento com a qualidade e a adaptabilidade em todos os dispositivos. Confira este e outros projetos no meu portfólio de desenvolvedor! 🎬🖥️📱", tags: [Tag.REACT]}
  ];
  constructor() { }
  GetProjects(){
    return this.projects;
  }
  GetProjectsById(id: number): Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('there is no project that matches the id: ' + id);
    }

    return project;
  }
  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
