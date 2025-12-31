<script setup lang="ts">
import { useSiteMeta } from "../../composables/useSiteMeta";

const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.rates"), t("meta.description"));
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center">
      {{ t("rates.title") }}
    </h1>
    <p class="text-lg text-coffee/80 mb-12 text-center">
      {{ t("rates.subtitle") }}
    </p>

    <div class="max-w-4xl mx-auto">
      <!-- Tableau des tarifs -->
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-sage-light/50">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-medium text-coffee">
                  {{ t("rates.table.service") }}
                </th>
                <th class="px-6 py-4 text-left text-sm font-medium text-coffee">
                  {{ t("rates.table.duration") }}
                </th>
                <th class="px-6 py-4 text-left text-sm font-medium text-coffee">
                  {{ t("rates.table.price") }}
                </th>
                <th class="px-6 py-4 text-center text-sm font-medium text-coffee">
                  {{ t("rates.table.action") }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-sand">
              <!-- Adulte -->
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
                    href="https://www.resalib.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-sm">
                    {{ t("rates.bookAppointment") }}
                  </a>
                </td>
              </tr>
              <!-- Moins de 14 ans -->
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
                    href="https://www.resalib.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-sm">
                    {{ t("rates.bookAppointment") }}
                  </a>
                </td>
              </tr>
              <!-- Couper le feu -->
              <tr class="hover:bg-sage-light/20 transition-colors">
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.cutFire.name") }}
                </td>
                <td class="px-6 py-4 text-coffee/80">
                  {{ t("rates.services.cutFire.duration") }}
                </td>
                <td class="px-6 py-4 font-medium text-coffee">
                  {{ t("rates.services.cutFire.price") }}
                </td>
                <td class="px-6 py-4 text-center">
                  <NuxtLink
                    to="/contact"
                    class="inline-flex items-center px-4 py-2 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors text-sm">
                    {{ t("rates.contactMe") }}
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Note -->
      <div class="bg-sage-light/30 rounded-2xl p-6 text-center">
        <p class="text-sm text-coffee/70">
          {{ t("footer.paymentsMethods") }}<br />
          {{ t("footer.paymentsRemote") }}
        </p>
      </div>
    </div>
  </div>
</template>
