import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, LucideAngularModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  tecnologias = [
    'Angular',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'C# / .NET',
    'Express.js',
    'APIs REST',
    'PostgreSQL',
    'SQL Server',
    'MongoDB',
    'AWS',
    'Nginx',
    'Git / GitHub',
    'Swagger',
    'Postman',
    'Entre outras...'
  ];

  projects = [{
    id: 1,
    title: "Bot Discord",
    description:
      "Bot de gerenciamento de respawns (claimed) para o jogo HelmoRPG, feito em Node.js + TypeScript.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F16794b88e7bf47659e3b94b3861b763f%2F0d48edc841b348bb87ad5c6aaf00f7c6?format=webp&width=800",
    link: "https://github.com/MCappaun/discord-bot-resp",
  },
  ];
  formData = { name: '', email: '', message: '' };

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  handleSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Mensagem enviada com sucesso!');
    this.formData = { name: '', email: '', message: '' };
  }
}
