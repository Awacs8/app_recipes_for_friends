# Aplikacija "Recepti za prijatelje"

Aplikacija je namenjena osobama koje vole da eksperimentišu sa namirnicama, kreiraju i dele svoje recepte.
Radjena je u React-u preko funkcionalnih komponeti.
Kada se učita, prikazuje se početna strana (komponenta: Welcome.js) sa formama za log in ili registraciju korisnika ("public" komponente). Popunjavanjem jedne od njih pristupa se delu aplikacije koji se sastoji od "private" komponenti.
Na glavnoj stranici (Main.js) nalazi se nav bar sa linkovima do pojediinih komponenti:

svi recepti (json) koje je moguce filtrirati po težini i vršiti pretragu po nazivu.
//dodati: klikom na dugme "sačuvaj recept" korisnik pravi svoju listu recepata koja će se nalaziti u komponenti Profile.js

dodaj recept
/dodati: klikom na dugme "dodaj recept" korisnik prosledjuje popunjenu formu serveru (PUT metoda) koji se ispisuje u listi svih recepata

profil:
informacije o ulogovanom korisniku i lista ostalih korisnika servera
//dodati mogućnost izmene profilne slike, email-a i passworda

saveti:
//dodati: listu korisnih saveta i mogućnost dodavanja saveta od strane korisnika

