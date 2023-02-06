<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-row>
            <h1 class="text-md mx-auto col-sm-12 col-md-6 col-lg-5 col-12" style="font-size: 26px"><img style="width: 40px; height: 40px; transform: translateY(10px)" src="~/static/android-chrome-192x192.png" alt="bajour-logo"/> Bajour-Steuerrechner</h1>
        </v-row>
       <Nuxt />
      </v-container>
    </v-main>
<!--    <v-footer :absolute="false" app>
      <span><img style="width: 40px; height: 40px" src="~/static/android-chrome-192x192.png" alt="bajour-logo"/></span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style lang="scss">
.v-input__control {
  height: 25px;
}
.result-wrapper {
  table tbody tr td b {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
.result-wrapper.desktop {
  display: none !important;
}
@media screen and (min-width: 0) {
  .v-data-table__wrapper tbody, .v-data-table__wrapper thead {
    tr th:first-of-type, tr td:first-of-type {
      padding-left: 0 !important;
    }
    tr th:last-of-type, tr td:last-of-type {
      padding-right: 0 !important;
    }
  }
  .mobile-bottom-nav {
    animation: fadeIn .3s linear;
    display: block !important;
  }
}

@keyframes fadeIn {
  0%    {
    opacity: 0;

  }
  40% {
    opacity: 0;
  }
  100%  { opacity: 1; }
}
</style>
