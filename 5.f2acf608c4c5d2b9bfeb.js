(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iydT:function(n,t,o){"use strict";o.r(t),o.d(t,"HomeModule",function(){return C});var e=o("ofXK"),i=o("tyNb"),c=o("Khht"),s=o("fXoL"),r=o("Dzmh"),a=o("PlFQ"),g=o("lXt9");const _=function(n){return{cardEven:n}};function d(n,t){if(1&n&&s.Kb(0,"app-card",23),2&n){const n=t.index;s.dc("cardData",t.$implicit)("ngClass",s.fc(2,_,0!=n%2))}}function p(n,t){if(1&n&&(s.Ob(0,"div",20),s.Ob(1,"div",2),s.Ob(2,"div",21),s.mc(3,d,1,4,"app-card",22),s.Nb(),s.Nb(),s.Nb()),2&n){const n=s.Xb();s.yb(3),s.dc("ngForOf",n.content.services.cards)}}function m(n,t){1&n&&s.Kb(0,"app-card",27),2&n&&s.dc("cardData",t.$implicit)}function b(n,t){if(1&n){const n=s.Pb();s.Ob(0,"button",28),s.Vb("click",function(){s.ic(n);const t=s.Xb(2);return t.show=t.content.services.cards.length}),s.nc(1," view more "),s.Nb()}}function l(n,t){if(1&n&&(s.Ob(0,"div",20),s.Ob(1,"div",2),s.Ob(2,"div",21),s.mc(3,m,1,1,"app-card",24),s.Yb(4,"slice"),s.Nb(),s.Ob(5,"div",25),s.mc(6,b,2,0,"button",26),s.Nb(),s.Nb(),s.Nb()),2&n){const n=s.Xb();s.yb(3),s.dc("ngForOf",s.ac(4,2,n.content.services.cards,0,n.show)),s.yb(3),s.dc("ngIf",3===n.show)}}function h(n,t){1&n&&s.Kb(0,"img",29),2&n&&s.dc("src",t.$implicit.path,s.kc)}const f=[{path:"",component:(()=>{class n{constructor(){this.content=c.c,this.show=3,this.technologyLogosArray=[{id:1,path:"assets/svg/dotnet-img.svg"},{id:1,path:"assets/svg/blazor-img.svg"},{id:1,path:"assets/svg/angular-img.svg"},{id:1,path:"assets/svg/vue-img.svg"},{id:1,path:"assets/svg/java-img.svg"},{id:1,path:"assets/svg/spring-img.svg"},{id:1,path:"assets/svg/html-img.svg"},{id:1,path:"assets/svg/css-img.svg"},{id:1,path:"assets/svg/javascript-img.svg"}]}ngOnInit(){this.formContent=c.a,this.formData={},this.screenWidth=window.innerWidth}onResize(){this.screenWidth=window.innerWidth}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-home"]],hostBindings:function(n,t){1&n&&s.Vb("resize",function(n){return t.onResize(n)},!1,s.hc)},decls:30,vars:8,consts:[[1,"hero__section"],[1,"about-us__section"],[1,"container"],[1,"row","align-items-center"],[1,"col-sm-12","col-md-6"],["src","assets/svg/about-us-img.svg","alt","about-us image",1,"img-fluid"],[3,"innerHTML"],["class","services__section",4,"ngIf"],[1,"technologies__section"],[1,"row","text-center"],[1,"col-12"],[1,"technologies__section__title",3,"innerHTML"],["alt","technology logos",3,"src",4,"ngFor","ngForOf"],[1,"portfolio__section"],[1,"portfolio__section__blue-rectangle-top"],["src","assets/svg/portfolio-img.svg","alt","portfolio image",1,"img-fluid"],[1,"portfolio__section__blue-rectangle-bottom"],[1,"form__section"],[1,"container","align-items-center"],[1,"multi-step-form",3,"formContent"],[1,"services__section"],[1,"row","services__section__cards"],[3,"cardData","ngClass",4,"ngFor","ngForOf"],[3,"cardData","ngClass"],[3,"cardData",4,"ngFor","ngForOf"],[1,"row"],["class","services__section__cards__more-button",3,"click",4,"ngIf"],[3,"cardData"],[1,"services__section__cards__more-button",3,"click"],["alt","technology logos",3,"src"]],template:function(n,t){1&n&&(s.Ob(0,"div",0),s.Kb(1,"app-hero-banner"),s.Nb(),s.Ob(2,"div",1),s.Ob(3,"div",2),s.Ob(4,"div",3),s.Ob(5,"div",4),s.Kb(6,"img",5),s.Nb(),s.Ob(7,"div",4),s.Kb(8,"p",6),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.mc(9,p,4,1,"div",7),s.mc(10,l,7,6,"div",7),s.Ob(11,"div",8),s.Ob(12,"div",2),s.Ob(13,"div",9),s.Ob(14,"div",10),s.Kb(15,"h4",11),s.mc(16,h,1,1,"img",12),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(17,"div",13),s.Kb(18,"div",14),s.Ob(19,"div",2),s.Ob(20,"div",3),s.Ob(21,"div",4),s.Kb(22,"img",15),s.Nb(),s.Ob(23,"div",4),s.Kb(24,"h4",6),s.Kb(25,"p",6),s.Nb(),s.Nb(),s.Nb(),s.Kb(26,"div",16),s.Nb(),s.Ob(27,"div",17),s.Ob(28,"div",18),s.Kb(29,"app-form-journey",19),s.Nb(),s.Nb()),2&n&&(s.yb(8),s.dc("innerHTML",t.content.aboutUs.text,s.jc),s.yb(1),s.dc("ngIf",t.screenWidth>=768),s.yb(1),s.dc("ngIf",t.screenWidth<768),s.yb(5),s.dc("innerHTML",t.content.technologies.title,s.jc),s.yb(1),s.dc("ngForOf",t.technologyLogosArray),s.yb(8),s.dc("innerHTML",t.content.portfolio.title,s.jc),s.yb(1),s.dc("innerHTML",t.content.portfolio.text,s.jc),s.yb(4),s.dc("formContent",t.formContent))},directives:[r.a,e.j,e.i,a.a,g.a,e.h],pipes:[e.q],styles:['@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-weight:400;font-family:Poppins,Sans-Serif;line-height:1.5;color:#333;background:url(background-img.50505726f01b54627e2f.png)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:16px}p[_ngcontent-%COMP%]{margin-bottom:1em}[_nghost-%COMP%]{width:100%}.about-us__section[_ngcontent-%COMP%]{background-color:#e5e5e5;padding:30px 0 50px;margin-top:-50px}@media screen and (min-width:768px){.about-us__section[_ngcontent-%COMP%]{padding:80px 0;margin-top:-10px}}@media screen and (min-width:1024px){.about-us__section[_ngcontent-%COMP%]{padding:195px 0}}.about-us__section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex-direction:column-reverse}@media screen and (min-width:768px){.about-us__section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex-direction:row}}.about-us__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:30px;text-align:center}@media screen and (min-width:768px){.about-us__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:unset;font-size:12px;margin-bottom:0}}@media screen and (min-width:1024px){.about-us__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}.services__section[_ngcontent-%COMP%]{margin-top:100px}.services__section[_ngcontent-%COMP%]   .services__section__cards[_ngcontent-%COMP%]{justify-content:center}@media screen and (min-width:768px){.services__section[_ngcontent-%COMP%]   .services__section__cards[_ngcontent-%COMP%]{justify-content:unset}}@media screen and (min-width:768px){.services__section[_ngcontent-%COMP%]   .services__section__cards[_ngcontent-%COMP%]   .cardEven[_ngcontent-%COMP%]{margin-left:auto}}.services__section[_ngcontent-%COMP%]   .services__section__cards__more-button[_ngcontent-%COMP%]{border:none;border-radius:4px;padding:7px;color:#fff;font-size:12px;width:90px;margin:0 auto 30px;background-color:#0094ff}.technologies__section[_ngcontent-%COMP%]{background-color:#e5e5e5;padding:70px 0 80px}@media screen and (min-width:768px){.technologies__section[_ngcontent-%COMP%]{padding:70px 0}}.technologies__section[_ngcontent-%COMP%]   .technologies__section__title[_ngcontent-%COMP%]{color:#5c5c5c;font-weight:700;margin-bottom:100px}@media screen and (min-width:768px){.technologies__section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-of-type{margin-left:0!important}}.technologies__section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px;width:60px;margin:0 36px 80px}@media screen and (min-width:768px){.technologies__section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:auto;margin:0 20px 80px}}@media screen and (min-width:1024px){.technologies__section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:105px;margin:0 35px 80px}}.portfolio__section[_ngcontent-%COMP%]{position:relative;margin:40px 0;padding:20px 0 60px}@media screen and (min-width:768px){.portfolio__section[_ngcontent-%COMP%]{padding:80px 0;margin:80px 0}}@media screen and (min-width:1024px){.portfolio__section[_ngcontent-%COMP%]{margin:80px 0 120px;padding:150px 0 200px}}.portfolio__section[_ngcontent-%COMP%]   .portfolio__section__blue-rectangle-top[_ngcontent-%COMP%]{position:absolute;width:32%;height:48%;top:0;left:0;background-color:#0094ff}@media screen and (min-width:768px){.portfolio__section[_ngcontent-%COMP%]   .portfolio__section__blue-rectangle-top[_ngcontent-%COMP%]{width:20%;height:100%}}.portfolio__section[_ngcontent-%COMP%]   .portfolio__section__blue-rectangle-bottom[_ngcontent-%COMP%]{position:absolute;width:36%;height:85px;bottom:-35px;right:0;background-color:#0094ff;box-shadow:3px 5px 1px rgba(0,0,0,.25)}@media screen and (min-width:768px){.portfolio__section[_ngcontent-%COMP%]   .portfolio__section__blue-rectangle-bottom[_ngcontent-%COMP%]{width:27%;height:34%;bottom:-152px;box-shadow:6px 9px 2px rgba(0,0,0,.25)}}@media screen and (min-width:1024px){.portfolio__section[_ngcontent-%COMP%]   .portfolio__section__blue-rectangle-bottom[_ngcontent-%COMP%]{bottom:-265px;width:27%;height:34%;box-shadow:14px 22px 4px rgba(0,0,0,.25)}}.portfolio__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}@media screen and (min-width:768px){.portfolio__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font-size:12px}}@media screen and (min-width:1024px){.portfolio__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}.portfolio__section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center}@media screen and (min-width:768px){.portfolio__section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:left}}.portfolio__section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:285px}@media screen and (min-width:768px){.portfolio__section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}}.form__section[_ngcontent-%COMP%]{background-color:#e5e5e5;padding:30px 0 200px;margin-top:-50px;min-height:548px;height:auto}@media screen and (min-width:768px){.form__section[_ngcontent-%COMP%]{min-height:635px;padding:100px 0 215px;margin-top:-10px}}@media screen and (min-width:1024px){.form__section[_ngcontent-%COMP%]{min-height:880px;padding:195px 0 350px}}']}),n})()}];let x=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[i.b.forChild(f)],i.b]}),n})();var O=o("j1ZV"),u=o("tk/3");let C=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[e.b,x,u.b,O.a]]}),n})()}}]);