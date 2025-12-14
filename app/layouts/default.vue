<template>
  <div class="min-h-screen bg-sand-light text-coffee flex flex-col">
    <!-- HEADER -->
    <header
      class="border-b border-sand bg-sand-light/90 backdrop-blur sticky top-0 z-50"
    >
      <nav
        class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        <NuxtLink to="/" class="flex flex-col">
          <span class="font-serif text-xl tracking-wide">
            Erika Diaz de Cerio
          </span>
          <span class="text-xs text-coffee/70">
            Magnétiseuse &amp; praticienne en soins énergétiques – Hendaye
          </span>
        </NuxtLink>

        <ul class="hidden md:flex items-center gap-6 text-sm">
          <li>
            <NuxtLink to="/" class="hover:text-sage-dark">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/mes-pratiques" class="hover:text-sage-dark">
              Mes pratiques
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/a-propos" class="hover:text-sage-dark">
              À propos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tarifs" class="hover:text-sage-dark">Tarifs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-sage-dark">
              Contact
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://www.resalib.fr"
              target="_blank"
              class="inline-flex items-center rounded-full bg-sage px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-sage-dark transition"
            >
              Prendre RDV
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- CONTENU -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="mt-16 bg-sage-light/40">
      <div
        class="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm"
      >
        <div>
          <p class="font-medium">Erika Diaz de Cerio – Magnétiseuse</p>
          <p>13 rue du Siège<br />64700 Hendaye</p>
          <p class="mt-2">
            Tél :
            <a href="tel:+33750260796" class="underline">07 50 26 07 96</a>
          </p>
          <p>
            Email :
            <a href="mailto:erika.magnetiseuse@gmail.com" class="underline">
              erika.magnetiseuse@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p class="font-medium">Consultations</p>
          <p>Du lundi au samedi sur rendez-vous.</p>
          <p class="mt-2">
            Stationnement gratuit dans la rue.<br />Arrêt Joncaux (bus n°14) à
            50m.
          </p>
        </div>
        <div>
          <p class="font-medium">Paiements</p>
          <p>Espèces, chèque, Wero.</p>
          <p>A distance : Wero ou virement.</p>
        </div>
      </div>
      <div class="text-center text-xs text-coffee/60 pb-4">
        © {{ new Date().getFullYear() }} – Site vitrine réalisé avec Nuxt.
      </div>
    </footer>
  </div>
</template>


