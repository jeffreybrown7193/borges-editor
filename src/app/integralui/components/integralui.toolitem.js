/*
  filename: integralui.toolitem.js
  version : 1.1.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var c=function(d,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return c(d,a)};return function(d,a){function b(){this.constructor=d}c(d,a);d.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_datepicker_1=require("./integralui.datepicker"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("./integralui.core"),i3=require("@angular/common"),i4=require("./integralui.checkbox"),i5=require("@angular/forms"),i6=require("./integralui.listscroller"),i7=require("./integralui.progressbar"),
i8=require("./integralui.rating"),i9=require("./integralui.slider"),_c0=["content"];function IntegralUIToolItem_div_1_div_2_span_1_Template(c,d){c&1&&i0.\u0275\u0275element(0,"span",19);if(c&2){var a=i0.\u0275\u0275nextContext(3);i0.\u0275\u0275property("ngClass",a.data.icon)}}
function IntegralUIToolItem_div_1_div_2_span_2_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"span",20),i0.\u0275\u0275text(1),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(3);i0.\u0275\u0275advance(1);i0.\u0275\u0275textInterpolate(a.data.text)}}var _c1=function(c){return{"iui-toolitem-button-leave":c}};
function IntegralUIToolItem_div_1_div_2_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",16),i0.\u0275\u0275template(1,IntegralUIToolItem_div_1_div_2_span_1_Template,1,1,"span",17),i0.\u0275\u0275template(2,IntegralUIToolItem_div_1_div_2_span_2_Template,2,1,"span",18),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275property("ngClass",i0.\u0275\u0275pureFunction1(3,_c1,a.isLeaving));i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngIf",a.data.icon);
i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngIf",a.data.text)}}
function IntegralUIToolItem_div_1_div_3_Template(c,d){if(c&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div",21);i0.\u0275\u0275elementStart(1,"iui-checkbox",22);i0.\u0275\u0275listener("ngModelChange",function(b){i0.\u0275\u0275restoreView(a);var c=i0.\u0275\u0275nextContext(2);return c.data[c.getDataField("value")]=b})("checkedChanged",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).itemCheckedChanged(b)})("checkStateChanged",function(b){i0.\u0275\u0275restoreView(a);
return i0.\u0275\u0275nextContext(2).itemCheckStateChanged(b)});i0.\u0275\u0275text(2);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(c&2){var b=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("allowAnimation",!0)("controlStyle",b.getToolItemStyle())("threeState",b.currentSettings&&void 0!=b.currentSettings.threeState?b.currentSettings.threeState:!1)("ngModel",b.data[b.getDataField("value")]);i0.\u0275\u0275advance(1);i0.\u0275\u0275textInterpolate(b.data.text)}}
var _c2=function(c){return{"iui-toolitem-datepicker-button-hover":c}};
function IntegralUIToolItem_div_1_div_4_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",23),i0.\u0275\u0275elementStart(1,"div",24),i0.\u0275\u0275element(2,"span"),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementStart(3,"span",20),i0.\u0275\u0275text(4),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngClass",i0.\u0275\u0275pureFunction1(2,_c2,a.isHovered()));i0.\u0275\u0275advance(3);
i0.\u0275\u0275textInterpolate(a.getValue())}}var _c3=function(c){return{"iui-toolitem-dropdown-button-hover":c}},_c4=function(c,d){return{height:c,opacity:d}};
function IntegralUIToolItem_div_1_div_5_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",25),i0.\u0275\u0275elementStart(1,"div",26),i0.\u0275\u0275element(2,"span"),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementStart(3,"span",27),i0.\u0275\u0275text(4),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngClass",i0.\u0275\u0275pureFunction1(3,_c3,a.isHovered()));i0.\u0275\u0275advance(2);
i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction2(5,_c4,a.toolItemHeight,a.toolItemStyleOpacity));i0.\u0275\u0275advance(1);i0.\u0275\u0275textInterpolate(a.value)}}function IntegralUIToolItem_div_1_div_6_img_1_Template(c,d){c&1&&i0.\u0275\u0275element(0,"img",30);c&2&&i0.\u0275\u0275property("src",d.$implicit.src,i0.\u0275\u0275sanitizeUrl)}
function IntegralUIToolItem_div_1_div_6_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",28),i0.\u0275\u0275template(1,IntegralUIToolItem_div_1_div_6_img_1_Template,1,1,"img",29),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngForOf",a.data[a.getDataField("value")])}}
function IntegralUIToolItem_div_1_div_7_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div"),i0.\u0275\u0275elementStart(1,"span",20),i0.\u0275\u0275text(2),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(2);i0.\u0275\u0275textInterpolate(a.data.text)}}
function IntegralUIToolItem_div_1_div_8_ng_template_2_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",32),i0.\u0275\u0275element(1,"div",19),i0.\u0275\u0275elementEnd());if(c&2){var a=d.$implicit,b=i0.\u0275\u0275nextContext(3);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngClass",b.getListScrollItemIcon(a))}}var _c5=function(){return[]},_c6=function(){return{}};
function IntegralUIToolItem_div_1_div_8_Template(c,d){if(c&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div");i0.\u0275\u0275elementStart(1,"iui-listscroller",31);i0.\u0275\u0275listener("selectionChanged",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).listScrollerItemChanged(b)});i0.\u0275\u0275template(2,IntegralUIToolItem_div_1_div_8_ng_template_2_Template,2,1,"ng-template");i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(c&
2){var b=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("controlStyle",b.getToolItemStyle())("enabled",b.enabled)("items",b.currentSettings&&b.currentSettings.items?b.currentSettings.items:i0.\u0275\u0275pureFunction0(4,_c5))("itemSize",b.currentSettings&&b.currentSettings.itemSize?b.currentSettings.itemSize:i0.\u0275\u0275pureFunction0(5,_c6))}}
function IntegralUIToolItem_div_1_input_9_Template(c,d){if(c&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"input",33);i0.\u0275\u0275listener("ngModelChange",function(b){i0.\u0275\u0275restoreView(a);var c=i0.\u0275\u0275nextContext(2);return c.data[c.getDataField("value")]=b})("change",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).numericValueChange(b.target.value)})("DOMMouseScroll",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).editorMouseWheel(b)})("mousewheel",
function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).editorMouseWheel(b)})("dragstart",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).editorPreventDragStart(b)});i0.\u0275\u0275elementEnd()}if(c&2){var b=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275property("ngModel",b.data[b.getDataField("value")])}}
function IntegralUIToolItem_div_1_div_10_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",34),i0.\u0275\u0275element(1,"iui-progressbar",35),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("allowAnimation",!0)("controlStyle",a.getToolItemStyle())("value",a.data[a.getDataField("value")])}}
function IntegralUIToolItem_div_1_div_11_Template(c,d){if(c&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div",36);i0.\u0275\u0275elementStart(1,"iui-rating",37);i0.\u0275\u0275listener("ngModelChange",function(b){i0.\u0275\u0275restoreView(a);var c=i0.\u0275\u0275nextContext(2);return c.data[c.getDataField("value")]=b})("valueChanged",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).callValueChanged()});i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(c&
2){var b=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("controlStyle",b.getToolItemStyle())("enabled",b.enabled)("ngModel",b.data[b.getDataField("value")])("division",b.currentSettings?b.currentSettings.division:1)("increment",b.currentSettings?b.currentSettings.increment:0)("max",b.currentSettings?b.currentSettings.max:5)("stepSize",b.currentSettings?b.currentSettings.stepSize:16)}}var _c7=function(c){return{"iui-toolitem-separator-vertical":c}};
function IntegralUIToolItem_div_1_div_12_Template(c,d){c&1&&i0.\u0275\u0275element(0,"div",38);if(c&2){var a=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275property("ngClass",i0.\u0275\u0275pureFunction1(1,_c7,a.currentSettings&&1==a.currentSettings.orientation))}}
function IntegralUIToolItem_div_1_div_13_Template(c,d){if(c&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div",39);i0.\u0275\u0275elementStart(1,"iui-slider",40);i0.\u0275\u0275listener("ngModelChange",function(b){i0.\u0275\u0275restoreView(a);var c=i0.\u0275\u0275nextContext(2);return c.data[c.getDataField("value")]=b})("valueChanged",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).callValueChanged()});i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(c&
2){var b=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("allowAnimation",!0)("enabled",b.enabled)("controlStyle",b.getToolItemStyle())("ngModel",b.data[b.getDataField("value")])}}
function IntegralUIToolItem_div_1_div_14_Template(c,d){if(c&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"div");i0.\u0275\u0275elementStart(1,"input",41);i0.\u0275\u0275listener("ngModelChange",function(b){i0.\u0275\u0275restoreView(a);var c=i0.\u0275\u0275nextContext(2);return c.data[c.getDataField("text")]=b})("change",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext(2).itemTextChanged(b)});i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(c&
2){var b=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngModel",b.data[b.getDataField("text")])}}function IntegralUIToolItem_div_1_div_15_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div"),i0.\u0275\u0275projection(1),i0.\u0275\u0275elementEnd())}var _c8=function(c){return{"margin-top":c,height:"100%"}};
function IntegralUIToolItem_div_1_Template(c,d){c&1&&(i0.\u0275\u0275elementStart(0,"div",2,3),i0.\u0275\u0275template(2,IntegralUIToolItem_div_1_div_2_Template,3,5,"div",4),i0.\u0275\u0275template(3,IntegralUIToolItem_div_1_div_3_Template,3,5,"div",5),i0.\u0275\u0275template(4,IntegralUIToolItem_div_1_div_4_Template,5,4,"div",6),i0.\u0275\u0275template(5,IntegralUIToolItem_div_1_div_5_Template,5,8,"div",7),i0.\u0275\u0275template(6,IntegralUIToolItem_div_1_div_6_Template,2,1,"div",8),i0.\u0275\u0275template(7,
IntegralUIToolItem_div_1_div_7_Template,3,1,"div",9),i0.\u0275\u0275template(8,IntegralUIToolItem_div_1_div_8_Template,3,6,"div",9),i0.\u0275\u0275template(9,IntegralUIToolItem_div_1_input_9_Template,1,1,"input",10),i0.\u0275\u0275template(10,IntegralUIToolItem_div_1_div_10_Template,2,3,"div",11),i0.\u0275\u0275template(11,IntegralUIToolItem_div_1_div_11_Template,2,7,"div",12),i0.\u0275\u0275template(12,IntegralUIToolItem_div_1_div_12_Template,1,3,"div",13),i0.\u0275\u0275template(13,IntegralUIToolItem_div_1_div_13_Template,
2,4,"div",14),i0.\u0275\u0275template(14,IntegralUIToolItem_div_1_div_14_Template,2,1,"div",9),i0.\u0275\u0275template(15,IntegralUIToolItem_div_1_div_15_Template,2,0,"div",15),i0.\u0275\u0275elementEnd());if(c&2){var a=i0.\u0275\u0275nextContext();i0.\u0275\u0275property("ngSwitch",a.type)("ngStyle",i0.\u0275\u0275pureFunction1(15,_c8,a.contentMargin.top+"px"));i0.\u0275\u0275advance(2);i0.\u0275\u0275property("ngSwitchCase",0);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",1);
i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",2);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",3);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",4);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",5);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",6);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",7);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",8);i0.\u0275\u0275advance(1);
i0.\u0275\u0275property("ngSwitchCase",9);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",10);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",11);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngSwitchCase",12)}}
var _c9=["*"],IntegralUIToolItem=function(c){function d(a,b,d,f){var e=c.call(this,a,b)||this;e.elemRef=a;e.commonService=b;e.baseService=d;e.cmpResolver=f;e.dataFields={};e.currentSettings={};e.contentMargin={top:0,left:0};e.isPopupDelayed=!1;e.updateTimer=null;e.calendarRef=null;e.calendar=null;e.dropListRef=null;e.dropList=null;e.parentCtrl=null;e.isLeaving=!1;e.toolItemHeight="auto";e.toolItemStyleOpacity=1;e.type=integralui_core_1.IntegralUIToolItemType.Label;e.itemClick=new core_1.EventEmitter;
e.valueChanging=new core_1.EventEmitter;e.valueChanged=new core_1.EventEmitter;return e}__extends(d,c);Object.defineProperty(d.prototype,"settings",{get:function(){return this.currentSettings},set:function(a){this.currentSettings!=a&&(this.currentSettings=a)},enumerable:!0,configurable:!0});d.prototype.ngOnInit=function(){this.dataFields=(this.parentCtrl=this.baseService.getComponent())?this.parentCtrl.getDataFields():{};this.generalClassName="iui-toolitem";this.contentClassName=this.generalClassName+
"-content";this.initStyle()};d.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){a.value=a.getValue();clearTimeout(b)},1);a.updateLayout()};d.prototype.ngOnDestroy=function(){this.removeCalendar();this.removeDropList();this.resetLayoutTimer()};d.prototype.ngAfterContentChecked=function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?
(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};d.prototype.getProgressValue=function(){if(this.data){var a=void 0!=this.data.min?this.data.min:0,b=void 0!=this.data.max?this.data.max:100,c=this.data[this.dataFields.value];if(c&&!isNaN(c)&&!isNaN(b)&&0<b)return 100*Math.min(Math.max(c,a),b)/b}return 0};d.prototype.getItemClass=function(){var a="";if(this.data){var b=
this.data.settings||{};switch(this.type){case integralui_core_1.IntegralUIToolItemType.CheckBox:switch(a="iui-toolitem-checkbox"+(b.general?" "+b.general:""),this.getValue()){case "checked":a+=b.checked?" "+b.checked:" iui-toolitem-checkbox-checked";break;case "indeterminate":a+=b.indeterminate?" "+b.indeterminate:" iui-toolitem-checkbox-indeterminate";break;default:a+=b.unchecked?" "+b.unchecked:" iui-toolitem-checkbox-unchecked"}}}return a};d.prototype.getValue=function(){var a=null;if(this.data)switch(a=
void 0!=this.data[this.dataFields.value]?this.data[this.dataFields.value]:null,this.type){case integralui_core_1.IntegralUIToolItemType.Button:a=void 0!=this.data[this.dataFields.text]?this.data[this.dataFields.text]:"";break;case integralui_core_1.IntegralUIToolItemType.CheckBox:this.data.settings&&(a="checked"==a||1==a?"checked":this.data.settings.threeState&&"indeterminate"==a?"indeterminate":"unchecked");break;case integralui_core_1.IntegralUIToolItemType.Date:var b="en-US",c={year:"numeric",
month:"numeric",day:"numeric"};if(this.data.settings)switch(b=this.data.settings.locales?this.data.settings.locales:"en-US",this.data.settings.format){case integralui_core_1.IntegralUIDateFormat.Long:c.weekday="long";break;case integralui_core_1.IntegralUIDateFormat.Custom:c=this.data.settings.formatOptions}a=a?a.toLocaleString(b,c):"";break;case integralui_core_1.IntegralUIToolItemType.DropList:this.toolItemHeight=(a=(a=this.commonService.isObject(a)?a?a.text:"":void 0!=a&&this.currentSettings?this.findItemByValue(a,
this.currentSettings.items||[]):"")&&""!=a?a:this.currentSettings.placeHolder)&&""!=a?"auto":"20px";this.toolItemStyleOpacity=!this.currentSettings||""!=a&&a!=this.currentSettings.placeHolder?1:.5;break;case integralui_core_1.IntegralUIToolItemType.Image:a=Array.isArray(a)?a:[{src:a}];break;case integralui_core_1.IntegralUIToolItemType.Numeric:a=void 0!=this.data[this.dataFields.value]?this.data[this.dataFields.value]:"";break;case integralui_core_1.IntegralUIToolItemType.Progress:a=this.getProgressValue();
break;case integralui_core_1.IntegralUIToolItemType.TextBox:a=void 0!=this.data[this.dataFields.text]?this.data[this.dataFields.text]:""}return a};d.prototype.findItemByValue=function(a,b){for(var c="",d=0;d<b.length;d++)if(void 0!=b[d].value&&b[d].value==a){c=void 0!=b[d].text&&""!=b[d].text?b[d].text:b[d].value.toString();break}return c};d.prototype.callValueChanging=function(a){a={cancel:!1,data:this.data,text:this.data[this.dataFields.text],value:void 0!=a?a:this.data[this.dataFields.value]};
this.valueChanging.emit(a);return a.cancel};d.prototype.callValueChanged=function(){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:this.data[this.dataFields.value]})};d.prototype.itemCheckedChanged=function(a){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:a.checked})};d.prototype.itemCheckStateChanged=function(a){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:a.checkState})};d.prototype.itemTextChanged=
function(a){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:this.data[this.dataFields.text]})};d.prototype.numericValueChange=function(a){a&&!isNaN(a)&&(this.data[this.dataFields.value]=Math.min(Math.max(Number(a),this.currentSettings&&void 0!=this.currentSettings.min?this.currentSettings.min:-9999999),this.currentSettings&&void 0!=this.currentSettings.max?this.currentSettings.max:9999999),this.callValueChanged())};d.prototype.editorMouseWheel=function(a){a.stopPropagation()};
d.prototype.editorPreventDragStart=function(a){a.preventDefault();a.stopPropagation()};d.prototype.onItemClicked=function(a){this.type!=integralui_core_1.IntegralUIToolItemType.Separator&&this.itemClick.emit({data:this.data});a.stopPropagation()};d.prototype.onMouseEnter=function(a){this.isEnabled&&(this.state|=integralui_core_1.IntegralUIObjectState.hovered,this.mouseEnter.emit(a));this.isLeaving=!1;a.stopPropagation()};d.prototype.onMouseLeave=function(a){var b=this;b.isEnabled&&(b.state&=~integralui_core_1.IntegralUIObjectState.hovered,
b.mouseLeave.emit(a),b.type==integralui_core_1.IntegralUIToolItemType.Button&&(b.isLeaving=!0,setTimeout(function(){b.isLeaving=!1},250)));a.stopPropagation()};d.prototype.listScrollerItemChanged=function(a){this.data&&a.item&&(this.data[this.dataFields.text]=a.item.text,this.data[this.dataFields.value]=a.item.value,this.callValueChanged())};d.prototype.itemMouseUp=function(a){if(1==a.which)switch(this.type){case integralui_core_1.IntegralUIToolItemType.Date:this.openDropDown(a);break;case integralui_core_1.IntegralUIToolItemType.DropList:this.openDropDown(a)}};
d.prototype.openDropDown=function(a){if(!this.isPopupDelayed)switch(this.type){case integralui_core_1.IntegralUIToolItemType.Date:this.showPopup(a);break;case integralui_core_1.IntegralUIToolItemType.DropList:this.showPopup(a)}a.stopPropagation()};d.prototype.addCalendar=function(){var a=this,b=this.parentCtrl?this.parentCtrl.appRef:null;if(b){a.removeCalendar();var c=a.cmpResolver.resolveComponentFactory(integralui_datepicker_1.IntegralUICalendarPopup);c&&(a.calendarRef=b.createComponent(c),a.calendarRef.instance&&
(a.calendar=a.calendarRef.instance),a.calendar&&(a.calendar.closed.subscribe(function(b){a.removeCalendar()}),a.calendar.dateChanged.subscribe(function(b){1!=a.callValueChanging(b.date)&&(a.data.value=b.date,a.callValueChanged());a.isPopupDelayed=!0;setTimeout(function(){a.isPopupDelayed=!1;a.removeCalendar()},250)})))}};d.prototype.addDropList=function(){var a=this,b=this.parentCtrl?this.parentCtrl.appRef:null;if(b){a.removeDropList();var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUIListPopup);
c&&(a.dropListRef=b.createComponent(c),a.dropListRef.instance&&(a.dropList=a.dropListRef.instance),a.hideDropList(),a.dropList&&(a.dropList.closed.subscribe(function(b){a.removeDropList()}),a.dropList.selectionChanged.subscribe(function(b){b.item&&1!=a.callValueChanging(b.item.value)&&(a.data.value=b.item.value,a.value=a.getValue(),a.callValueChanged());a.isPopupDelayed=!0;setTimeout(function(){a.isPopupDelayed=!1;a.removeDropList()},250)})))}};d.prototype.removeCalendar=function(){this.calendar&&
(this.calendar.closed&&this.calendar.closed.unsubscribe(),this.calendar.dateChanged&&this.calendar.dateChanged.unsubscribe());this.calendarRef&&this.calendarRef.destroy();this.calendar=null};d.prototype.removeDropList=function(){this.dropList&&(this.dropList.closed&&this.dropList.closed.unsubscribe(),this.dropList.selectionChanged&&this.dropList.selectionChanged.unsubscribe());this.dropListRef&&this.dropListRef.destroy();this.dropList=null};d.prototype.hideCalendar=function(){this.calendar&&(this.calendar.display=
"none")};d.prototype.hideDropList=function(){this.dropList&&(this.dropList.display="none")};d.prototype.showPopup=function(a){if(this.data){a=this.commonService.getShiftPos();var b=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);switch(this.type){case integralui_core_1.IntegralUIToolItemType.Date:this.addCalendar();this.calendar&&(this.calendar.allowAnimation=!1,this.calendar.calendarStyle=this.data.settings&&this.data.settings.style&&this.data.settings.style.calendar?
this.data.settings.style.calendar:null,this.calendar.date=this.data.value,this.calendar.display="block",this.calendar.firstDayOfWeek=this.data.settings&&void 0!=this.data.settings.firstDayOfWeek?this.data.settings.firstDayOfWeek:integralui_core_1.IntegralUIWeekDays.Sunday,this.calendar.position={x:b.left+a.x+2,y:b.bottom+a.y},this.calendar.size=this.data.settings&&this.data.settings.calendarSize?this.data.settings.calendarSize:{width:250,height:200},this.allowAnimation&&(this.calendar.position.y-=
2),this.calendar.refresh(),this.calendar.open(),this.calendar.focus());break;case integralui_core_1.IntegralUIToolItemType.DropList:this.addDropList(),this.dropList&&(this.dropList.allowAnimation=!1,this.dropList.display="block",this.dropList.items=this.data.settings&&this.data.settings.items?this.data.settings.items:[],this.dropList.listStyle=this.data.settings&&this.data.settings.style&&this.data.settings.style.list?this.data.settings.style.list:null,this.dropList.minWidth=this.data.settings&&this.data.settings.minWidth?
this.data.settings.minWidth:b.width,this.dropList.maxVisibleItems=this.data.settings&&this.data.settings.maxVisibleItems?this.data.settings.maxVisibleItems:5,this.dropList.position={x:b.left+a.x+1,y:b.bottom+a.y},this.dropList.size={width:Math.max(b.width,this.dropList.minWidth)-2,height:0},this.dropList.refresh(),this.dropList.open(),this.dropList.focus())}}};d.prototype.getDataField=function(a){switch(a){case "text":return this.dataFields.text;case "value":return this.dataFields.value}};d.prototype.isHovered=
function(){return this.state&integralui_core_1.IntegralUIObjectState.hovered?!0:!1};d.prototype.resetLayoutTimer=function(){this.updateTimer&&clearTimeout(this.updateTimer);this.updateTimer=null};d.prototype.updateLayout=function(){var a=this;a.resetLayoutTimer();a.updateTimer=setTimeout(function(){a.contentMargin.top=(a.clientRect.height-a.contentElem.nativeElement.firstElementChild.offsetHeight)/2;a.value=a.getValue();clearTimeout(a.updateTimer)},100)};d.prototype.getControlStyle=function(){var a=
{};this.data&&this.parentCtrl&&(a=this.parentCtrl.getDataFields(),a=this.data[a.style]||{});0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};d.prototype.getProgressStyle=function(){return{width:this.getProgressValue()+"%","z-index":2}};d.prototype.getListScrollItemIcon=function(a){return this.currentSettings&&this.currentSettings.iconClass?this.currentSettings.iconClass+" "+a.icon:a.icon};d.prototype.getToolItemStyle=
function(){var a={};if(this.data&&this.data.settings){var b=this.data.settings.style||{};switch(this.type){case integralui_core_1.IntegralUIToolItemType.Button:a=b;break;case integralui_core_1.IntegralUIToolItemType.CheckBox:a=b;break;case integralui_core_1.IntegralUIToolItemType.Progress:a=b;break;case integralui_core_1.IntegralUIToolItemType.Rating:a=b;break;case integralui_core_1.IntegralUIToolItemType.Slider:a=b}}return a};d.\u0275fac=function(a){return new (a||d)(i0.\u0275\u0275directiveInject(i0.ElementRef),
i0.\u0275\u0275directiveInject(i1.IntegralUICommonService),i0.\u0275\u0275directiveInject(i2.IntegralUIBaseService),i0.\u0275\u0275directiveInject(i0.ComponentFactoryResolver))};d.\u0275cmp=i0.\u0275\u0275defineComponent({type:d,selectors:[["iui-toolitem"]],viewQuery:function(a,b){a&1&&i0.\u0275\u0275viewQuery(_c0,!0,core_1.ElementRef);if(a&2){var c;i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.contentElem=c.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",
icon:"icon",name:"name",size:"size",state:"state",text:"text",type:"type",settings:"settings"},outputs:{click:"click",mouseDown:"mouseDown",mouseEnter:"mouseEnter",mouseLeave:"mouseLeave",mouseMove:"mouseMove",mouseUp:"mouseUp",itemClick:"itemClick",valueChanging:"valueChanging",valueChanged:"valueChanged"},features:[i0.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:_c9,decls:2,vars:3,consts:[[3,"ngClass","ngStyle","click","mouseup","mouseenter","mouseleave"],[3,"ngSwitch","ngStyle",4,"ngIf"],
[3,"ngSwitch","ngStyle"],["content",""],["class","iui-toolitem-button",3,"ngClass",4,"ngSwitchCase"],["class","iui-toolitem-checkbox",4,"ngSwitchCase"],["class","iui-toolitem-datepicker",4,"ngSwitchCase"],["class","iui-toolitem-droplist",4,"ngSwitchCase"],["class","iui-toolitem-image",4,"ngSwitchCase"],[4,"ngSwitchCase"],["class","iui-toolitem-numeric","type","number","draggable","true",3,"ngModel","ngModelChange","change","DOMMouseScroll","mousewheel","dragstart",4,"ngSwitchCase"],["class","iui-toolitem-progress",
4,"ngSwitchCase"],["class","iui-toolitem-rating","align","center",4,"ngSwitchCase"],["class","iui-toolitem-separator",3,"ngClass",4,"ngSwitchCase"],["class","iui-toolitem-slider","align","center",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"iui-toolitem-button",3,"ngClass"],[3,"ngClass",4,"ngIf"],["class","iui-toolitem-label",4,"ngIf"],[3,"ngClass"],[1,"iui-toolitem-label"],[1,"iui-toolitem-checkbox"],[3,"allowAnimation","controlStyle","threeState","ngModel","ngModelChange","checkedChanged","checkStateChanged"],
[1,"iui-toolitem-datepicker"],[1,"iui-toolitem-datepicker-button",3,"ngClass"],[1,"iui-toolitem-droplist"],[1,"iui-toolitem-dropdown-button",3,"ngClass"],[1,"iui-toolitem-droplist-label",3,"ngStyle"],[1,"iui-toolitem-image"],[3,"src",4,"ngFor","ngForOf"],[3,"src"],[3,"controlStyle","enabled","items","itemSize","selectionChanged"],["align","center"],["type","number","draggable","true",1,"iui-toolitem-numeric",3,"ngModel","ngModelChange","change","DOMMouseScroll","mousewheel","dragstart"],[1,"iui-toolitem-progress"],
[3,"allowAnimation","controlStyle","value"],["align","center",1,"iui-toolitem-rating"],[3,"controlStyle","enabled","ngModel","division","increment","max","stepSize","ngModelChange","valueChanged"],[1,"iui-toolitem-separator",3,"ngClass"],["align","center",1,"iui-toolitem-slider"],[3,"allowAnimation","enabled","controlStyle","ngModel","ngModelChange","valueChanged"],["type","text",1,"iui-toolitem-textbox",3,"ngModel","ngModelChange","change"]],template:function(a,b){a&1&&(i0.\u0275\u0275projectionDef(),
i0.\u0275\u0275elementStart(0,"div",0),i0.\u0275\u0275listener("click",function(a){return b.onItemClicked(a)})("mouseup",function(a){return b.itemMouseUp(a)})("mouseenter",function(a){return b.onMouseEnter(a)})("mouseleave",function(a){return b.onMouseLeave(a)}),i0.\u0275\u0275template(1,IntegralUIToolItem_div_1_Template,16,17,"div",1),i0.\u0275\u0275elementEnd());a&2&&(i0.\u0275\u0275property("ngClass",b.getControlClass())("ngStyle",b.getControlStyle()),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngIf",
b.data))},directives:[i3.NgClass,i3.NgStyle,i3.NgIf,i3.NgSwitch,i3.NgSwitchCase,i3.NgSwitchDefault,i4.IntegralUICheckBox,i5.NgControlStatus,i5.NgModel,i3.NgForOf,i6.IntegralUIListScroller,i5.NumberValueAccessor,i5.DefaultValueAccessor,i7.IntegralUIProgressBar,i8.IntegralUIRating,i9.IntegralUISlider],encapsulation:2});return d}(integralui_core_1.IntegralUIItem);exports.IntegralUIToolItem=IntegralUIToolItem;
(function(){i0.\u0275setClassMetadata(IntegralUIToolItem,[{type:core_1.Component,args:[{selector:"iui-toolitem",template:'\n        <div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" (click)="onItemClicked($event)" (mouseup)="itemMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseLeave($event)" >\n            <div *ngIf="data" [ngSwitch]="type" [ngStyle]="{ \'margin-top\': contentMargin.top + \'px\', height: \'100%\' }" #content>\n                \x3c!-- BUTTON --\x3e\n                <div *ngSwitchCase="0" class="iui-toolitem-button" [ngClass]="{ \'iui-toolitem-button-leave\': isLeaving }">\n                    <span *ngIf="data.icon" [ngClass]="data.icon"></span>\n                    <span *ngIf="data.text" class="iui-toolitem-label">{{data.text}}</span>\n                </div>\n\n                \x3c!-- CHECKBOX --\x3e\n                <div *ngSwitchCase="1" class="iui-toolitem-checkbox">\n                    <iui-checkbox [allowAnimation]="true" [controlStyle]="getToolItemStyle()" [threeState]="currentSettings && currentSettings.threeState != undefined ? currentSettings.threeState : false" [(ngModel)]="data[getDataField(\'value\')]" (checkedChanged)="itemCheckedChanged($event)" (checkStateChanged)="itemCheckStateChanged($event)">{{data.text}}</iui-checkbox>\n                </div>\n\n                \x3c!-- DATEPICKER --\x3e\n                <div *ngSwitchCase="2" class="iui-toolitem-datepicker">\n                    <div class="iui-toolitem-datepicker-button" [ngClass]="{ \'iui-toolitem-datepicker-button-hover\': isHovered() }"><span></span></div>\n                    <span class="iui-toolitem-label">{{getValue()}}</span>\n                </div>\n\n                \x3c!-- DROPLIST --\x3e\n                <div *ngSwitchCase="3" class="iui-toolitem-droplist">\n                    <div class="iui-toolitem-dropdown-button" [ngClass]="{ \'iui-toolitem-dropdown-button-hover\': isHovered() }"><span></span></div>\n                    <span class="iui-toolitem-droplist-label" [ngStyle]="{ height: toolItemHeight, opacity: toolItemStyleOpacity }">{{value}}</span>\n                </div>\n\n                \x3c!-- IMAGE --\x3e\n                <div *ngSwitchCase="4" class="iui-toolitem-image">\n                    <img *ngFor="let item of data[getDataField(\'value\')]" [src]="item.src" />\n                </div>\n\n                \x3c!-- LABEL --\x3e\n                <div *ngSwitchCase="5">\n                    <span class="iui-toolitem-label">{{data.text}}</span>\n                </div>\n\n                \x3c!-- LIST SCROLLER --\x3e\n                <div *ngSwitchCase="6">\n                    <iui-listscroller [controlStyle]="getToolItemStyle()" [enabled]="enabled" [items]="currentSettings && currentSettings.items ? currentSettings.items : []" [itemSize]="currentSettings && currentSettings.itemSize ? currentSettings.itemSize : {}" (selectionChanged)="listScrollerItemChanged($event)">\n                        <ng-template let-item>\n                            <div align="center">\n                                <div [ngClass]="getListScrollItemIcon(item)"></div>\n                            </div>\n                        </ng-template>\n                    </iui-listscroller>\n                </div>\n\n                \x3c!-- NUMERIC --\x3e\n                <input *ngSwitchCase="7" class="iui-toolitem-numeric" type="number" [(ngModel)]="data[getDataField(\'value\')]" (change)="numericValueChange($event.target.value)" (DOMMouseScroll)="editorMouseWheel($event)" (mousewheel)="editorMouseWheel($event)" draggable="true" (dragstart)="editorPreventDragStart($event)" />\n\n                \x3c!-- PROGRESS --\x3e\n                <div *ngSwitchCase="8" class="iui-toolitem-progress">\n                    <iui-progressbar [allowAnimation]="true" [controlStyle]="getToolItemStyle()" [value]="data[getDataField(\'value\')]"></iui-progressbar>\n                </div>\n\n                \x3c!-- RATING --\x3e\n                <div *ngSwitchCase="9" class="iui-toolitem-rating" align="center">\n                    <iui-rating [controlStyle]="getToolItemStyle()" [enabled]="enabled" [(ngModel)]="data[getDataField(\'value\')]" [division]="currentSettings ? currentSettings.division : 1" [increment]="currentSettings ? currentSettings.increment : 0" [max]="currentSettings ? currentSettings.max : 5" [stepSize]="currentSettings ? currentSettings.stepSize : 16" (valueChanged)="callValueChanged()"></iui-rating>\n                </div>\n\n                \x3c!-- SEPARATOR --\x3e\n                <div *ngSwitchCase="10" class="iui-toolitem-separator" [ngClass]="{ \'iui-toolitem-separator-vertical\': currentSettings && currentSettings.orientation == 1 }"></div>\n\n                \x3c!-- SLIDER --\x3e\n                <div *ngSwitchCase="11" class="iui-toolitem-slider" align="center">\n                    <iui-slider [allowAnimation]="true" [enabled]="enabled" [controlStyle]="getToolItemStyle()" [(ngModel)]="data[getDataField(\'value\')]" (valueChanged)="callValueChanged()"></iui-slider>\n                </div>\n\n                \x3c!-- TEXTBOX --\x3e\n                <div *ngSwitchCase="12">\n                    <input class="iui-toolitem-textbox" type="text" [(ngModel)]="data[getDataField(\'text\')]" (change)="itemTextChanged($event)" />\n                </div>\n\n                <div *ngSwitchDefault>\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </div>\n    ',
inputs:"controlStyle data enabled icon name size state text".split(" "),outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),encapsulation:core_1.ViewEncapsulation.None}]}],function(){return[{type:i0.ElementRef},{type:i1.IntegralUICommonService},{type:i2.IntegralUIBaseService},{type:i0.ComponentFactoryResolver}]},{contentElem:[{type:core_1.ViewChild,args:["content",{read:core_1.ElementRef,"static":!1}]}],type:[{type:core_1.Input}],settings:[{type:core_1.Input}],itemClick:[{type:core_1.Output}],
valueChanging:[{type:core_1.Output}],valueChanged:[{type:core_1.Output}]})})();