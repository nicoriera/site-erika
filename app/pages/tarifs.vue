<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

definePageMeta({});

useSiteMeta(t("pages.rates"), t("meta.ratesDescription"));
</script>

<template>
  <div class="min-h-screen">
    <!-- En-tête de page -->
    <header class="bg-sand-light/40 border-b border-sage-light/60">
      <div class="max-w-5xl mx-auto px-4 py-8 md:py-10">
        <h1
          class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center tracking-tight">
          {{ t("rates.title") }}
        </h1>
        <p class="text-center text-coffee/70 text-lg max-w-2xl mx-auto">
          {{ t("rates.subtitle") }}
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-10 md:py-8 lg:py-10">
      <div class="max-w-4xl mx-auto">
        <!-- Cartes mobiles (visible uniquement sur petit écran) -->
        <div class="md:hidden space-y-4 mb-10">
          <div
            class="bg-white rounded-2xl p-6 shadow-lg shadow-coffee/10 ring-1 ring-black/5 border border-sand/30">
            <h3 class="font-medium text-coffee mb-2">
              {{ t("rates.services.adult.name") }}
            </h3>
            <p class="text-coffee/80 text-sm mb-2">
              {{ t("rates.services.adult.duration") }}
            </p>
            <p class="font-medium text-coffee mb-4">
              {{ t("rates.services.adult.price") }}
            </p>
            <a
              href="https://www.resalib.fr/praticien/124708-erika-diaz-de-cerio-magnetiseur-hendaye#newrdvmodal"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-3 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
              {{ t("rates.bookAppointment") }}
            </a>
          </div>
          <div
            class="bg-white rounded-2xl p-6 shadow-lg shadow-coffee/10 ring-1 ring-black/5 border border-sand/30">
            <h3 class="font-medium text-coffee mb-2">
              {{ t("rates.services.child.name") }}
            </h3>
            <p class="text-coffee/80 text-sm mb-2">
              {{ t("rates.services.child.duration") }}
            </p>
            <p class="font-medium text-coffee mb-4">
              {{ t("rates.services.child.price") }}
            </p>
            <a
              href="https://www.resalib.fr/praticien/124708-erika-diaz-de-cerio-magnetiseur-hendaye#newrdvmodal"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-3 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
              {{ t("rates.bookAppointment") }}
            </a>
          </div>
          <div
            class="bg-white rounded-2xl p-6 shadow-lg shadow-coffee/10 ring-1 ring-black/5 border border-sand/30">
            <h3 class="font-medium text-coffee mb-2">
              {{ t("rates.services.cutFire.name") }}
            </h3>
            <p class="text-coffee/80 text-sm mb-4">
              {{ t("rates.services.cutFire.duration") }}
            </p>
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center justify-center w-full px-4 py-3 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
              {{ t("rates.contactMe") }}
            </NuxtLink>
          </div>
        </div>

        <!-- Tableau des tarifs (visible à partir de md) -->
        <div
          class="hidden md:block bg-white rounded-2xl shadow-lg shadow-coffee/10 overflow-hidden ring-1 ring-black/5 mb-10">
          <table class="w-full">
            <thead class="bg-sage-light/50">
              <tr>
                <th
                  class="px-6 py-4 text-left text-base font-medium text-coffee">
                  {{ t("rates.table.service") }}
                </th>
                <th
                  class="px-6 py-4 text-left text-base font-medium text-coffee">
                  {{ t("rates.table.duration") }}
                </th>
                <th
                  class="px-6 py-4 text-left text-base font-medium text-coffee">
                  {{ t("rates.table.price") }}
                </th>
                <th
                  class="px-6 py-4 text-center text-base font-medium text-coffee">
                  {{ t("rates.table.action") }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-sand">
              <tr class="hover:bg-sage-light/20 transition-colors">
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.adult.name") }}
                </td>
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.adult.duration") }}
                </td>
                <td class="px-6 py-4 font-medium text-coffee">
                  {{ t("rates.services.adult.price") }}
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="https://www.resalib.fr/praticien/124708-erika-diaz-de-cerio-magnetiseur-hendaye#newrdvmodal"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
                    {{ t("rates.bookAppointment") }}
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-sage-light/20 transition-colors">
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.child.name") }}
                </td>
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.child.duration") }}
                </td>
                <td class="px-6 py-4 font-medium text-coffee">
                  {{ t("rates.services.child.price") }}
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="https://www.resalib.fr/praticien/124708-erika-diaz-de-cerio-magnetiseur-hendaye#newrdvmodal"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
                    {{ t("rates.bookAppointment") }}
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-sage-light/20 transition-colors">
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.cutFire.name") }}
                </td>
                <td class="px-6 py-4 text-coffee/80 text-center">
                  {{ t("rates.services.cutFire.duration") }}
                </td>
                <td class="px-6 py-4 font-medium text-coffee"></td>
                <td class="px-6 py-4 text-center">
                  <NuxtLink
                    :to="localePath('/contact')"
                    class="inline-flex items-center px-4 py-2 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-base focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
                    {{ t("rates.contactMe") }}
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Note paiements -->
        <aside
          class="bg-sage-light/40 rounded-2xl p-6 md:p-8 border-l-4 border-sage text-coffee/80 text-center">
          <p class="text-base leading-relaxed">
            {{ t("footer.paymentsMethods") }}<br />
            {{ t("footer.paymentsRemote") }}
          </p>
        </aside>
      </div>
    </main>
  </div>
</template>
