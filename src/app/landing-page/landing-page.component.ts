import { Component, OnInit } from '@angular/core';
import { faCoffee, faPlug, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faPlug = faPlug;
  faClock = faClock;

  backgroundImageUrl: string = 'https://imgur.com/pOf3dDn.png';

  constructor(library : FaIconLibrary) {
    library.addIcons(faTwitter)
    library.addIcons(faFacebook)
    library.addIcons(faInstagram)
    library.addIcons(faPlug)
    library.addIcons(faCoffee)
    library.addIcons(faClock)
   }

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
