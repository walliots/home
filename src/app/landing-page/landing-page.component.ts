import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  backgroundImageUrl: string = 'https://i.imgur.com/MaF9z5Q.jpeg';

  constructor() { }

  ngOnInit(): void {
    // Selecione todos os links da página
    const links = document.querySelectorAll('a[href^="#"]');

    // Adicione um ouvinte de eventos a cada link
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          scrollToElement(targetElement);
        }
      });
    });

    // Função scrollToElement
    function scrollToElement(element: HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    AOS.init();
  }

  scroll(){
     
  }

}
