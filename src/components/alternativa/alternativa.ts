import { Component, Input } from '@angular/core';
import $ from 'jquery'
import { AppService } from '../../app/app.service';
/**
 * Generated class for the AlternativaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alternativa',
  templateUrl: 'alternativa.html'
})
export class AlternativaComponent {

  @Input() questaoAtiva;
  private _elemento = $(".m_question_alternative");
  @Input() idCorreta = '';
  
  public avancar = false;

  _ultimo;
  get ultimo(): boolean {
      return this._ultimo;
  }

  @Input('ultimo')
  set ultimo(value: boolean) {
      console.log(value)
      this._ultimo = value;      
  }


  constructor(public appService: AppService) { 
   // this.toastr.setRootViewContainerRef(vcr); 
  }

  ngOnInit() {  
      
    $('.number-title').on('click', () => {
      this.avancar = false;  
    });

    this.avancar = false;  
    
  }

  avancarClick() {
    if(!this.ultimo)  {
      $('.ativo').next().trigger('click');   
      this.avancar = false;
    }  
      
  }

  pular() {    
    if(!this.ultimo)    
      $('.ativo').next().trigger('click');   
    // else    
      // this.toastr.warning("Não é possível pular a última questão!");    
  }

  confirmar() {
    this._elemento = $(".m_question_alternative");
    if(!$('.container-alternative').find("input").is(":checked"))
    {                     
      //this.toastr.warning("Selecione alguma das alternativas para confirmar a questão!");
      return;
    }
  
    if(this._elemento.find("input:checked").attr("id") == this.idCorreta.toString()){               
      this._elemento.find("input:checked").parent('li').addClass("correct");                
     // this.toastr.success("Parabéns, alternativa correta!!! ");
      this._elemento.find("input:checked").attr('disabled','disabled');
     
      if (this.ultimo && this._elemento.find("input:checked").attr("id") == this.idCorreta.toString())
        $('#confirma').css('display', 'none');
             
      
     
      
      // Esconde  os outros e mostra o avancar se houver mais questões;
      var numero  = $(".a_nav_botton--item.active").attr("numero");
      if(!this.ultimo) 
        this.avancar = true;     
                                     
      } else {
          this._elemento = $(".m_question_alternative");
          this._elemento.find("input:checked").parent('li').addClass("incorrect"); 
          this._elemento.find("input:checked").attr('disabled','disabled');
          this._elemento.parent("label").addClass('disabled');
         // this.toastr.error("Não foi desta vez. Tente novamente! ");                              
      }                                    
  
  }

}
