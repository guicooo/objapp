import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Select, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AppService } from '../../app/app.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';

/**
 * Generated class for the ConteudoOnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-conteudo-online',
  templateUrl: 'conteudo-online.html',
})
export class ConteudoOnlinePage {
	url: string;
	currentPage: string;
	systemName: string;
	moduleName: string;
	safeUrl: any;
	loaderContent: boolean = false;
	el: HTMLFrameElement;
    constructor(
		private appService: AppService,
		private sanitizer: DomSanitizer,	
		public navCtrl: NavController,
		public http: Http,	
		public modalCtrl: ModalController,
		public navParams: NavParams
	) {
		this.loaderContent = true;
		this.currentPage = `http://conteudoonline.objetivo.br/`;
		this.url = this.currentPage;

		this.getTrustedUrl(this.url);
	}

	doFilter(){
		
	}

	ionViewDidLoad() {
		$('#iframeSystem').on('load', (e) => {
			this.loaderContent = false;
		});
	}

	// bloqueia o acesso à view
	// ionViewCanEnter() {
	// 	return this.authService.userIsLogged();
	// }

	getTrustedUrl(url: any) {
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
	
	resizeIframe(obj){
		obj.style.height = 0;
		obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
	 }

	
}
