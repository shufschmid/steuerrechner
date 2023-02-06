<template>
  <v-tab-item :value="tabItemValue" class="pa-3">
    <v-row>
      <v-col cols="3" class="mb-0 pb-0">
        <v-text-field v-model="familie_bruttolohn" label="Bruttlohn">
        </v-text-field>
      </v-col
      >
      <v-col cols="9" class="mb-0 pb-0">
        <v-slider
          v-model="familie_bruttolohn"
          max="1000000"
          min="0"
          class="mt-8"
        >
          <template v-slot:thumb-label="props">
            <small style="color: black;font-size: 8px">
              {{ props.value }}
            </small>
          </template>
        </v-slider
        >
      </v-col>
      <v-col cols="3" class="my-0 py-0">
        <v-text-field v-model="familie_kinder" label="Kinder">
        </v-text-field>
      </v-col>
      <v-col cols="9" class="my-0 py-0">
        <v-slider
          v-model="familie_kinder"
          max="5"
          min="0"
          class="mt-8"
        >
          <template v-slot:thumb-label="props">
            <small style="color: black;font-size: 8px">
              {{ props.value }}
            </small>
          </template>
        </v-slider
        >
      </v-col>
      <v-col cols="3" class="my-0 py-0">
        <v-text-field
          v-model="familie_kinderdrittbetreuungskosten"
          label="Betreuung"
        >
        </v-text-field>
      </v-col>
      <v-col cols="9" class="my-0 py-0">
        <v-slider
          v-model="familie_kinderdrittbetreuungskosten"
          max="100000"
          min="0"
          class="mt-8"
        ><template v-slot:thumb-label="props">
            <small style="color: black;font-size: 8px">
              {{ props.value }}
            </small>
          </template>
        </v-slider>
      </v-col>
      <v-col cols="3" class="my-0 py-0">
        <v-text-field v-model="familie_saeule3a" label="Säule 3a">
        </v-text-field>
      </v-col>
      <v-col cols="9" class="my-0 py-0">
        <v-slider
          v-model="familie_saeule3a"
          max="13766"
          min="0"
          class="mt-8"
        ><template v-slot:thumb-label="props">
            <small style="color: black;font-size: 8px">
              {{ props.value }}
            </small>
          </template>
        </v-slider>
      </v-col
      >
    </v-row>
    <br>
    <v-simple-table dense>
      <thead>
      <tr>
        <th class="text-left">Abzüge</th>
        <th class="text-right">bisher</th>

        <th class="text-right">neues Gesetz</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Sozialabzug</td>
        <td class="text-right">
          {{ Number(familie_sozialabzug_vorher).toFixed(0) }}
        </td>
        <td class="text-right">
          {{ Number(familie_sozialabzug_nachher).toFixed(0) }}
        </td>
      </tr>

      <tr>
        <td>Lohnabzüge (10%)</td>
        <td class="text-right">
          {{ familie_lohnabzuege.toFixed(0) }}
        </td>
        <td class="text-right">
          {{ familie_lohnabzuege.toFixed(0) }}
        </td>
      </tr>

      <tr>
        <td>Berufskosten</td>
        <td class="text-right">
          {{ familie_berufskosten_vorher.toFixed(0) }}
        </td>
        <td class="text-right">
          {{ Number(familie_berufskosten_nachher).toFixed(0) }}
        </td>
      </tr>
      <tr>
        <td>Versicherung</td>
        <td class="text-right">
          {{ familie_versicherungsabzug_vorher.toFixed(0) }}
        </td>
        <td class="text-right">
          {{ familie_versicherungsabzug_nachher.toFixed(0) }}
        </td>
      </tr>
      <tr>
        <td>Säule 3a</td>
        <td class="text-right">
          {{ familie_saeule3a }}
        </td>
        <td class="text-right">
          {{ familie_saeule3a }}
        </td>
      </tr>
      <tr>
        <td>Kinderabzug</td>
        <td class="text-right">
          {{ familie_kinderabzug_vorher }}
        </td>
        <td class="text-right">
          {{ familie_kinderabzug_nachher }}
        </td>
      </tr>
      <tr>
        <td>Betreuungskosten</td>
        <td class="text-right">
          {{ familie_kinderdrittbetreuungskostenabzug_vorher }}
        </td>
        <td class="text-right">
          {{ familie_kinderdrittbetreuungskostenabzug_nachher }}
        </td>
      </tr>
      <tr>
        <td>Total Abzüge</td>
        <td class="text-right">
          {{ Number(familie_abzuege_total_vorher).toFixed(0) }}
        </td>
        <td class="text-right">
          {{ Number(familie_abzuege_total_nachher).toFixed(0) }}
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Steuerbares Einkommen</td>
        <td class="text-right">
          {{ familie_steuerbares_einkommen_vorher.toFixed(0) }}
        </td>
        <td class="text-right">
          {{ familie_steuerbares_einkommen_nachher.toFixed(0) }}
        </td>
      </tr>
      <tr>
        <td>Steuerbetrag</td>
        <td class="text-right">
          {{ Number(familie_steuerbetrag_vorher).toFixed(0) }}
        </td>
        <td class="text-right">
          {{ Number(familie_steuerbetrag_nachher).toFixed(0) }}
        </td>
      </tr>
      </tbody>
      <br>
      <br>
    </v-simple-table>
    <div class="result-wrapper desktop">
      <v-simple-table>
        <tbody style="font-size: 18px">
        <tr class="primary" style="color: black">
          <td><b>Ersparnis bei einem Ja</b></td>
          <td></td>
          <td class="text-right" style="color: black">
            <b>{{ Number(familie_ersparnis).toFixed(0) }}</b>
          </td>
        </tr>
        <tr class="primary">
          <td></td>
          <td></td>
          <td class="text-right" style="color: black">
            <b>{{ Number(familie_ersparnis_prozent * 100).toFixed(0) }} %</b>
          </td>
        </tr>
        </tbody>
      </v-simple-table>
    </div>
    <v-bottom-navigation class="mobile-bottom-nav" :fixed="true" background-color="primary">
      <div class="result-wrapper">
        <v-container class="py-0">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="5" class="mx-auto px-4">
            <v-simple-table>
              <tbody style="font-size: 18px">
              <tr class="primary" style="color: black">
                <td><b>Ersparnis bei einem Ja</b></td>
                <td></td>
                <td class="text-right" style="color: black">
                  <b>{{ Number(familie_ersparnis).toFixed(0) }}</b>
                </td>
              </tr>
              <tr class="primary">
                <td></td>
                <td></td>
                <td class="text-right" style="color: black">
                  <b>{{ Number(familie_ersparnis_prozent * 100).toFixed(0) }} %</b>
                </td>
              </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
        </v-container>
      </div>
    </v-bottom-navigation>
  </v-tab-item>
