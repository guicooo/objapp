import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtividadesService } from './atividades.service';
import * as $ from 'jquery';
import { TweenMax, Power0} from 'gsap';

/**
 * Generated class for the AtividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class AtividadesPage {

  data: any;
  @Input()  atividades: any[];
  @Input()  color: string;
  @Input()  id: any;
  @Input()  link: any;
  @Input()  disciplina: string;
  @Input()  diaEvento: number;
  @Input()  mesEvento: string;
  @Input()  title: string;
  @Input()  casa: string;
  @Input()  mensagem: string;
  @Input()  professor: string;
  @Input()  nota: number;

  loaderContent: boolean = true;

  arrayCores: any = [
    { cor: 'red' },
    { cor: 'blue' },
    { cor: 'green' },
    { cor: 'orange' },    
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _activitiesService: AtividadesService
  ) {
  }

  ionViewDidLoad() {  }

  ngOnInit() {
    $(".seletor").css('display', 'none');
    this._activitiesService.getActivities()
      .subscribe(data => {
        // this.preLoader = false;
        this.loaderContent = false;
        this.atividades = data;
        // setTimeout(() => {
        //   var animateTime = 0;
        //   $('.row' + '.list-color').each((i, obj )=>{
        //     animateTime += 0.1; 
        //     TweenMax.fromTo($(obj), 0.3, {
        //       alpha: 0
        //   }, {
        //       alpha: 1,
        //       delay: animateTime,
        //       ease: Power0.easeInOut
        //   });
        // });
        // }, 0);

      })

  } // end onInit
  changeCollor(index){
    return this.arrayCores[index >= 4 ? index % 4 : index].cor
  }
}
