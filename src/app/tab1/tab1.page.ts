import { Component } from '@angular/core';
import { Tab1Service } from './../service/tab1/tab1.service';

import { pessoas } from './../model/pessoas.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pessoas: any[];
  aux: any;
  constructor(private geolocation: Geolocation, private nativeStorage: NativeStorage, private Platform: Platform, private service: Tab1Service) { }


  async ngOnInit() {



    // let key = "time";

    // if (this.Platform.is("hybrid")) {


    //   this.nativeStorage.setItem(key, { valor1: "Valor", Valor2: "valor2" }).then(
    //     () => console.log("Salvo com Sucesso"),
    //     error => console.log("Não foi possível salvar")

    //   );

    //   this.nativeStorage.getItem(key).then(
    //     data => console.log(data),
    //     error => console.log("error")
    //   );

    // } else {


    //   localStorage.setItem(key, "Cruzeiro");
    //   console.log(localStorage.getItem(key));
    // }



    this.geolocation.getCurrentPosition().then(
      (resp) => {
        console.log(resp);
      }).catch((error) =>
        console.log("Erro ao pegar a coordenada")
      );

    let watch = this.geolocation.watchPosition();

    watch.subscribe(
      (data) => {
        console.log(data);
      });

  }

  encontrarPessoasProximas(latitude: number, longitude: number) {

  }
}