</template>

<script>
export default {
  name: 'FamilieComponent',
  props: {
    tabItemValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tab: null,
      steuersatz_vorher: 0.2175,
      steuersatz_nachher: 0.21,

      familie_sozialabzug_vorher: 36300,
      familie_sozialabzug_nachher: 37100,
      familie_berufskosten_vorher: 8000,
      familie_berufskosten_nachher: 8000,
      familie_versicherungsabzug_vorher: 5600,
      familie_versicherungsabzug_nachher: 8000,

      familie_saeule3a: 13766,
      familie_bruttolohn: 130000,
      familie_kinder: 2,
      familie_kinderdrittbetreuungskosten: 30000,
    }
  },
  computed: {
    familie_kinderabzug_vorher() {
      return this.familie_kinder * 7900
    },
    familie_kinderabzug_nachher() {
      return this.familie_kinder * 8600
    },
    familie_kinderdrittbetreuungskostenabzug_vorher() {
      if (
        this.familie_kinderdrittbetreuungskosten >
        this.familie_kinder * 10100
      ) {
        return this.familie_kinder * 10100
      } else {
        return this.familie_kinderdrittbetreuungskosten
      }
    },
    familie_kinderdrittbetreuungskostenabzug_nachher() {
      if (
        this.familie_kinderdrittbetreuungskosten >
        this.familie_kinder * 25000
      ) {
        return this.familie_kinder * 25000
      } else {
        return this.familie_kinderdrittbetreuungskosten
      }
    },
    familie_abzuege_total_vorher() {
      return (
        this.familie_sozialabzug_vorher +
        this.familie_berufskosten_vorher +
        this.familie_versicherungsabzug_vorher +
        this.familie_saeule3a +
        this.familie_lohnabzuege +
        this.familie_kinderabzug_vorher +
        this.familie_kinderdrittbetreuungskostenabzug_vorher
      )
    },

    familie_abzuege_total_nachher() {
      return (
        this.familie_sozialabzug_nachher +
        this.familie_berufskosten_nachher +
        this.familie_versicherungsabzug_nachher +
        this.familie_saeule3a +
        this.familie_lohnabzuege +
        this.familie_kinderabzug_nachher +
        this.familie_kinderdrittbetreuungskostenabzug_nachher
      )
    },
    familie_lohnabzuege() {
      return this.familie_bruttolohn * 0.1
    },
    familie_steuerbares_einkommen_vorher() {
      if (this.familie_bruttolohn - this.familie_abzuege_total_vorher > 0) {
        return this.familie_bruttolohn - this.familie_abzuege_total_vorher
      } else {
        return 0
      }
    },
    familie_steuerbares_einkommen_nachher() {
      if (this.familie_bruttolohn - this.familie_abzuege_total_nachher > 0) {
        return this.familie_bruttolohn - this.familie_abzuege_total_nachher
      } else {
        return 0
      }
    },
    familie_steuerbetrag_vorher() {
      if (this.familie_steuerbares_einkommen_vorher > 600000) {
        return (
          this.familie_steuerbares_einkommen_vorher * this.steuersatz_vorher +
          (this.familie_steuerbares_einkommen_vorher - 403100) * 0.0625 +
          (this.familie_steuerbares_einkommen_vorher - 600000) * 0.01
        )
      } else if (this.familie_steuerbares_einkommen_vorher > 403100) {
        return (
          this.familie_steuerbares_einkommen_vorher * this.steuersatz_vorher +
          (this.familie_steuerbares_einkommen_vorher - 403100) * 0.0625
        )
      } else {
        return (
          this.familie_steuerbares_einkommen_vorher * this.steuersatz_vorher
        )
      }
    },
    familie_steuerbetrag_nachher() {
      if (this.familie_steuerbares_einkommen_nachher > 600000) {
        return (
          this.familie_steuerbares_einkommen_nachher * this.steuersatz_nachher +
          (this.familie_steuerbares_einkommen_nachher - 403100) * 0.0625 +
          (this.familie_steuerbares_einkommen_nachher - 600000) * 0.01
        )
      } else if (this.familie_steuerbares_einkommen_nachher > 403100) {
        return (
          this.familie_steuerbares_einkommen_nachher * this.steuersatz_nachher +
          (this.familie_steuerbares_einkommen_nachher - 403100) * 0.0625
        )
      } else {
        return (
          this.familie_steuerbares_einkommen_nachher * this.steuersatz_nachher
        )
      }
    },
    familie_ersparnis() {
      return (
        this.familie_steuerbetrag_vorher - this.familie_steuerbetrag_nachher
      )
    },
    familie_ersparnis_prozent() {
      if (this.familie_steuerbetrag_vorher === 0) {
        return ''
      } else {
        return this.familie_ersparnis / this.familie_steuerbetrag_vorher
      }
    },
  },
}
</script>
