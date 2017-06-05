import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PromosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  branchOffices:any = [
    {
      name: "Deli Café Constituyentes #2",
      address: "Cda. Madereros 1, Col. Lomas Altas",
      promotions: "",
      uriMap: "http://maps.google.com?q=19.395187,-99.230567",
      uriImage: "assets/img/branchoffices/Constituyentes_2.JPG"
    },{
      name: "Deli Café ITAM",
      address: "Rio Hondo 3, Col. Progreso Tizapan",
      promotions: "",
      uriMap: "http://maps.google.com?q=Río+Hondo+3,+Progreso,+01080+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/ITAM.JPG"
    },{
      name: "Deli Café Gruta",
      address: "Cda. de Gruta 19, Col. Jardines del Pedregal",
      promotions: "",
      uriMap: "http://maps.google.com?q=Ruta+19,+Jardines+del+Pedregal,+01900+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/Gruta.JPG"
    },{
      name: "Deli Café Piaget",
      address: "San Jeronimo 1118, Col. San Jeronimo Lidice",
      promotions: "",
      uriMap: "http://maps.google.com?q=Av.+San+Jerónimo+1118,+San+Jerónimo+Lídice,+10200+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/Piaget.JPG"
    },{
      name: "Deli Café Dos Vistas",
      address: "Bernardo Quintana 400, Col. La Loma Santa Fe",
      promotions: "",
      uriMap: "http://maps.google.com?q=Av+Bernardo+Quintana+400,+Santa+Fe,+Zedec+Sta+Fé,+01219+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/Dos_Vistas.JPG"
    },{
      name: "Deli Café Corp. Chedraui",
      address: "Constituyentes 1150, Col. Lomas Altas",
      promotions: "",
      uriMap: "http://maps.google.com?q=Av+Constituyentes+1150,+Lomas+Altas,+11950+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/Corp_Chedraui.JPG"
    },{
      name: "Deli Café Colegio Francés",
      address: "Colegio 330, Col. Jardines del Pedregal",
      promotions: "",
      uriMap: "http://maps.google.com?q=Colegio+330,+Jardines+del+Pedregal,+01900+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/Frances.JPG"
    },{
      name: "Deli Café Boehringer",
      address: "Maíz 49, Col. Xochimilco",
      promotions: "",
      uriMap: "http://maps.google.com?q=Maíz+49,+Santiago+Tepalcatlalpan,+16200+Ciudad+de+México,+CDMX/",
      uriImage: "assets/img/branchoffices/Boheringer.JPG"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromosPage');
  }

}
