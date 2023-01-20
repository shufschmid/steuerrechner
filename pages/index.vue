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
            

            <v-text-field
              v-model="einzelperson_bruttolohn"
              label="Bruttlohn"
            >
            </v-text-field>
            <v-slider
            v-model="einzelperson_bruttolohn"
              max="10000000"
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
                  <th class="text-left">bei einem Nein</th>

                  <th class="text-left">bei einem Ja</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sozialabzug</td>
                  <td>{{ einzelperson_sozialabzug_vorher }} CHF</td>
                  <td>{{ einzelperson_sozialabzug_nachher }} CHF</td>
                </tr>

                <tr>
                  <td>Lohnabzüge (Annahme: 10%)</td>
                  <td>{{ einzelperson_lohnabzuege }} CHF</td>
                  <td>{{ einzelperson_lohnabzuege }} CHF</td>
                </tr>

                <tr>
                  <td>Berufskosten</td>
                  <td>{{ einzelperson_berufskosten_vorher }} CHF</td>
                  <td>{{ einzelperson_berufskosten_nachher }} CHF</td>
                </tr>
                <tr>
                  <td>Versicherungsabug</td>
                  <td>{{ einzelperson_versicherungsabzug_vorher }} CHF</td>
                  <td>{{ einzelperson_versicherungsabzug_nachher }} CHF</td>
                </tr>
                <tr>
                  <td>Säule 3a</td>
                  <td>{{ einzelperson_saeule3a }} CHF</td>
                  <td>{{ einzelperson_saeule3a }} CHF</td>
                </tr>
                <tr>
                  <td>Total Abzüge</td>
                  <td>{{ einzelperson_abzuege_total_vorher }} CHF</td>
                  <td>{{ einzelperson_abzuege_total_nachher }} CHF</td>
                </tr>
              </tbody>
            </v-simple-table>
            <hr />
            <v-simple-table dense>
              <thead>
                <tr>
                  <th class="text-left">Steuerbelastung</th>
                  <th class="text-left">bei einem Nein</th>

                  <th class="text-left">bei einem Ja</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Steuerbares Einkommen</td>
                  <td>{{ einzelperson_steuerbares_einkommen_vorher }} CHF</td>
                  <td>{{ einzelperson_steuerbares_einkommen_nachher }} CHF</td>
                </tr>
                <tr>
                  <td>Steuerbetrag</td>
                  <td>{{ einzelperson_steuerbetrag_vorher }} CHF</td>
                  <td>{{ einzelperson_steuerbetrag_nachher }} CHF</td>
                </tr>
                <tr>
                  <td>Ersparnis bei einem Ja</td>
                  <td></td>
                  <td>{{ einzelperson_ersparnis }} CHF</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>{{ einzelperson_ersparnis_prozent * 100 }} %</td>
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      return (
        this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_vorher
      )
    },
    einzelperson_steuerbares_einkommen_nachher() {
      return (
        this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_nachher
      )
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
