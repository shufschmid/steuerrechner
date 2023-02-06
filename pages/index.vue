<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="6" lg="5">
      <v-card>
        <v-tabs
          v-model="tab"
          class="primary"
          centered
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#einzelperson"
            >Einzelperson
            <v-icon>mdi-human-female</v-icon>
          </v-tab>

          <v-tab href="#family">
            Familie
            <v-icon>mdi-human-male-female-child</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" style="margin-bottom: 70px">
          <SingelPerson tab-item-value="einzelperson" />
          <Family tab-item-value="family" />
        </v-tabs-items>
      </v-card>
      <p class="pt-2" style="color: white; transform: translateY(calc(-95%))">Ein Service von Bajour. Weitere Informationen: <a href="https://bajour.ch/tag/Steuerpaket" target="_blank">bajour.ch/tag/Steuerpaket</a></p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      tab: null,
      steuersatz_vorher: 0.2175,
      steuersatz_nachher: 0.21,

      einzelperson_sozialabzug_vorher: 18100,
      einzelperson_sozialabzug_nachher: 18500,
      einzelperson_berufskosten_vorher: 4000,
      einzelperson_berufskosten_nachher: 4000,
      einzelperson_versicherungsabzug_vorher: 2800,
      einzelperson_versicherungsabzug_nachher: 4000,

      einzelperson_saeule3a: 6883,
      einzelperson_bruttolohn: 80000,
    }
  },
  mounted() {
    if (this.$route.hash === '#family') {
      this.tab = 'family'
    }
  },
  computed: {
    einzelperson_abzuege_total_vorher() {
      return (
        this.einzelperson_sozialabzug_vorher +
        this.einzelperson_berufskosten_vorher +
        this.einzelperson_versicherungsabzug_vorher +
        this.einzelperson_saeule3a +
        this.einzelperson_lohnabzuege
      )
    },

    einzelperson_abzuege_total_nachher() {
      return (
        this.einzelperson_sozialabzug_nachher +
        this.einzelperson_berufskosten_nachher +
        this.einzelperson_versicherungsabzug_nachher +
        this.einzelperson_saeule3a +
        this.einzelperson_lohnabzuege
      )
    },
    einzelperson_lohnabzuege() {
      return this.einzelperson_bruttolohn * 0.1
    },
    einzelperson_steuerbares_einkommen_vorher() {
      if (
        this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_vorher >
        0
      ) {
        return (
          this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_vorher
        )
      } else {
        return 0
      }
    },
    einzelperson_steuerbares_einkommen_nachher() {
      if (
        this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_nachher >
        0
      ) {
        return (
          this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_nachher
        )
      } else {
        return 0
      }
    },
    einzelperson_steuerbetrag_vorher() {
      if (this.einzelperson_steuerbares_einkommen_vorher > 300000) {
        return (
          this.einzelperson_steuerbares_einkommen_vorher *
            this.steuersatz_vorher +
          (this.einzelperson_steuerbares_einkommen_vorher - 201500) * 0.0625 +
          (this.einzelperson_steuerbares_einkommen_vorher - 300000) * 0.01
        )
      } else if (this.einzelperson_steuerbares_einkommen_vorher > 201500) {
        return (
          this.einzelperson_steuerbares_einkommen_vorher *
            this.steuersatz_vorher +
          (this.einzelperson_steuerbares_einkommen_vorher - 201500) * 0.0625
        )
      } else {
        return (
          this.einzelperson_steuerbares_einkommen_vorher *
          this.steuersatz_vorher
        )
      }
    },
    einzelperson_steuerbetrag_nachher() {
      if (this.einzelperson_steuerbares_einkommen_nachher > 300000) {
        return (
          this.einzelperson_steuerbares_einkommen_nachher *
            this.steuersatz_nachher +
          (this.einzelperson_steuerbares_einkommen_nachher - 201500) * 0.0625 +
          (this.einzelperson_steuerbares_einkommen_nachher - 300000) * 0.01
        )
      } else if (this.einzelperson_steuerbares_einkommen_nachher > 201500) {
        return (
          this.einzelperson_steuerbares_einkommen_nachher *
            this.steuersatz_nachher +
          (this.einzelperson_steuerbares_einkommen_nachher - 201500) * 0.0625
        )
      } else {
        return (
          this.einzelperson_steuerbares_einkommen_nachher *
          this.steuersatz_nachher
        )
      }
    },
    einzelperson_ersparnis() {
      return (
        this.einzelperson_steuerbetrag_vorher -
        this.einzelperson_steuerbetrag_nachher
      )
    },
    einzelperson_ersparnis_prozent() {
      return this.einzelperson_ersparnis / this.einzelperson_steuerbetrag_vorher
    },
  },
}
</script>
