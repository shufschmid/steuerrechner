<template>
  <v-tab-item :value="tabItemValue" class="pa-3">
    <v-row>
      <v-col cols="3" class="mb-0 pb-0">
        <v-text-field v-model="einzelperson_bruttolohn" label="Bruttlohn">
        </v-text-field>
      </v-col>
      <v-col cols="9" class="mb-0 pb-0">
        <v-slider
          v-model="einzelperson_bruttolohn"
          max="1000000"
          class="mt-8"
          min="0"
          style="margin-top: 10px"
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
        <v-text-field v-model="einzelperson_saeule3a" label="Säule 3a">
        </v-text-field>
      </v-col
      >
      <v-col cols="9" class="my-0 py-0">
        <v-slider
          v-model="einzelperson_saeule3a"
          max="6883"
          class="mt-8"
          min="0"
        >
          <template v-slot:thumb-label="props">
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
          {{ einzelperson_sozialabzug_vorher }}
        </td>
        <td class="text-right">
          {{ einzelperson_sozialabzug_nachher }}
        </td>
      </tr>

      <tr>
        <td>Lohnabzüge (10%)</td>
        <td class="text-right">
          {{ Number(einzelperson_lohnabzuege).toFixed(0) }}
        </td>
        <td class="text-right">
          {{ Number(einzelperson_lohnabzuege).toFixed(0) }}
        </td>
      </tr>

      <tr>
        <td>Berufskosten</td>
        <td class="text-right">
          {{ einzelperson_berufskosten_vorher }}
        </td>
        <td class="text-right">
          {{ einzelperson_berufskosten_nachher }}
        </td>
      </tr>
      <tr>
        <td>Versicherung</td>
        <td class="text-right">
          {{ einzelperson_versicherungsabzug_vorher }}
        </td>
        <td class="text-right">
          {{ einzelperson_versicherungsabzug_nachher }}
        </td>
      </tr>
      <tr>
        <td>Säule 3a</td>
        <td class="text-right">
          {{ einzelperson_saeule3a }}
        </td>
        <td class="text-right">
          {{ einzelperson_saeule3a }}
        </td>
      </tr>
      <tr>
        <td>Total Abzüge</td>
        <td class="text-right">
          {{ einzelperson_abzuege_total_vorher }}
        </td>
        <td class="text-right">
          {{ einzelperson_abzuege_total_nachher }}
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
          {{ einzelperson_steuerbares_einkommen_vorher }}
        </td>
        <td class="text-right">
          {{ einzelperson_steuerbares_einkommen_nachher }}
        </td>
      </tr>
      <tr>
        <td>Steuerbetrag</td>
        <td class="text-right">
          {{ Number(einzelperson_steuerbetrag_vorher).toFixed(0) }}
        </td>
        <td class="text-right">
          {{ Number(einzelperson_steuerbetrag_nachher).toFixed(0) }}
        </td>
      </tr>
      </tbody>
      <br>
      <br>
    </v-simple-table>
    <div class="result-wrapper desktop">
      <v-simple-table>
        <tbody style="font-size: 18px">
        <tr class="primary mt-3" style="color: black;">
          <td style="height: 20px"><b>Ersparnis bei einem Ja</b></td>
          <td class="text-right">
            <b>{{ Number(einzelperson_ersparnis).toFixed(0) }}</b>
          </td>
        </tr>
        <tr class="primary" style="color: black">
          <td></td>
          <td class="text-right" style="height: 20px">
            <b>{{
                isNaN(Number(einzelperson_ersparnis_prozent * 100).toFixed(0)) ? '0' : Number(einzelperson_ersparnis_prozent * 100).toFixed(0) + '  %'
              }}</b>
          </td>
        </tr>
        </tbody>
      </v-simple-table>
    </div>
    <v-bottom-navigation class="mobile-bottom-nav" :fixed="true" background-color="primary">
      <div class="result-wrapper pt-2">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="5" class="mx-auto px-md-15">
            <v-simple-table class="mx-auto">
              <tbody style="font-size: 18px">
              <tr class="primary mt-3" style="color: black;">
                <td style="height: 20px"><b>Ersparnis bei einem Ja</b></td>
                <td class="text-right">
                  <b>{{ Number(einzelperson_ersparnis).toFixed(0) }}</b>
                </td>
              </tr>
              <tr class="primary" style="color: black">
                <td></td>
                <td class="text-right" style="height: 20px">
                  <b>{{
                      isNaN(Number(einzelperson_ersparnis_prozent * 100).toFixed(0)) ? '0' : Number(einzelperson_ersparnis_prozent * 100).toFixed(0) + '  %'
                    }}</b>
                </td>
              </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
      </div>
    </v-bottom-navigation>
  </v-tab-item>
</template>

<script>
export default {
  name: 'EinzelPerson',
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
      return Number(
        this.einzelperson_sozialabzug_vorher +
        this.einzelperson_berufskosten_vorher +
        this.einzelperson_versicherungsabzug_vorher +
        this.einzelperson_saeule3a +
        this.einzelperson_lohnabzuege
      ).toFixed(0)
    },

    einzelperson_abzuege_total_nachher() {
      const result = this.einzelperson_sozialabzug_nachher +
        this.einzelperson_berufskosten_nachher +
        this.einzelperson_versicherungsabzug_nachher +
        this.einzelperson_saeule3a +
        this.einzelperson_lohnabzuege
      return Number(result).toFixed(0);
    },
    einzelperson_lohnabzuege() {
      return this.einzelperson_bruttolohn * 0.1
    },
    einzelperson_steuerbares_einkommen_vorher() {
      if (
        this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_vorher >
        0
      ) {
        return Number(
          this.einzelperson_bruttolohn - this.einzelperson_abzuege_total_vorher
        ).toFixed(0)
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
<style lang="scss">
.result-wrapper td {
  height: 20px !important;
}
</style>
