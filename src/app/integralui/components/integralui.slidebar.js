/*
  filename: integralui.slidebar.js
  version : 1.6.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=function(b,a){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return d(b,a)};return function(b,a){function c(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.common.service"),i3=require("@angular/common"),_c0=["*"],_c1=["control"],_c2=["block"],_c3=["arrow"];
function IntegralUISlideBar_span_6_Template(d,b){if(d&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"span",8);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);var c=b.index;return i0.\u0275\u0275nextContext().selectSlideByIndex(c)});i0.\u0275\u0275elementEnd()}if(d&2){var c=b.$implicit,e=i0.\u0275\u0275nextContext();i0.\u0275\u0275property("ngClass",e.getButtonClass(c))}}var _c4=function(d,b){return{display:d,top:b}};
function IntegralUISlideBar_div_7_Template(d,b){if(d&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div",9,10);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().prevSlide()});i0.\u0275\u0275element(2,"span");i0.\u0275\u0275elementEnd()}if(d&2){var c=i0.\u0275\u0275nextContext();i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction2(1,_c4,c.arrowDisplay,c.arrowTopPos+"px"))}}
function IntegralUISlideBar_div_8_Template(d,b){if(d&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div",11);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().nextSlide()});i0.\u0275\u0275element(1,"span");i0.\u0275\u0275elementEnd()}if(d&2){var c=i0.\u0275\u0275nextContext();i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction2(1,_c4,c.arrowDisplay,c.arrowTopPos+"px"))}}
var _c5=function(d){return{width:d}},_c6=function(d,b,a){return{"margin-left":d,width:b,height:a}},IntegralUISlide=function(){function d(b){this.elemRef=b}d.prototype.size=function(){return{width:Math.floor(this.elemRef.nativeElement.firstElementChild.offsetWidth),height:Math.floor(this.elemRef.nativeElement.firstElementChild.offsetHeight)}};d.prototype.cloneElem=function(){return this.elemRef.nativeElement.firstElementChild.cloneNode(!0)};d.\u0275fac=function(b){return new (b||d)(i0.\u0275\u0275directiveInject(i0.ElementRef))};
d.\u0275cmp=i0.\u0275\u0275defineComponent({type:d,selectors:[["iui-slide"]],ngContentSelectors:_c0,decls:2,vars:0,consts:[["data-element","slide",1,"iui-slide"]],template:function(b,a){b&1&&(i0.\u0275\u0275projectionDef(),i0.\u0275\u0275elementStart(0,"li",0),i0.\u0275\u0275projection(1),i0.\u0275\u0275elementEnd())},encapsulation:2});return d}();exports.IntegralUISlide=IntegralUISlide;
(function(){i0.\u0275setClassMetadata(IntegralUISlide,[{type:core_1.Component,args:[{selector:"iui-slide",template:'<li class="iui-slide" data-element="slide">\n    \t\t<ng-content></ng-content>\n\t\t</li>\n\t'}]}],function(){return[{type:i0.ElementRef}]},null)})();
var IntegralUISlideBar=function(d){function b(a,b,e,f){var c=d.call(this,e)||this;c.dataService=a;c.elemRef=b;c.commonService=e;c.cmpResolver=f;c.animationTimeout=null;c.animationTimer=null;c.buttons=[];c.arrowTopPos=0;c.arrowDisplay="none";c.numSlides=0;c.cloneAdded=!1;c.cloneElem=null;c.blockMargin=0;c.elemSize={width:0,height:0};c.blockSize={width:0,height:0};c.slideSize={width:0,height:0};c.currentSelection=null;c.currentSelectedIndex=-1;c.selectedSlideComponent=null;c.removeIndex=-1;c.tRef=null;
c.allowAnimation=!0;c.animationPause=2E3;c.animationSpeed=integralui_core_1.IntegralUISpeedMode.Normal;c.navigationButtons=!0;c.clear=new core_1.EventEmitter;c.slideAdding=new core_1.EventEmitter;c.slideAdded=new core_1.EventEmitter;c.slideChanged=new core_1.EventEmitter;c.slideRemoving=new core_1.EventEmitter;c.slideRemoved=new core_1.EventEmitter;return c}__extends(b,d);Object.defineProperty(b.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=
a&&(this.currentSelectedIndex=a,this.selectSlideByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedSlide",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.slides&&this.selectSlideByIndex(this.slides.indexOf(a)))},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.dataService.init([{data:this.slides}])};b.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var b=
a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);b&&(a.tRef=a.blockRef.createComponent(b));clearTimeout(c)},100)};b.prototype.ngAfterContentInit=function(){this.slideList=this.contentSlideList.toArray();this.checkClone();this.numSlides=this.slideList.length;0<this.numSlides&&(0<=this.selectedIndex?this.selectSlideByIndex(this.selectedIndex):this.selectedSlide&&this.slides&&this.selectSlideByIndex(this.slides.indexOf(this.selectedSlide)));this.updateLayout();this.changeSlide()};
b.prototype.ngOnDestroy=function(){this.tRef&&this.tRef.destroy()};b.prototype.ngAfterContentChecked=function(){this.contentSlideList&&(this.slideList=this.contentSlideList.toArray(),this.numSlides!=this.slideList.length&&(this.numSlides>this.slideList.length&&this.slides&&0<this.slides.length&&(this.removeIndex==this.slides.length&&(this.removeIndex=this.slides.length-1),0<=this.removeIndex&&this.removeIndex<this.slides.length&&(this.isIndexInRange(this.removeIndex)?this.selectSlideByIndex(this.removeIndex):
this.selectSlideByIndex(this.slideList.length-1))),this.numSlides=this.slideList.length,this.updateLayout()),0==this.numSlides&&(this.cloneElem&&(this.cloneElem.remove(),this.cloneElem=null,this.cloneAdded=!1),this.selectedSlideComponent=null,this.arrowDisplay="none"));this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=
this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};b.prototype.checkClone=function(){this.slideList&&0<this.slideList.length&&!this.cloneAdded&&(this.cloneElem=this.slideList[0].cloneElem(),this.blockElem.nativeElement.append(this.cloneElem),this.cloneAdded=!0)};b.prototype.clearSlides=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.addSlide=function(a){this.callEventAdd("add",a)};
b.prototype.insertSlideAt=function(a,c){this.callEventAdd("at",a,c)};b.prototype.insertSlideBefore=function(a,c){this.callEventAdd("ref",a,-1,c)};b.prototype.insertSlideAfter=function(a,c){this.callEventAdd("ref",a,-1,c,!0)};b.prototype.removeSlide=function(a){this.callEventRemove(a)};b.prototype.removeSlideAt=function(a){this.slides&&0<=a&&a<this.slides.length&&this.callEventRemove(this.slides[a])};b.prototype.callEventAdd=function(a,c,b,d,g){var e={cancel:!1,slide:c};this.slideAdding.emit(e);if(1!=
e.cancel){switch(a){case "at":this.dataService.insert(c,b);break;case "ref":this.dataService.insertByRef(c,d,g);break;default:this.dataService.insert(c)}this.slideAdded.emit({slide:c});this.selectedSlideComponent||this.selectSlideByIndex(0)}};b.prototype.callEventRemove=function(a){var c={cancel:!1,slide:a};this.slideRemoving.emit(c);1!=c.cancel&&(this.removeIndex=this.slides?this.slides.indexOf(a):-1,this.dataService.removeAt(a),this.slideRemoved.emit({slide:a}))};b.prototype.getButtonClass=function(a){var c=
this.getSlideCurrentIndex(this.selectedSlideComponent);return a&&a.index==c?"iui-slidebar-navigator-button-selected":""};b.prototype.getSlideCurrentIndex=function(a){this.slideList=this.contentSlideList.toArray();return a&&this.slideList?this.slideList.indexOf(a):-1};b.prototype.getSlideDataIndex=function(a){return a&&(a=this.getSlideCurrentIndex(a),this.slides&&0<=a&&a<this.slides.length)?a:-1};b.prototype.getSlideData=function(a){return this.slides&&0<=a&&a<this.slides.length?this.slides[a]:null};
b.prototype.isIndexInRange=function(a){return this.slideList?0<=a&&a<this.slideList.length:!1};b.prototype.ctrlMouseEnter=function(a){this.isEnabled&&(this.arrowDisplay="block")};b.prototype.ctrlMouseLeave=function(a){this.arrowDisplay="none"};b.prototype.prevSlide=function(){if(this.isEnabled){var a=this.getSlideCurrentIndex(this.selectedSlideComponent)-1;this.isIndexInRange(a)?this.selectSlideByIndex(a):this.selectSlideByIndex(this.slideList.length-1)}};b.prototype.nextSlide=function(){if(this.isEnabled){var a=
this.getSlideCurrentIndex(this.selectedSlideComponent)+1;this.isIndexInRange(a)?this.selectSlideByIndex(a):this.selectSlideByIndex(0)}};b.prototype.updateLayout=function(){var a=this;a.slideList=a.contentSlideList.toArray();a.buttons.length=0;if(a.slideList&&0<a.slideList.length){a.blockSize.width=0;a.checkClone();a.selectedSlideComponent||(a.selectedSlideComponent=a.slideList[0]);var c=0;a.slideList.forEach(function(b){var d=b.size();a.blockSize.width+=d.width;a.blockSize.height=d.height;b==a.slideList[0]&&
(a.blockSize.width+=d.width,a.elemSize.width=d.width);a.slideSize.width=d.width;a.slideSize.height=d.height;a.buttons.push({index:c});c++});a.blockSize.width++;a.arrowTopPos=a.arrowElem?Math.floor((a.blockSize.height-a.arrowElem.nativeElement.offsetHeight)/2):-999}};b.prototype.cancelAnimation=function(){this.animationTimer&&clearInterval(this.animationTimer);this.animationTimer=null};b.prototype.changeSlide=function(){var a=this.getSlideCurrentIndex(this.selectedSlideComponent);0<=a&&(this.blockMargin=
-(this.slideSize.width*a));this.startAnimation()};b.prototype.getSpeedFactor=function(){switch(this.animationSpeed){case integralui_core_1.IntegralUISpeedMode.VeryFast:return 25;case integralui_core_1.IntegralUISpeedMode.Fast:return 15;case integralui_core_1.IntegralUISpeedMode.Slow:return 5;case integralui_core_1.IntegralUISpeedMode.VerySlow:return 2}return 10};b.prototype.startAnimation=function(){var a=this;a.animationTimeout&&clearTimeout(a.animationTimeout);a.animationTimeout=setTimeout(function(){a.cancelAnimation();
if(0!=a.allowAnimation&&1<a.slideList.length){var c=a.getSlideCurrentIndex(a.selectedSlideComponent),b=0,d=a.getSpeedFactor();a.animationTimer=setInterval(function(){b<a.slideSize.width?(b+=d,a.blockMargin-=d):(b=0,a.cancelAnimation(),c++,a.isIndexInRange(c)?a.selectSlideByIndex(c):a.selectSlideByIndex(0))},15)}clearTimeout(a.animationTimeout)},a.animationPause)};b.prototype.stopAnimation=function(){this.cancelAnimation();var a=this.getSlideCurrentIndex(this.selectedSlideComponent);this.blockMargin=
-(this.slideSize.width*a)};b.prototype.selectSlide=function(a){a&&(this.selectedSlideComponent=a,this.slideChanged.emit({index:this.getSlideCurrentIndex(a),slide:this.getSlideData(this.getSlideDataIndex(a))}),this.changeSlide())};b.prototype.selectSlideByIndex=function(a){this.isIndexInRange(a)&&this.selectSlide(this.slideList[a])};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");
return a};b.\u0275fac=function(a){return new (a||b)(i0.\u0275\u0275directiveInject(i1.IntegralUIDataService),i0.\u0275\u0275directiveInject(i0.ElementRef),i0.\u0275\u0275directiveInject(i2.IntegralUICommonService),i0.\u0275\u0275directiveInject(i0.ComponentFactoryResolver))};b.\u0275cmp=i0.\u0275\u0275defineComponent({type:b,selectors:[["iui-slidebar"]],contentQueries:function(a,c,b){a&1&&i0.\u0275\u0275contentQuery(b,IntegralUISlide,!0);if(a&2){var d;i0.\u0275\u0275queryRefresh(d=i0.\u0275\u0275loadQuery())&&
(c.contentSlideList=d)}},viewQuery:function(a,c){a&1&&(i0.\u0275\u0275viewQuery(_c1,!0,core_1.ViewContainerRef),i0.\u0275\u0275viewQuery(_c2,!0,core_1.ViewContainerRef),i0.\u0275\u0275staticViewQuery(_c2,!0,core_1.ElementRef),i0.\u0275\u0275viewQuery(_c3,!0,core_1.ElementRef));if(a&2){var b;i0.\u0275\u0275queryRefresh(b=i0.\u0275\u0275loadQuery())&&(c.controlRef=b.first);i0.\u0275\u0275queryRefresh(b=i0.\u0275\u0275loadQuery())&&(c.blockRef=b.first);i0.\u0275\u0275queryRefresh(b=i0.\u0275\u0275loadQuery())&&
(c.blockElem=b.first);i0.\u0275\u0275queryRefresh(b=i0.\u0275\u0275loadQuery())&&(c.arrowElem=b.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",allowAnimation:"allowAnimation",animationPause:"animationPause",animationSpeed:"animationSpeed",navigationButtons:"navigationButtons",slides:"slides",selectedIndex:"selectedIndex",selectedSlide:"selectedSlide"},outputs:{clear:"clear",slideAdding:"slideAdding",slideAdded:"slideAdded",slideChanged:"slideChanged",
slideRemoving:"slideRemoving",slideRemoved:"slideRemoved"},features:[i0.\u0275\u0275ProvidersFeature([integralui_data_service_1.IntegralUIDataService]),i0.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:_c0,decls:9,vars:12,consts:[["data-element","slidebar",1,"iui-slidebar",3,"ngStyle","mouseenter","mouseleave"],["control",""],[1,"iui-slidebar-container",3,"ngStyle"],["block",""],[1,"iui-slidebar-navigator"],["class","iui-slidebar-navigator-button",3,"ngClass","click",4,"ngFor","ngForOf"],
["class","iui-slidebar-arrow iui-slidebar-arrow-left",3,"ngStyle","click",4,"ngIf"],["class","iui-slidebar-arrow iui-slidebar-arrow-right",3,"ngStyle","click",4,"ngIf"],[1,"iui-slidebar-navigator-button",3,"ngClass","click"],[1,"iui-slidebar-arrow","iui-slidebar-arrow-left",3,"ngStyle","click"],["arrow",""],[1,"iui-slidebar-arrow","iui-slidebar-arrow-right",3,"ngStyle","click"]],template:function(a,b){a&1&&(i0.\u0275\u0275projectionDef(),i0.\u0275\u0275elementStart(0,"div",0,1),i0.\u0275\u0275listener("mouseenter",
function(a){return b.ctrlMouseEnter(a)})("mouseleave",function(a){return b.ctrlMouseLeave(a)}),i0.\u0275\u0275elementStart(2,"ul",2,3),i0.\u0275\u0275projection(4),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementStart(5,"div",4),i0.\u0275\u0275template(6,IntegralUISlideBar_span_6_Template,1,1,"span",5),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275template(7,IntegralUISlideBar_div_7_Template,3,4,"div",6),i0.\u0275\u0275template(8,IntegralUISlideBar_div_8_Template,2,4,"div",7),i0.\u0275\u0275elementEnd());
a&2&&(i0.\u0275\u0275property("ngStyle",b.getControlStyle())("ngStyle",i0.\u0275\u0275pureFunction1(6,_c5,b.elemSize.width+"px")),i0.\u0275\u0275advance(2),i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction3(8,_c6,b.blockMargin+"px",b.blockSize.width+"px",b.blockSize.height+"px")),i0.\u0275\u0275advance(4),i0.\u0275\u0275property("ngForOf",b.buttons),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngIf",b.navigationButtons),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngIf",b.navigationButtons))},
directives:[i3.NgStyle,i3.NgForOf,i3.NgIf,i3.NgClass],encapsulation:2});return b}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUISlideBar=IntegralUISlideBar;
(function(){i0.\u0275setClassMetadata(IntegralUISlideBar,[{type:core_1.Component,args:[{selector:"iui-slidebar",template:'<div class="iui-slidebar" [ngStyle]="getControlStyle()" #control data-element="slidebar" (mouseenter)="ctrlMouseEnter($event)" (mouseleave)="ctrlMouseLeave($event)" [ngStyle]="{ \'width\': elemSize.width + \'px\' }">\n        \t<ul #block class="iui-slidebar-container" [ngStyle]="{ \'margin-left\': blockMargin + \'px\', \'width\': blockSize.width + \'px\', \'height\': blockSize.height + \'px\' }">\n        \t\t<ng-content></ng-content>\n        \t</ul>\n        \t<div class="iui-slidebar-navigator">\n        \t\t<span class="iui-slidebar-navigator-button" *ngFor="let button of buttons; let i = index" [ngClass]="getButtonClass(button)" (click)="selectSlideByIndex(i)"></span>\n        \t</div>\n        \t<div *ngIf="navigationButtons" class="iui-slidebar-arrow iui-slidebar-arrow-left" [ngStyle]="{ \'display\': arrowDisplay, \'top\': arrowTopPos + \'px\' }" (click)="prevSlide()" #arrow><span></span></div>\n        \t<div *ngIf="navigationButtons" class="iui-slidebar-arrow iui-slidebar-arrow-right" [ngStyle]="{ \'display\': arrowDisplay, \'top\': arrowTopPos + \'px\' }" (click)="nextSlide()"><span></span></div>\n\t\t</div>\n\t',inputs:"controlStyle data enabled name size state".split(" "),
providers:[integralui_data_service_1.IntegralUIDataService]}]}],function(){return[{type:i1.IntegralUIDataService},{type:i0.ElementRef},{type:i2.IntegralUICommonService},{type:i0.ComponentFactoryResolver}]},{controlRef:[{type:core_1.ViewChild,args:["control",{read:core_1.ViewContainerRef,"static":!1}]}],blockRef:[{type:core_1.ViewChild,args:["block",{read:core_1.ViewContainerRef,"static":!1}]}],contentSlideList:[{type:core_1.ContentChildren,args:[IntegralUISlide,{descendants:!0}]}],blockElem:[{type:core_1.ViewChild,
args:["block",{read:core_1.ElementRef,"static":!0}]}],arrowElem:[{type:core_1.ViewChild,args:["arrow",{read:core_1.ElementRef,"static":!1}]}],allowAnimation:[{type:core_1.Input}],animationPause:[{type:core_1.Input}],animationSpeed:[{type:core_1.Input}],navigationButtons:[{type:core_1.Input}],slides:[{type:core_1.Input}],selectedIndex:[{type:core_1.Input}],selectedSlide:[{type:core_1.Input}],clear:[{type:core_1.Output}],slideAdding:[{type:core_1.Output}],slideAdded:[{type:core_1.Output}],slideChanged:[{type:core_1.Output}],
slideRemoving:[{type:core_1.Output}],slideRemoved:[{type:core_1.Output}]})})();