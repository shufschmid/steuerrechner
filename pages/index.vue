<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="deep-purple accent-4"
          centered
          dark
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

        <v-tabs-items v-model="tab">
          <v-tab-item value="einzelperson">
            <v-text-field v-model="einzelperson_bruttolohn" label="Bruttlohn">
            </v-text-field>
            <v-slider
              v-model="einzelperson_bruttolohn"
              max="1000000"
              min="0"
            ></v-slider>

            <v-slider
              v-model="einzelperson_saeule3a"
              label="Einzahlungen in die dritte Säule"
              max="6883"
              min="0"
            ></v-slider>
            <v-simple-table dense>
              <thead>
                <tr>
                  <th class="text-left">Abzüge</th>
                  <th class="text-right">bei einem Nein</th>

                  <th class="text-right">bei einem Ja</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sozialabzug</td>
                  <td class="text-right">{{ einzelperson_sozialabzug_vorher.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_sozialabzug_nachher.toFixed(0) }} CHF</td>
                </tr>

                <tr>
                  <td>Lohnabzüge (Annahme: 10%)</td>
                  <td class="text-right">{{ einzelperson_lohnabzuege.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_lohnabzuege.toFixed(0) }} CHF</td>
                </tr>

                <tr>
                  <td>Berufskosten</td>
                  <td class="text-right">{{ einzelperson_berufskosten_vorher.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_berufskosten_nachher.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td>Versicherungsabug</td>
                  <td class="text-right">{{ einzelperson_versicherungsabzug_vorher.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_versicherungsabzug_nachher.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td>Säule 3a</td>
                  <td class="text-right">{{ einzelperson_saeule3a.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_saeule3a.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td>Total Abzüge</td>
                  <td class="text-right">{{ einzelperson_abzuege_total_vorher.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_abzuege_total_nachher.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td> </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Steuerbares Einkommen</td>
                  <td class="text-right">{{ einzelperson_steuerbares_einkommen_vorher.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_steuerbares_einkommen_nachher.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td>Steuerbetrag</td>
                  <td class="text-right">{{ einzelperson_steuerbetrag_vorher.toFixed(0) }} CHF</td>
                  <td class="text-right">{{ einzelperson_steuerbetrag_nachher.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td>Ersparnis bei einem Ja</td>
                  <td></td>
                  <td class="text-right">{{ einzelperson_ersparnis.toFixed(0) }} CHF</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td class="text-right">{{ (einzelperson_ersparnis_prozent * 100).toFixed(0) }} %</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-tab-item>
          <v-tab-item value="family">{{ tab }}</v-tab-item>
        </v-tabs-items>
      </v-card>
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


