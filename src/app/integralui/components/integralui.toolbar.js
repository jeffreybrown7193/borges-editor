/*
  filename: integralui.toolbar.js
  version : 1.1.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=function(b,a){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return d(b,a)};return function(b,a){function c(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_toolitem_1=require("./integralui.toolitem"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.common.service"),i3=require("./integralui.core"),i4=require("@angular/common"),_c0=["*"],IntegralUIToolBar=
function(d){function b(a,b,e,f){var c=d.call(this,e)||this;c.dataService=a;c.elemRef=b;c.commonService=e;c.baseService=f;c.dataItems=[];c.itemList=[];c.options={allowFocus:!1,dataFields:null};c.prevItemCount=0;c.updateOptions();return c}__extends(b,d);Object.defineProperty(b.prototype,"items",{get:function(){return this.dataItems},set:function(a){this.dataItems=a;this.updateData()},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.updateData();
this.generalClassName="iui-toolbar";this.initStyle()};b.prototype.updateData=function(){this.dataService.init([{data:this.items}])};b.prototype.ngAfterContentInit=function(){this.updateLayout()};b.prototype.ngAfterContentChecked=function(){this.contentList&&(this.updateItemList(),this.itemList.length!=this.prevItemCount&&(this.prevItemCount=this.itemList.length,this.updateLayout()))};b.prototype.getDataFields=function(){return this.options.dataFields};b.prototype.updateOptions=function(a){a?this.options=
{allowFocus:this.commonService.isFieldAvailable(a.allowFocus,!1),dataFields:null}:(this.options={allowFocus:!1,dataFields:null},this.updateDataFields())};b.prototype.updateDataFields=function(a){this.options.dataFields=a?{allowFocus:a.allowFocus?a.allowFocus:"allowFocus",canSelect:a.canSelect?a.canSelect:"canSelect",enabled:a.enabled?a.enabled:"enabled",icon:a.icon?a.icon:"icon",id:a.id?a.id:"id",items:a.items?a.items:"items",selected:a.selected?a.selected:"selected",style:a.style?a.style:"style",
text:a.text?a.text:"text",tooltip:a.tooltip?a.tooltip:"tooltip",value:a.value?a.value:"value",visible:a.visible?a.visible:"visible"}:{allowFocus:"allowFocus",canSelect:"canSelect",enabled:"enabled",icon:"icon",id:"id",items:"items",selected:"selected",style:"style",text:"text",tooltip:"tooltip",value:"value",visible:"visible"}};b.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.updateItemList(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:
null};b.prototype.updateItemList=function(){this.contentList&&(this.itemList=this.contentList.toArray())};b.prototype.updateLayout=function(){this.updateItemList();var a={width:0,height:0};this.itemList.forEach(function(b){b=b.getClientSize();a={width:b.width,height:Math.max(b.height-2,a.height)}});this.itemList.forEach(function(b){return b.size={height:a.height}})};b.prototype.refresh=function(){this.updateControlClass()};b.\u0275fac=function(a){return new (a||b)(i0.\u0275\u0275directiveInject(i1.IntegralUIDataService),
i0.\u0275\u0275directiveInject(i0.ElementRef),i0.\u0275\u0275directiveInject(i2.IntegralUICommonService),i0.\u0275\u0275directiveInject(i3.IntegralUIBaseService))};b.\u0275cmp=i0.\u0275\u0275defineComponent({type:b,selectors:[["iui-toolbar"]],contentQueries:function(a,b,d){a&1&&i0.\u0275\u0275contentQuery(d,integralui_toolitem_1.IntegralUIToolItem,!0);if(a&2){var c;i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.contentList=c)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",
name:"name",size:"size",state:"state",appRef:"appRef",dataFields:"dataFields",items:"items"},features:[i0.\u0275\u0275ProvidersFeature([integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]),i0.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:_c0,decls:2,vars:1,consts:[[3,"ngClass"]],template:function(a,b){a&1&&(i0.\u0275\u0275projectionDef(),i0.\u0275\u0275elementStart(0,"div",0),i0.\u0275\u0275projection(1),i0.\u0275\u0275elementEnd());a&2&&i0.\u0275\u0275property("ngClass",
b.getControlClass())},directives:[i4.NgClass],encapsulation:2});return b}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIToolBar=IntegralUIToolBar;
(function(){i0.\u0275setClassMetadata(IntegralUIToolBar,[{type:core_1.Component,args:[{selector:"iui-toolbar",template:'\n        <div [ngClass]="getControlClass()">\n            <ng-content></ng-content>\n        </div>\n    ',inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}]}],function(){return[{type:i1.IntegralUIDataService},{type:i0.ElementRef},{type:i2.IntegralUICommonService},{type:i3.IntegralUIBaseService}]},
{contentList:[{type:core_1.ContentChildren,args:[integralui_toolitem_1.IntegralUIToolItem,{descendants:!0}]}],appRef:[{type:core_1.Input}],dataFields:[{type:core_1.Input}],items:[{type:core_1.Input}]})})();