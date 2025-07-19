import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { Sun, Moon, Menu, Linkedin, Github, Mail, LucideAngularModule, Instagram, Phone, MapPin, ExternalLink } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), importProvidersFrom(
    LucideAngularModule.pick({ Linkedin, Github, Instagram, Sun, Moon, Menu, Mail, Phone, MapPin, ExternalLink })
  )]
};
