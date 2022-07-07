import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  /* Language Variables */
  lang = "en";
  dtLang: any = "";

  /* Languages Array */
  Languages = ['en', 'es', 'ar', 'de', 'fr', 'pt'];

  /* Toastr Message Title Variables */
  successTitle = "Success";
  errorTitle = "Error";
  warningTitle = "Warning";

  constructor(private utilities: UtilitiesService) { }

  set DTLanguage(lang: any){
    this.dtLang = lang;
  }

  get DTLanguage(){
    return this.dtLang;
  }

  set Language(langCode: any){
    if(langCode){
      this.lang = langCode;
      // changes current language
      this.utilities.setTranslationLanguage(langCode);
      // sets toastr title to language selected.
      this.setToastrTitleText();
      // sets datatables lang
      this.DTLanguage(this.DTLanguages[langCode]);
    }
  }

  get Language(){
    return this.lang;
  }

  setToastrTitleText(){
    this.utilities.getTranslation('Success').subscribe((res: string)=>{
      this.successTitle = res;
    })
    this.utilities.getTranslation('Warning').subscribe((res: string)=>{
      this.warningTitle = res;
    })
    this.utilities.getTranslation('Error').subscribe((res: string)=>{
      this.errorTitle = res;
    })
  }

  private DTLanguages: any = {
    en: {
      processing: "Processing...",
      search: "Search:",
      lengthMenu: "Show _MENU_ entries",
      info: "Showing _START_ to _END_ of _TOTAL_ entries",
      infoEmpty: "Showing 0 to 0 of 0 entries",
      infoFiltered: "",
      infoPostFix: "",
      loadingRecords: "Loading...",
      zeroRecords: "No matching records found",
      emptyTable: "No data available in table",
      paginate: {
          first: "First",
          previous: "Previous",
          next: "Next",
          last: "Last"
      },
      aria: {
          sortAscending: "",
          sortDescending: ""
      }
    },
    es: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ entradas",
      info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
      infoEmpty: "Mostrando 0 a 0 de 0 entradas",
      infoFiltered: "",
      infoPostFix: "",
      loadingRecords: "Cargando...",
      zeroRecords: "No se encontraron registros coincidentes",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "\u00daltimo"
      },
      aria: {
          sortAscending: "",
          sortDescending: ""
      }
    },
    ar: {
      processing: "معالجة...",
      search: "بحث:",
      lengthMenu: "تبين _MENU_ إدخالات",
      info: "عرض _START_ ل _END_ من _TOTAL_ إدخالات",
      infoEmpty: "عرض &nbsp; 0 ل &nbsp; 0 من 0 إدخالات",
      infoFiltered: "",
      infoPostFix: "",
      loadingRecords: "جار التحميل...",
      zeroRecords: "لم يتم العثور على سجلات مطابقة",
      emptyTable: "لا توجد بيانات متوفرة في الجدول",
      paginate: {
          first: "أولا",
          previous: "سابق",
          next: "التالي",
          last: "الاخير"
      },
      aria: {
          sortAscending: "",
          sortDescending: ""
      }
    },
    de: {
      processing: "Bitte warten...",
      search: "Suchen:",
      lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
      info: "_START_ bis _END_ von _TOTAL_ Eintr\u00e4gen",
      infoEmpty: "0 bis 0 von 0 Eintr\u00e4gen",
      infoFiltered: "",
      infoPostFix: "",
      loadingRecords: "Wird geladen...",
      zeroRecords: "Keine Eintr\u00e4gen vorhanden.",
      emptyTable: "Keine Daten in der Tabelle vorhanden",
      paginate: {
          first: "Erste",
          previous: "Zur\u00fcck",
          next: "N\u00e4chste",
          last: "Letzte"
      },
      aria: {
          sortAscending: "",
          sortDescending: ""
      }
    },
    fr: {
      processing: "Traitement en cours...",
      search: "Rechercher:",
      lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
      info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
      infoEmpty: "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
      infoFiltered: "",
      infoPostFix: "",
      loadingRecords: "Chargement en cours...",
      zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
      emptyTable: "Aucune donnée disponible dans le tableau",
      paginate: {
          first: "Premier",
          previous: "Pr&eacute;c&eacute;dent",
          next: "Suivant",
          last: "Dernier"
      },
      aria: {
          sortAscending: "",
          sortDescending: ""
      }
    },
    pt: {
      processing: "A processar...",
      search: "Procurar:",
      lengthMenu: "Mostrar _MENU_ registos",
      info: "Mostrando de _START_ at\u00e9 _END_ de _TOTAL_ registos",
      infoEmpty: "Mostrando de 0 at\u00e9 0 de 0 registos",
      infoFiltered: "",
      infoPostFix: "",
      loadingRecords: "Carregando...",
      zeroRecords: "N\u00e3o foram encontrados resultados",
      emptyTable: "Sem dados dispon\u00edveis na tabela",
      paginate: {
          first: "Primeiro",
          previous: "Anterior",
          next: "Seguinte",
          last: "\u00daltimo"
      },
      aria: {
          sortAscending: "",
          sortDescending: ""
      }
    }
  }
}
