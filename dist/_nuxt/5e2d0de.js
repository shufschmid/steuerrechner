(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4],{369:function(e,t,r){"use strict";r.r(t);var n=r(424),_=r(423),o=r(427),l=r(434),h=r(433),m=r(428),c=(r(229),{name:"EinzelPerson",data:function(){return{tab:null,steuersatz_vorher:.2175,steuersatz_nachher:.21,einzelperson_sozialabzug_vorher:18100,einzelperson_sozialabzug_nachher:18500,einzelperson_berufskosten_vorher:4e3,einzelperson_berufskosten_nachher:4e3,einzelperson_versicherungsabzug_vorher:2800,einzelperson_versicherungsabzug_nachher:4e3,einzelperson_saeule3a:6883,einzelperson_bruttolohn:8e4}},computed:{einzelperson_abzuege_total_vorher:function(){return this.einzelperson_sozialabzug_vorher+this.einzelperson_berufskosten_vorher+this.einzelperson_versicherungsabzug_vorher+this.einzelperson_saeule3a+this.einzelperson_lohnabzuege},einzelperson_abzuege_total_nachher:function(){return this.einzelperson_sozialabzug_nachher+this.einzelperson_berufskosten_nachher+this.einzelperson_versicherungsabzug_nachher+this.einzelperson_saeule3a+this.einzelperson_lohnabzuege},einzelperson_lohnabzuege:function(){return.1*this.einzelperson_bruttolohn},einzelperson_steuerbares_einkommen_vorher:function(){return this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_vorher>0?this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_vorher:0},einzelperson_steuerbares_einkommen_nachher:function(){return this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_nachher>0?this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_nachher:0},einzelperson_steuerbetrag_vorher:function(){return this.einzelperson_steuerbares_einkommen_vorher>3e5?this.einzelperson_steuerbares_einkommen_vorher*this.steuersatz_vorher+.0625*(this.einzelperson_steuerbares_einkommen_vorher-201500)+.01*(this.einzelperson_steuerbares_einkommen_vorher-3e5):this.einzelperson_steuerbares_einkommen_vorher>201500?this.einzelperson_steuerbares_einkommen_vorher*this.steuersatz_vorher+.0625*(this.einzelperson_steuerbares_einkommen_vorher-201500):this.einzelperson_steuerbares_einkommen_vorher*this.steuersatz_vorher},einzelperson_steuerbetrag_nachher:function(){return this.einzelperson_steuerbares_einkommen_nachher>3e5?this.einzelperson_steuerbares_einkommen_nachher*this.steuersatz_nachher+.0625*(this.einzelperson_steuerbares_einkommen_nachher-201500)+.01*(this.einzelperson_steuerbares_einkommen_nachher-3e5):this.einzelperson_steuerbares_einkommen_nachher>201500?this.einzelperson_steuerbares_einkommen_nachher*this.steuersatz_nachher+.0625*(this.einzelperson_steuerbares_einkommen_nachher-201500):this.einzelperson_steuerbares_einkommen_nachher*this.steuersatz_nachher},einzelperson_ersparnis:function(){return this.einzelperson_steuerbetrag_vorher-this.einzelperson_steuerbetrag_nachher},einzelperson_ersparnis_prozent:function(){return this.einzelperson_ersparnis/this.einzelperson_steuerbetrag_vorher}}}),v=r(72),component=Object(v.a)(c,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{value:"einzelperson"}},[t(_.a,[t(n.a,{staticClass:"mb-0 pb-0",attrs:{cols:"3"}},[t(m.a,{attrs:{label:"Bruttlohn"},model:{value:e.einzelperson_bruttolohn,callback:function(t){e.einzelperson_bruttolohn=t},expression:"einzelperson_bruttolohn"}})],1),t(n.a,{staticClass:"mb-0 pb-0",attrs:{cols:"9"}},[t(l.a,{staticStyle:{"margin-top":"10px"},attrs:{max:"1000000",min:"0"},model:{value:e.einzelperson_bruttolohn,callback:function(t){e.einzelperson_bruttolohn=t},expression:"einzelperson_bruttolohn"}})],1),e._v(" "),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"3"}},[t(m.a,{attrs:{label:"Säule 3a"},model:{value:e.einzelperson_saeule3a,callback:function(t){e.einzelperson_saeule3a=t},expression:"einzelperson_saeule3a"}})],1),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"9"}},[t(l.a,{attrs:{max:"6883",min:"0"},model:{value:e.einzelperson_saeule3a,callback:function(t){e.einzelperson_saeule3a=t},expression:"einzelperson_saeule3a"}})],1)],1),e._v(" "),t(o.a,{attrs:{dense:""}},[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Abzüge")]),e._v(" "),t("th",{staticClass:"text-right"},[e._v("bisher")]),e._v(" "),t("th",{staticClass:"text-right"},[e._v("neues Gesetz")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Sozialabzug")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_sozialabzug_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_sozialabzug_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Lohnabzüge (10%)")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_lohnabzuege.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_lohnabzuege.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Berufskosten")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_berufskosten_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_berufskosten_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Versicherungsabzug")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_versicherungsabzug_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_versicherungsabzug_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Säule 3a")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_saeule3a.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_saeule3a.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Total Abzüge")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_abzuege_total_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_abzuege_total_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Steuerbares Einkommen")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_steuerbares_einkommen_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_steuerbares_einkommen_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Steuerbetrag")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_steuerbetrag_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_steuerbetrag_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",{staticClass:"blue"},[t("td",[e._v("Ersparnis bei einem Ja")]),e._v(" "),t("td"),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.einzelperson_ersparnis.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",{staticClass:"blue"},[t("td"),e._v(" "),t("td"),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s((100*e.einzelperson_ersparnis_prozent).toFixed(0))+" %\n        ")])])])])],1)}),[],!1,null,null,null);t.default=component.exports},370:function(e,t,r){"use strict";r.r(t);var n=r(424),_=r(423),o=r(427),l=r(434),h=r(433),m=r(428),c=(r(229),{name:"FamilieComponent",data:function(){return{tab:null,steuersatz_vorher:.2175,steuersatz_nachher:.21,familie_sozialabzug_vorher:36300,familie_sozialabzug_nachher:37100,familie_berufskosten_vorher:8e3,familie_berufskosten_nachher:8e3,familie_versicherungsabzug_vorher:5600,familie_versicherungsabzug_nachher:8e3,familie_saeule3a:13766,familie_bruttolohn:13e4,familie_kinder:2,familie_kinderdrittbetreuungskosten:3e4}},computed:{familie_kinderabzug_vorher:function(){return 7900*this.familie_kinder},familie_kinderabzug_nachher:function(){return 8600*this.familie_kinder},familie_kinderdrittbetreuungskostenabzug_vorher:function(){return this.familie_kinderdrittbetreuungskosten>10100*this.familie_kinder?10100*this.familie_kinder:this.familie_kinderdrittbetreuungskosten},familie_kinderdrittbetreuungskostenabzug_nachher:function(){return this.familie_kinderdrittbetreuungskosten>25e3*this.familie_kinder?25e3*this.familie_kinder:this.familie_kinderdrittbetreuungskosten},familie_abzuege_total_vorher:function(){return this.familie_sozialabzug_vorher+this.familie_berufskosten_vorher+this.familie_versicherungsabzug_vorher+this.familie_saeule3a+this.familie_lohnabzuege+this.familie_kinderabzug_vorher+this.familie_kinderdrittbetreuungskostenabzug_vorher},familie_abzuege_total_nachher:function(){return this.familie_sozialabzug_nachher+this.familie_berufskosten_nachher+this.familie_versicherungsabzug_nachher+this.familie_saeule3a+this.familie_lohnabzuege+this.familie_kinderabzug_nachher+this.familie_kinderdrittbetreuungskostenabzug_nachher},familie_lohnabzuege:function(){return.1*this.familie_bruttolohn},familie_steuerbares_einkommen_vorher:function(){return this.familie_bruttolohn-this.familie_abzuege_total_vorher>0?this.familie_bruttolohn-this.familie_abzuege_total_vorher:0},familie_steuerbares_einkommen_nachher:function(){return this.familie_bruttolohn-this.familie_abzuege_total_nachher>0?this.familie_bruttolohn-this.familie_abzuege_total_nachher:0},familie_steuerbetrag_vorher:function(){return this.familie_steuerbares_einkommen_vorher>6e5?this.familie_steuerbares_einkommen_vorher*this.steuersatz_vorher+.0625*(this.familie_steuerbares_einkommen_vorher-403100)+.01*(this.familie_steuerbares_einkommen_vorher-6e5):this.familie_steuerbares_einkommen_vorher>403100?this.familie_steuerbares_einkommen_vorher*this.steuersatz_vorher+.0625*(this.familie_steuerbares_einkommen_vorher-403100):this.familie_steuerbares_einkommen_vorher*this.steuersatz_vorher},familie_steuerbetrag_nachher:function(){return this.familie_steuerbares_einkommen_nachher>6e5?this.familie_steuerbares_einkommen_nachher*this.steuersatz_nachher+.0625*(this.familie_steuerbares_einkommen_nachher-403100)+.01*(this.familie_steuerbares_einkommen_nachher-6e5):this.familie_steuerbares_einkommen_nachher>403100?this.familie_steuerbares_einkommen_nachher*this.steuersatz_nachher+.0625*(this.familie_steuerbares_einkommen_nachher-403100):this.familie_steuerbares_einkommen_nachher*this.steuersatz_nachher},familie_ersparnis:function(){return this.familie_steuerbetrag_vorher-this.familie_steuerbetrag_nachher},familie_ersparnis_prozent:function(){return 0===this.familie_steuerbetrag_vorher?"":this.familie_ersparnis/this.familie_steuerbetrag_vorher}}}),v=r(72),component=Object(v.a)(c,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{value:"family"}},[t(_.a,[t(n.a,{staticClass:"mb-0 pb-0",attrs:{cols:"3"}},[t(m.a,{attrs:{label:"Bruttlohn"},model:{value:e.familie_bruttolohn,callback:function(t){e.familie_bruttolohn=t},expression:"familie_bruttolohn"}})],1),t(n.a,{staticClass:"mb-0 pb-0",attrs:{cols:"9"}},[t(l.a,{staticStyle:{"margin-top":"10px"},attrs:{max:"1000000",min:"0"},model:{value:e.familie_bruttolohn,callback:function(t){e.familie_bruttolohn=t},expression:"familie_bruttolohn"}})],1),e._v(" "),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"3"}},[t(m.a,{attrs:{label:"Kinder"},model:{value:e.familie_kinder,callback:function(t){e.familie_kinder=t},expression:"familie_kinder"}})],1),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"9"}},[t(l.a,{staticStyle:{"margin-top":"10px"},attrs:{max:"5",min:"0"},model:{value:e.familie_kinder,callback:function(t){e.familie_kinder=t},expression:"familie_kinder"}})],1),e._v(" "),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"3"}},[t(m.a,{attrs:{label:"Betreuung"},model:{value:e.familie_kinderdrittbetreuungskosten,callback:function(t){e.familie_kinderdrittbetreuungskosten=t},expression:"familie_kinderdrittbetreuungskosten"}})],1),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"9"}},[t(l.a,{staticStyle:{"margin-top":"10px"},attrs:{max:"250000",min:"0"},model:{value:e.familie_kinderdrittbetreuungskosten,callback:function(t){e.familie_kinderdrittbetreuungskosten=t},expression:"familie_kinderdrittbetreuungskosten"}})],1),e._v(" "),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"3"}},[t(m.a,{attrs:{label:"Säule 3a"},model:{value:e.familie_saeule3a,callback:function(t){e.familie_saeule3a=t},expression:"familie_saeule3a"}})],1),t(n.a,{staticClass:"my-0 py-0",attrs:{cols:"9"}},[t(l.a,{staticStyle:{"margin-top":"10px"},attrs:{max:"13766",min:"0"},model:{value:e.familie_saeule3a,callback:function(t){e.familie_saeule3a=t},expression:"familie_saeule3a"}})],1)],1),e._v(" "),t(o.a,{attrs:{dense:""}},[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Abzüge")]),e._v(" "),t("th",{staticClass:"text-right"},[e._v("bisher")]),e._v(" "),t("th",{staticClass:"text-right"},[e._v("neues Gesetz")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Sozialabzug")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_sozialabzug_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_sozialabzug_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Lohnabzüge (10%)")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_lohnabzuege.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_lohnabzuege.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Berufskosten")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_berufskosten_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_berufskosten_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Versicherungsabzug")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_versicherungsabzug_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_versicherungsabzug_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Säule 3a")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_saeule3a.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_saeule3a.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Kinderabzug")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_kinderabzug_vorher)+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_kinderabzug_nachher)+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Betreuungskostenabzug")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_kinderdrittbetreuungskostenabzug_vorher)+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_kinderdrittbetreuungskostenabzug_nachher)+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Total Abzüge")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_abzuege_total_vorher)+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_abzuege_total_nachher)+"\n        ")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Steuerbares Einkommen")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_steuerbares_einkommen_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_steuerbares_einkommen_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("Steuerbetrag")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_steuerbetrag_vorher.toFixed(0))+"\n        ")]),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_steuerbetrag_nachher.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",{staticClass:"blue"},[t("td",[e._v("Ersparnis bei einem Ja")]),e._v(" "),t("td"),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.familie_ersparnis.toFixed(0))+"\n        ")])]),e._v(" "),t("tr",{staticClass:"blue"},[t("td"),e._v(" "),t("td"),e._v(" "),t("td",{staticClass:"text-right"},[e._v("\n          "+e._s((100*e.familie_ersparnis_prozent).toFixed(0))+" %\n        ")])])])])],1)}),[],!1,null,null,null);t.default=component.exports},429:function(e,t,r){"use strict";r.r(t);var n=r(425),_=r(424),o=r(361),l=r(423),h=r(426),m=r(430),c=r(421),v=r(401),z={name:"IndexPage",data:function(){return{tab:null,steuersatz_vorher:.2175,steuersatz_nachher:.21,einzelperson_sozialabzug_vorher:18100,einzelperson_sozialabzug_nachher:18500,einzelperson_berufskosten_vorher:4e3,einzelperson_berufskosten_nachher:4e3,einzelperson_versicherungsabzug_vorher:2800,einzelperson_versicherungsabzug_nachher:4e3,einzelperson_saeule3a:6883,einzelperson_bruttolohn:8e4}},computed:{einzelperson_abzuege_total_vorher:function(){return this.einzelperson_sozialabzug_vorher+this.einzelperson_berufskosten_vorher+this.einzelperson_versicherungsabzug_vorher+this.einzelperson_saeule3a+this.einzelperson_lohnabzuege},einzelperson_abzuege_total_nachher:function(){return this.einzelperson_sozialabzug_nachher+this.einzelperson_berufskosten_nachher+this.einzelperson_versicherungsabzug_nachher+this.einzelperson_saeule3a+this.einzelperson_lohnabzuege},einzelperson_lohnabzuege:function(){return.1*this.einzelperson_bruttolohn},einzelperson_steuerbares_einkommen_vorher:function(){return this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_vorher>0?this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_vorher:0},einzelperson_steuerbares_einkommen_nachher:function(){return this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_nachher>0?this.einzelperson_bruttolohn-this.einzelperson_abzuege_total_nachher:0},einzelperson_steuerbetrag_vorher:function(){return this.einzelperson_steuerbares_einkommen_vorher>3e5?this.einzelperson_steuerbares_einkommen_vorher*this.steuersatz_vorher+.0625*(this.einzelperson_steuerbares_einkommen_vorher-201500)+.01*(this.einzelperson_steuerbares_einkommen_vorher-3e5):this.einzelperson_steuerbares_einkommen_vorher>201500?this.einzelperson_steuerbares_einkommen_vorher*this.steuersatz_vorher+.0625*(this.einzelperson_steuerbares_einkommen_vorher-201500):this.einzelperson_steuerbares_einkommen_vorher*this.steuersatz_vorher},einzelperson_steuerbetrag_nachher:function(){return this.einzelperson_steuerbares_einkommen_nachher>3e5?this.einzelperson_steuerbares_einkommen_nachher*this.steuersatz_nachher+.0625*(this.einzelperson_steuerbares_einkommen_nachher-201500)+.01*(this.einzelperson_steuerbares_einkommen_nachher-3e5):this.einzelperson_steuerbares_einkommen_nachher>201500?this.einzelperson_steuerbares_einkommen_nachher*this.steuersatz_nachher+.0625*(this.einzelperson_steuerbares_einkommen_nachher-201500):this.einzelperson_steuerbares_einkommen_nachher*this.steuersatz_nachher},einzelperson_ersparnis:function(){return this.einzelperson_steuerbetrag_vorher-this.einzelperson_steuerbetrag_nachher},einzelperson_ersparnis_prozent:function(){return this.einzelperson_ersparnis/this.einzelperson_steuerbetrag_vorher}}},f=r(72),component=Object(f.a)(z,(function(){var e=this,t=e._self._c;return t(l.a,{attrs:{justify:"center",align:"center"}},[t(_.a,{attrs:{cols:"4",sm:"4",md:"4"}},[t(n.a,[t(m.a,{staticClass:"blue",attrs:{centered:"","icons-and-text":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(v.a),e._v(" "),t(h.a,{attrs:{href:"#einzelperson"}},[e._v("Einzelperson\n          "),t(o.a,[e._v("mdi-human-female")])],1),e._v(" "),t(h.a,{attrs:{href:"#family"}},[e._v("\n          Familie\n          "),t(o.a,[e._v("mdi-human-male-female-child")])],1)],1),e._v(" "),t(c.a,{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t("EinzelPerson"),e._v(" "),t("FamilieComponent")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{EinzelPerson:r(369).default,FamilieComponent:r(370).default})}}]);