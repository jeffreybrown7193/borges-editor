/*
  filename: integralui.combobox.js
  version : 1.6.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=function(d,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return e(d,a)};return function(d,a){function b(){this.constructor=d}e(d,a);d.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common"),i3=require("./integralui.core"),_c0=["control"],_c1=["header"],_c2=["dropdown"],_c3=function(e,d,a,b,c,h){return{"border-width":e,display:d,height:a,opacity:b,"overflow-y":c,width:h}},_c4=["*"],IntegralUIComboBox=function(e){function d(a,
b){var c=e.call(this,a)||this;c.commonService=a;c.cmpResolver=b;c.eventList=[];c.expandState="none";c.initStatus=!0;c.isExpanded=!1;c.isSelected=!1;c.supressCallback=!1;c.contentBorder="0px";c.contentHeight="0";c.contentDisplay="block";c.contentOpacity=1;c.contentOverflowY="hidden";c.listSize={width:0,height:0};c.maxBlockHeight=0;c.itemSizeList=[];c.contentClassName="";c.headerClassName="";c.headerExpandBoxClassName="";c.itemGeneralClassName="";c.itemContentClassName="";c.contentClass=[];c.tRef=null;
c.click=new core_1.EventEmitter;c.dropDownClosed=new core_1.EventEmitter;c.dropDownClosing=new core_1.EventEmitter;c.dropDownOpened=new core_1.EventEmitter;c.dropDownOpening=new core_1.EventEmitter;c.selectedItemChanged=new core_1.EventEmitter;c.selectedIndexChanged=new core_1.EventEmitter;c.itemList=[];c.integralHeight=!1;c.maxDropDownItems=5;c.listSize={width:0,height:0};c.itemSizeList=[];return c}__extends(d,e);Object.defineProperty(d.prototype,"dropDownWidth",{get:function(){return this.listSize.width},
set:function(a){this.listSize.width!=a&&(!this.comboWidth||a>=this.comboWidth?this.listSize.width=a:this.comboWidth&&(this.listSize.width=this.comboWidth))},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){if(this.isExpanded!=a){var b=this;if(b.callBeforeEvent(a)){b.expandState=a?"expand":"collapse";var c=setTimeout(function(){"collapse"==b.expandState&&(b.expandState="none");clearTimeout(c)},300);b.isExpanded=a;b.header.state=
a?b.header.state|integralui_core_1.IntegralUIObjectState.selected:b.header.state&~integralui_core_1.IntegralUIObjectState.selected;b.header.animationState=b.isExpanded?"expand":"collapse";b.updateContentClass();b.toggleContent()}}},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"selectedIndex",{get:function(){return this.currentIndex},set:function(a){this.updateSelection(a)},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"selectedItem",{get:function(){return this.currentSelection},
set:function(a){this.currentSelection!=a&&(a=this.items?this.items.indexOf(a):-1,this.updateSelection(a))},enumerable:!0,configurable:!0});d.prototype.ngOnInit=function(){this.generalClassName="iui-combobox";this.headerClassName=this.generalClassName+"-header";this.headerExpandBoxClassName=this.headerClassName+"-expand-box";this.contentClassName=this.generalClassName+"-dropdown";this.itemGeneralClassName=this.generalClassName+"-item";this.itemContentClassName=this.itemGeneralClassName+"-content";
this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{general:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},expandBox:this.headerExpandBoxClassName},content:{general:this.contentClassName,
expanded:this.contentClassName+"-expand",collapsed:this.contentClassName+"-collapse"},item:{general:{disabled:this.itemGeneralClassName+"-disabled",focused:this.itemGeneralClassName+"-focused",normal:this.itemGeneralClassName,hovered:this.itemGeneralClassName+"-hovered",selected:this.itemGeneralClassName+"-selected"},content:{disabled:this.itemContentClassName+"-disabled",focused:this.itemContentClassName+"-focused",normal:this.itemContentClassName,hovered:this.itemContentClassName+"-hovered",selected:this.itemContentClassName+
"-selected"}}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};d.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&a.headerRef&&(a.tRef=a.headerRef.createComponent(c));clearTimeout(b)},100);a.headerElem&&(a.comboWidth=a.headerElem.nativeElement.firstElementChild.clientWidth,a.dropDownWidth<a.comboWidth&&(a.dropDownWidth=a.comboWidth))};d.prototype.ngAfterContentInit=
function(){var a=this;a.attachItemEvents();a.contentList.changes.subscribe(function(){a.attachItemEvents()});a.updateSelectedIndex(a.selectedIndex);var b=setTimeout(function(){a.calcBlockHeight();a.contentDisplay="none";a.contentHeight="0";a.expandState="none";clearTimeout(b)},100)};d.prototype.ngOnDestroy=function(){this.tRef&&this.tRef.destroy()};d.prototype.attachItemEvents=function(){var a=this;this.itemList=this.contentList.toArray();a.eventList&&(a.eventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),
a.eventList.length=0);this.itemList&&0<this.itemList.length&&this.itemList.forEach(function(b){var c=[];c.push(b.mouseDown.subscribe(function(c){c=a.itemList.indexOf(b);a.updateSelection(c);setTimeout(function(){a.closeDropDown()},1)}));a.eventList.push(c)})};d.prototype.comboClick=function(a){this.isEnabled&&1==a.buttons&&(this.initStatus=!1,this.expanded?this.closeDropDown():this.openDropDown())};d.prototype.dropDownBlurEvent=function(a){if(this.isEnabled){a.preventDefault();var b=this,c=setTimeout(function(){b.closeDropDown();
clearTimeout(c)},1)}a.stopPropagation()};d.prototype.callBeforeEvent=function(a){var b={cancel:!1};a?this.dropDownOpening.emit(b):this.dropDownClosing.emit(b);return!b.cancel};d.prototype.callAfterEvent=function(a){a?this.dropDownOpened.emit(null):this.dropDownClosed.emit(null)};d.prototype.closeDropDown=function(){this.expanded=!1;this.dropDownElem&&this.dropDownElem.nativeElement.blur()};d.prototype.openDropDown=function(){var a=this;a.expanded=!0;var b=setTimeout(function(){a.dropDownElem&&a.dropDownElem.nativeElement.focus();
clearTimeout(b)},5)};d.prototype.getComboIcon=function(){return this.selectedItem?this.selectedItem.icon:""};d.prototype.getComboIconUrl=function(){return this.selectedItem?this.selectedItem.iconUrl:""};d.prototype.getComboText=function(){return this.selectedItem?this.selectedItem.text:"_"};d.prototype.isIndexInRange=function(a){return this.items?0<=a&&a<this.items.length:!1};d.prototype.getDropDownWidth=function(){return 0<this.dropDownWidth?this.dropDownWidth:this.comboWidth?this.comboWidth:0};
d.prototype.calcBlockHeight=function(){var a=this;a.itemSizeList.length=0;a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var b=0;a.itemList.forEach(function(c){var d=c.getSize();c=c.getMargin();a.itemSizeList.push({size:d,margin:c});b++})}};d.prototype.getDropDownHeight=function(){var a=this;if(0<a.dropDownHeight)return a.dropDownHeight;var b=0,c=0;a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var d=0,e=-1,g=!1;a.itemList.forEach(function(h,f){f<a.itemSizeList.length&&
(d<a.maxDropDownItems&&(b+=a.itemSizeList[f].size.height,!g&&a.itemSizeList[f].size.height!=e&&0<e&&(g=!0),e=a.itemSizeList[f].size.height,c=a.itemSizeList[f].margin.bottom),d++)});0<d&&(b+=c);a.integralHeight||(b=Math.floor(b/(d<a.maxDropDownItems?d:a.maxDropDownItems))*(g?a.maxDropDownItems+1:a.maxDropDownItems))}return b};d.prototype.toggleContent=function(){var a=this,b=0,c=0;a.maxBlockHeight=a.getDropDownHeight();a.contentOverflowY="hidden";if(a.expanded)if(a.contentDisplay="block",a.contentBorder=
"1px",a.allowAnimation)var d=setInterval(function(){b+c<a.maxBlockHeight?(c=0==c?1:c+2,b+=c,a.contentHeight=b+"px"):(a.contentHeight=a.maxBlockHeight+"px",a.contentOverflowY="auto",a.expandState="none",a.callAfterEvent(!0),clearInterval(d))},15);else a.contentHeight=a.maxBlockHeight+"px",a.contentOverflowY="auto",a.expandState="none",a.callAfterEvent(!0);else if(b=a.maxBlockHeight,a.allowAnimation)var e=setInterval(function(){0<b?(c=0==c?1:c+2,b-=c,a.contentHeight=b+"px"):(a.contentBorder="0px",a.contentDisplay=
"none",a.contentHeight="0",a.expandState="none",a.callAfterEvent(),clearInterval(e))},15);else a.contentBorder="0px",a.contentDisplay="none",a.contentHeight="0",a.expandState="none",a.callAfterEvent()};d.prototype.processMouseWheel=function(a,b){this.isEnabled&&a.stopPropagation()};d.prototype.clearSelection=function(a){this.itemList=this.contentList.toArray();this.itemList.forEach(function(b,c){b!=a&&(b.state&=~integralui_core_1.IntegralUIObjectState.selected)})};d.prototype.updateSelectedIndex=
function(a){this.isIndexInRange(a)&&(this.currentSelection=this.items[a],this.selectedItemChanged.emit({item:this.currentSelection}),this.contentList&&(this.itemList=this.contentList.toArray())&&a<this.itemList.length&&(this.itemList[a].state|=integralui_core_1.IntegralUIObjectState.selected))};d.prototype.updateSelection=function(a){if(this.isIndexInRange(a)){this.currentIndex=a;var b=this,c=setTimeout(function(){b.clearSelection();b.updateSelectedIndex(a);b.selectedIndexChanged.emit({index:a});
clearTimeout(c)},1)}};d.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};d.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.options.currentStyle.content.general);0!=this.expanded?"expand"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.expanded):"collapse"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.collapsed)};
d.prototype.getContentClass=function(){return this.contentClass};d.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.contentClassName),expanded:this.commonService.isFieldAvailable(a.expanded,this.contentClassName+"-expand"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.contentClassName+"-collapse")}:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed}};
d.prototype.getHeaderClass=function(){var a=this.headerClassName;return a=this.state&integralui_core_1.IntegralUIObjectState.disabled?a+(" "+this.options.currentStyle.header.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?a+(" "+this.options.currentStyle.header.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?a+(" "+this.options.currentStyle.header.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered?a+(" "+this.options.currentStyle.header.hovered):
a+(" "+this.options.currentStyle.header.normal)};d.prototype.getHeaderGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),selected:this.commonService.isFieldAvailable(a.selected,
this.headerClassName+"-selected")}:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected}};d.prototype.getHeaderStyle=function(a){return a?{general:this.getHeaderGeneralStyle(a.general),expandBox:this.commonService.isFieldAvailable(a.expandBox,this.headerExpandBoxClassName)}:{general:this.getHeaderGeneralStyle(),
expandBox:this.defaultStyle.header.expandBox}};d.prototype.getCurrentHeaderStyle=function(){return this.options.currentStyle.header};d.prototype.getItemStyle=function(a){return a?{general:this.getItemGeneralStyle(a.general),content:this.getItemContentStyle(a.content)}:{general:this.getItemGeneralStyle(),content:this.getItemContentStyle()}};d.prototype.getItemGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemGeneralClassName+
"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemGeneralClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemGeneralClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemGeneralClassName),selected:this.commonService.isFieldAvailable(a.selected,this.itemGeneralClassName+"-selected")}:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,
normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected}};d.prototype.getItemContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemContentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemContentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemContentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,
this.itemContentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.itemContentClassName+"-selected")}:{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,hovered:this.defaultStyle.item.content.hovered,normal:this.defaultStyle.item.content.normal,selected:this.defaultStyle.item.content.selected}};d.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),
content:this.getContentStyle(a.content),item:this.getItemStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{general:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,
selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox},content:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed},item:{general:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected},content:{disabled:this.defaultStyle.item.content.disabled,
focused:this.defaultStyle.item.content.focused,hovered:this.defaultStyle.item.content.hovered,normal:this.defaultStyle.item.content.normal,selected:this.defaultStyle.item.content.selected}}}};d.\u0275fac=function(a){return new (a||d)(i0.\u0275\u0275directiveInject(i1.IntegralUICommonService),i0.\u0275\u0275directiveInject(i0.ComponentFactoryResolver))};d.\u0275cmp=i0.\u0275\u0275defineComponent({type:d,selectors:[["iui-combobox"]],contentQueries:function(a,b,c){a&1&&i0.\u0275\u0275contentQuery(c,
integralui_core_1.IntegralUIItem,!0);if(a&2){var d;i0.\u0275\u0275queryRefresh(d=i0.\u0275\u0275loadQuery())&&(b.contentList=d)}},viewQuery:function(a,b){a&1&&(i0.\u0275\u0275viewQuery(_c0,!0,core_1.ElementRef),i0.\u0275\u0275viewQuery(_c1,!0),i0.\u0275\u0275viewQuery(_c1,!0,core_1.ElementRef),i0.\u0275\u0275viewQuery(_c1,!0,core_1.ViewContainerRef),i0.\u0275\u0275viewQuery(_c2,!0,core_1.ElementRef));if(a&2){var c;i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.controlElem=c.first);
i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.header=c.first);i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.headerElem=c.first);i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.headerRef=c.first);i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.dropDownElem=c.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",dropDownHeight:"dropDownHeight",integralHeight:"integralHeight",items:"items",
maxDropDownItems:"maxDropDownItems",dropDownWidth:"dropDownWidth",expanded:"expanded",selectedIndex:"selectedIndex",selectedItem:"selectedItem"},outputs:{click:"click",dropDownClosed:"dropDownClosed",dropDownClosing:"dropDownClosing",dropDownOpened:"dropDownOpened",dropDownOpening:"dropDownOpening",selectedItemChanged:"selectedItemChanged",selectedIndexChanged:"selectedIndexChanged"},features:[i0.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:_c4,decls:7,vars:19,consts:[[3,"ngClass","ngStyle",
"DOMMouseScroll","mousewheel"],["control",""],[3,"controlStyle","enabled","icon","iconUrl","text","allowAnimation","animationType","size","mouseDown"],["header",""],["tabindex","999",3,"ngClass","ngStyle","blur"],["dropdown",""]],template:function(a,b){a&1&&(i0.\u0275\u0275projectionDef(),i0.\u0275\u0275elementStart(0,"div",0,1),i0.\u0275\u0275listener("DOMMouseScroll",function(a){return b.processMouseWheel(a)})("mousewheel",function(a){return b.processMouseWheel(a)}),i0.\u0275\u0275elementStart(2,
"iui-header",2,3),i0.\u0275\u0275listener("mouseDown",function(a){return b.comboClick(a)}),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementStart(4,"div",4,5),i0.\u0275\u0275listener("blur",function(a){return b.dropDownBlurEvent(a)}),i0.\u0275\u0275projection(6),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementEnd());a&2&&(i0.\u0275\u0275property("ngClass",b.getControlClass())("ngStyle",b.getControlStyle()),i0.\u0275\u0275advance(2),i0.\u0275\u0275property("controlStyle",b.getCurrentHeaderStyle())("enabled",
b.enabled)("icon",b.getComboIcon())("iconUrl",b.getComboIconUrl())("text",b.getComboText())("allowAnimation",b.allowAnimation)("animationType","arrow")("size",b.size),i0.\u0275\u0275advance(2),i0.\u0275\u0275property("ngClass",b.getContentClass())("ngStyle",i0.\u0275\u0275pureFunction6(12,_c3,b.contentBorder,b.contentDisplay,b.contentHeight,b.contentOpacity,b.contentOverflowY,b.getDropDownWidth()+"px")))},directives:[i2.NgClass,i2.NgStyle,i3.IntegralUIHeaderItem],encapsulation:2});return d}(integralui_core_1.IntegralUIBaseComponent);
exports.IntegralUIComboBox=IntegralUIComboBox;
(function(){i0.\u0275setClassMetadata(IntegralUIComboBox,[{type:core_1.Component,args:[{selector:"iui-combobox",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" (DOMMouseScroll)="processMouseWheel($event)" (mousewheel)="processMouseWheel($event)" #control>\n\t\t\t<iui-header [controlStyle]="getCurrentHeaderStyle()" [enabled]="enabled" [icon]="getComboIcon()" [iconUrl]="getComboIconUrl()" [text]="getComboText()" (mouseDown)="comboClick($event)" [allowAnimation]="allowAnimation" [animationType]="\'arrow\'" [size]="size" #header>\n\t\t\t</iui-header>\n\t\t\t<div [ngClass]="getContentClass()" [ngStyle]="{ \'border-width\': contentBorder, \'display\': contentDisplay, \'height\': contentHeight, \'opacity\': contentOpacity, \'overflow-y\': contentOverflowY, \'width\': getDropDownWidth() + \'px\' }" tabindex="999" (blur)="dropDownBlurEvent($event)" #dropdown> \n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div> \n\t\t</div>\n\t',inputs:"controlStyle data enabled name size state".split(" "),
encapsulation:core_1.ViewEncapsulation.None}]}],function(){return[{type:i1.IntegralUICommonService},{type:i0.ComponentFactoryResolver}]},{controlElem:[{type:core_1.ViewChild,args:["control",{read:core_1.ElementRef,"static":!1}]}],header:[{type:core_1.ViewChild,args:["header",{"static":!1}]}],headerElem:[{type:core_1.ViewChild,args:["header",{read:core_1.ElementRef,"static":!1}]}],headerRef:[{type:core_1.ViewChild,args:["header",{read:core_1.ViewContainerRef,"static":!1}]}],dropDownElem:[{type:core_1.ViewChild,
args:["dropdown",{read:core_1.ElementRef,"static":!1}]}],contentList:[{type:core_1.ContentChildren,args:[integralui_core_1.IntegralUIItem,{descendants:!0}]}],dropDownHeight:[{type:core_1.Input}],integralHeight:[{type:core_1.Input}],items:[{type:core_1.Input}],maxDropDownItems:[{type:core_1.Input}],dropDownWidth:[{type:core_1.Input}],expanded:[{type:core_1.Input}],selectedIndex:[{type:core_1.Input}],selectedItem:[{type:core_1.Input}],click:[{type:core_1.Output}],dropDownClosed:[{type:core_1.Output}],
dropDownClosing:[{type:core_1.Output}],dropDownOpened:[{type:core_1.Output}],dropDownOpening:[{type:core_1.Output}],selectedItemChanged:[{type:core_1.Output}],selectedIndexChanged:[{type:core_1.Output}]})})();