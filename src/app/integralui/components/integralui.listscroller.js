/*
  filename: integralui.listscroller.js
  version : 1.3.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=function(c,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return e(c,a)};return function(c,a){function b(){this.constructor=c}e(c,a);c.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.common.service"),i3=require("@angular/common"),i4=require("./integralui.core"),_c0=["block"],_c1=["leftrightButtons"],_c2=["topBottomButtons"],_c3=["topBottomButtonsChild"],
_c4=function(e,c,a,b){return{position:"absolute",top:e,left:c,width:a,height:b}},_c5=function(e){return{$implicit:e}};
function IntegralUIListScroller_span_2_li_7_Template(e,c){if(e&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"li",13,14);i0.\u0275\u0275listener("click",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemClickEvent(b,d)})("mousedown",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseDown(b,d)})("mouseup",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseUp(b,
d)})("mouseenter",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseEnter(b,d)})("mouseleave",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseLeave(b,d)});i0.\u0275\u0275elementStart(2,"div",15);i0.\u0275\u0275element(3,"span",16);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(e&2){var b=c.$implicit,f=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275property("ngClass",b.style.general)("ngStyle",
i0.\u0275\u0275pureFunction4(6,_c4,b.position.y+"px",b.position.x+"px",f.currentItemSize.width+"px",f.currentItemSize.height+"px"));i0.\u0275\u0275advance(2);i0.\u0275\u0275propertyInterpolate("tabindex",b.tabIndex);i0.\u0275\u0275property("ngClass",b.style.content);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("iuiTemplateOutlet",f.itemTemplate)("iuiTemplateOutletContext",i0.\u0275\u0275pureFunction1(11,_c5,b.data))}}
var _c6=function(e){return{"margin-left":e}},_c7=function(e,c,a,b,f){return{left:e,top:c,width:a,height:b,opacity:f}},_c8=function(e){return{width:e}};
function IntegralUIListScroller_span_2_Template(e,c){if(e&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"span");i0.\u0275\u0275elementStart(1,"div",4,5);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().prevItem()})("mousedown",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().onMouseDown(b)})("mouseup",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().onMouseUp(b)});
i0.\u0275\u0275element(3,"span",6,7);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementStart(5,"ul",8,9);i0.\u0275\u0275template(7,IntegralUIListScroller_span_2_li_7_Template,4,13,"li",10);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementStart(8,"div",11);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().nextItem()})("mousedown",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().onMouseDown(b,!0)})("mouseup",function(b){i0.\u0275\u0275restoreView(a);
return i0.\u0275\u0275nextContext().onMouseUp(b)});i0.\u0275\u0275element(9,"span",12);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(e&2){var b=i0.\u0275\u0275nextContext();i0.\u0275\u0275advance(3);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction1(5,_c6,b.topBotomMarginLeft+"px"));i0.\u0275\u0275advance(2);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction5(7,_c7,b.contentPos.left+"px",b.contentPos.top+"px",b.contentSize.width+"px",b.contentSize.height+"px",b.contentOpacity));
i0.\u0275\u0275advance(2);i0.\u0275\u0275property("ngForOf",b.scrollItemList);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction1(13,_c8,b.contentSize.width-2+"px"));i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction1(15,_c6,b.topBotomMarginLeft+"px"))}}
function IntegralUIListScroller_span_3_li_6_Template(e,c){if(e&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"li",13,14);i0.\u0275\u0275listener("click",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemClickEvent(b,d)})("mousedown",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseDown(b,d)})("mouseup",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseUp(b,
d)})("mouseenter",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseEnter(b,d)})("mouseleave",function(b){i0.\u0275\u0275restoreView(a);var d=c.$implicit;return i0.\u0275\u0275nextContext(2).itemMouseLeave(b,d)});i0.\u0275\u0275elementStart(2,"div",15);i0.\u0275\u0275element(3,"span",16);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(e&2){var b=c.$implicit,f=i0.\u0275\u0275nextContext(2);i0.\u0275\u0275property("ngClass",b.style.general)("ngStyle",
i0.\u0275\u0275pureFunction4(6,_c4,b.position.y+"px",b.position.x+"px",f.currentItemSize.width+"px",f.currentItemSize.height+"px"));i0.\u0275\u0275advance(2);i0.\u0275\u0275propertyInterpolate("tabindex",b.tabIndex);i0.\u0275\u0275property("ngClass",b.style.content);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("iuiTemplateOutlet",f.itemTemplate)("iuiTemplateOutletContext",i0.\u0275\u0275pureFunction1(11,_c5,b.data))}}var _c9=function(e){return{"margin-top":e}};
function IntegralUIListScroller_span_3_Template(e,c){if(e&1){var a=i0.\u0275\u0275getCurrentView();i0.\u0275\u0275elementStart(0,"span");i0.\u0275\u0275elementStart(1,"div",17,18);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().prevItem()})("mousedown",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().onMouseDown(b)})("mouseup",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().onMouseUp(b)});
i0.\u0275\u0275element(3,"span",19);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementStart(4,"ul",8,9);i0.\u0275\u0275template(6,IntegralUIListScroller_span_3_li_6_Template,4,13,"li",10);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementStart(7,"div",20);i0.\u0275\u0275listener("click",function(){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().nextItem()})("mousedown",function(b){i0.\u0275\u0275restoreView(a);return i0.\u0275\u0275nextContext().onMouseDown(b,!0)})("mouseup",function(b){i0.\u0275\u0275restoreView(a);
return i0.\u0275\u0275nextContext().onMouseUp(b)});i0.\u0275\u0275element(8,"span",21);i0.\u0275\u0275elementEnd();i0.\u0275\u0275elementEnd()}if(e&2){var b=i0.\u0275\u0275nextContext();i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction1(4,_c9,b.leftRightMarginTop+"px"));i0.\u0275\u0275advance(3);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction5(6,_c7,b.contentPos.left+"px",b.contentPos.top+"px",b.contentSize.width+"px",b.contentSize.height+"px",b.contentOpacity));
i0.\u0275\u0275advance(2);i0.\u0275\u0275property("ngForOf",b.scrollItemList);i0.\u0275\u0275advance(1);i0.\u0275\u0275property("ngStyle",i0.\u0275\u0275pureFunction1(12,_c9,b.leftRightMarginTop+"px"))}}
var IntegralUIListScroller=function(e){function c(a,b,c,g){var d=e.call(this,c)||this;d.dataService=a;d.elemRef=b;d.commonService=c;d.cmpResolver=g;d.currentList=[];d.options={dataFields:null,selectedItem:null,sorting:integralui_core_1.IntegralUISortOrder.None};d.dataItems=[];d.scrollItemList=[];d.valueTimer=null;d.valueCount=0;d.isChangeActive=!1;d.stopTimer=!0;d.hoverItem=null;d.currentFocusItem=null;d.isKeyboardActive=!1;d.allowUpdate=!0;d.blockSize={width:0,height:0};d.clientRect={width:0,height:0};
d.contentOpacity=1;d.contentSize={width:0,height:0};d.currentIndex=0;d.prevIndex=0;d.updateTimer=null;d.clientSpace={width:0,height:0};d.contentPos={top:0,left:0};d.currentItemSize={width:48,height:48};d.leftRightMarginTop=0;d.topBotomMarginLeft=0;d.currentScrollMode=integralui_core_1.IntegralUIScrollMode.Horizontal;d.currentScrollPos={x:0,y:0};d.initPos={x:0,y:0};d.maxScrollPos={x:0,y:0};d.prevScrollPos={x:0,y:0};d.scrollSize={width:0,height:0};d.removeIndex=-1;d.sortComparer=null;d.refreshTimer=
null;d.mouseWheelSpeed=integralui_core_1.IntegralUISpeedMode.Normal;d.afterSelect=new core_1.EventEmitter;d.beforeSelect=new core_1.EventEmitter;d.change=new core_1.EventEmitter;d.clear=new core_1.EventEmitter;d.itemAdding=new core_1.EventEmitter;d.itemAdded=new core_1.EventEmitter;d.itemRemoving=new core_1.EventEmitter;d.itemRemoved=new core_1.EventEmitter;d.scrollModeChanged=new core_1.EventEmitter;d.scrollPosChanged=new core_1.EventEmitter;d.selectionChanged=new core_1.EventEmitter;d.updateComplete=
new core_1.EventEmitter;d.updateOptions();return d}__extends(c,e);Object.defineProperty(c.prototype,"items",{get:function(){return this.dataItems},set:function(a){this.dataItems=a;this.updateData()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"itemSize",{get:function(){return this.currentItemSize},set:function(a){a&&(this.currentItemSize={width:0<a.width?a.width:0,height:0<a.height?a.height:0},this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"scrollMode",{get:function(){return this.currentScrollMode},set:function(a){this.currentScrollMode!=a&&(this.currentScrollMode=a,this.scrollPos({x:0,y:0}),this.updateLayout(),this.scrollModeChanged.emit(null))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"selectedItem",{get:function(){return this.currentSelection},set:function(a){if(this.currentSelection!=a)var b=this,c=setTimeout(function(){b.processSelection(a);clearTimeout(c)},1)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"sorting",{set:function(a){this.options.sorting=a},enumerable:!0,configurable:!0});c.prototype.ngOnInit=function(){this.updateData();this.updateCurrentList();this.generalClassName="iui-listscroller";this.itemClassName="iui-listscroller-item";this.itemContentClassName=this.itemClassName+"-content";this.initStyle()};c.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+
"-hovered",selected:this.generalClassName+"-selected"},item:{general:{disabled:this.itemClassName+"-disabled",focused:this.itemClassName+"-focused",normal:this.itemClassName,hovered:this.itemClassName+"-hovered",selected:this.itemClassName+"-selected"},content:{disabled:this.itemContentClassName+"-disabled",focused:this.itemContentClassName+"-focused",normal:this.itemContentClassName,hovered:this.itemContentClassName+"-hovered",selected:this.itemContentClassName+"-selected"}}};this.updateStyle(this.controlStyle);
this.updateControlClass();this.refresh()};c.prototype.addItem=function(a){this.callEventAdd("add",a,-1,parent)};c.prototype.clearItems=function(){this.currentSelection=null;this.dataService.clear();this.clear.emit(null);this.updateLayout()};c.prototype.insertItemAt=function(a,b){this.callEventAdd("at",a,b)};c.prototype.insertItemBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};c.prototype.insertItemAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};c.prototype.removeItem=function(a){return this.callEventRemove(a)};
c.prototype.removeItemAt=function(a){return this.callEventRemove(null,a)};c.prototype.callEventAdd=function(a,b,c,e,d){var f={cancel:!1,item:b};this.itemAdding.emit(f);if(1!=f.cancel){switch(a){case "at":this.dataService.insert(b,c);break;case "ref":this.dataService.insertByRef(b,e,d);break;default:this.dataService.insert(b,-1)}this.itemAdded.emit({item:b})}};c.prototype.callEventRemove=function(a,b){var c={cancel:!1,item:a};this.itemRemoving.emit(c);return 1!=c.cancel&&(this.removeIndex=this.items?
this.items.indexOf(a):-1,c=this.dataService.removeAt(a,b),c.result)?(this.itemRemoved.emit({item:c.obj}),!0):!1};c.prototype.updateCurrentList=function(){var a=this;a.currentList.length=0;var b=a.dataService.getList();b&&(a.applySorting(b),b.forEach(function(b){a.addItemToCurrentList(b)}))};c.prototype.addItemToCurrentList=function(a){a.type="item";a[this.options.dataFields.id]||(a[this.options.dataFields.id]=this.commonService.getUniqueId());this.isItemAllowed(a)&&this.currentList.push({data:a})};
c.prototype.updateScrollItemList=function(){this.scrollItemList.length=0;var a=this.initPos.x-this.currentScrollPos.x,b=this.initPos.y-this.currentScrollPos.y;this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?b=0:a=0;for(var c=0,e=this.currentIndex;e<this.currentList.length;e++,c++){var d={data:this.currentList[e].data,index:e-this.currentIndex,position:{x:0,y:0},style:{},tabIndex:c};this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?(d.position={x:a,y:b},a+=this.currentItemSize.width):
(d.position={x:a,y:b},b+=this.currentItemSize.height);this.updateItemStyle(d);this.scrollItemList.push(d)}};c.prototype.updateData=function(){this.dataService.init([{data:this.items}])};c.prototype.updateOptions=function(a){a?this.options={dataFields:null,selectedItem:this.commonService.isFieldAvailable(a.selectedItem,this.options.selectedItem?this.options.selectedItem:null)}:(this.options={dataFields:null,selectedItem:null},this.updateDataFields())};c.prototype.updateDataFields=function(a){this.options.dataFields=
a?{canSelect:a.canSelect?a.canSelect:"canSelect",content:a.content?a.content:"content",contextMenu:a.contextMenu?a.contextMenu:"contextMenu",enabled:a.enabled?a.enabled:"enabled",icon:a.icon?a.icon:"icon",id:a.id?a.id:"id",items:a.items?a.items:"items",selected:a.selected?a.selected:"selected",style:a.style?a.style:"style",text:a.text?a.text:"text",tooltip:a.tooltip?a.tooltip:"tooltip",value:a.value?a.value:"value",visible:a.visible?a.visible:"visible"}:{canSelect:"canSelect",content:"content",contextMenu:"contextMenu",
enabled:"enabled",icon:"icon",id:"id",items:"items",selected:"selected",style:"style",text:"text",tooltip:"tooltip",value:"value",visible:"visible"};this.dataService&&this.dataService.updateDataFields(this.options.dataFields)};c.prototype.cloneItem=function(a){return this.dataService.clone(a)};c.prototype.getItemIndex=function(a){for(var b=-1,c=0;c<this.currentList.length;c++)if(this.currentList[c].data==a){b=c;break}return b};c.prototype.isIndexInRange=function(a){return this.currentList?0<=a&&a<
this.currentList.length:!1};c.prototype.isItemAllowed=function(a){return!0};c.prototype.isItemEnabled=function(a){return!0};c.prototype.isItemHovered=function(a){return a&&a==this.hoverItem?!0:!1};c.prototype.isItemSelected=function(a){return a&&1==a[this.options.dataFields.selected]?!0:!1};c.prototype.itemMouseEnter=function(a,b){this.isEnabled&&(this.hoverItem=b.data,this.updateItemStyle(b))};c.prototype.itemMouseLeave=function(a,b){this.isEnabled&&(this.hoverItem=null,this.updateItemStyle(b))};
c.prototype.getContentSize=function(){return{width:0,height:0}};c.prototype.refresh=function(){this.updateView()};c.prototype.resetLayout=function(){this.updateTimer&&clearTimeout(this.updateTimer);this.updateTimer=null};c.prototype.suspendLayout=function(){this.allowUpdate=!1};c.prototype.resumeLayout=function(){this.allowUpdate=!0;this.updateLayout()};c.prototype.updateLayout=function(){var a=this;a.contentOpacity=0;a.updateTimer=setTimeout(function(){a.updateCurrentList();0==a.currentList.length&&
(a.currentScrollPos={x:0,y:0});a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.initPos={x:(a.clientRect.width-a.itemSize.width)/2,y:(a.clientRect.height-a.itemSize.height)/2};a.leftrightButtonsElem?a.initPos.x-=a.leftrightButtonsElem.nativeElement.offsetWidth+1:a.initPos.y-=a.topBottomButtonsElem.nativeElement.offsetHeight+1;a.updateScrollItemList();var b=setTimeout(function(){a.updateScrollSize();a.updateSelection();
a.refresh();a.updateComplete.emit(null);clearTimeout(b)},1);a.contentOpacity=1;clearTimeout(a.updateTimer)},100)};c.prototype.updateView=function(){this.updateScrollItemList()};c.prototype.ctrlMouseWheel=function(a){this.isEnabled&&this.processMouseWheel(a)};c.prototype.itemMouseDown=function(a,b){this.isEnabled&&(this.options.allowFocus&&1==a.buttons&&(this.currentFocusItem=b.data),this.processSelection(b.data));a.stopPropagation()};c.prototype.itemMouseUp=function(a,b){};c.prototype.itemClickEvent=
function(a,b){a.stopPropagation()};c.prototype.itemDblClickEvent=function(a,b){a.stopPropagation()};c.prototype.onMouseDown=function(a,b){this.startChange(b)};c.prototype.onMouseUp=function(a){this.stopChange()};c.prototype.onScroll=function(a){a.target&&(a.target.scrollTop=0,a.target.scrollLeft=0)};c.prototype.changeHorizontalScrollPos=function(a){this.currentScrollPos.x=Math.max(0,Math.min(a,this.maxScrollPos.x));this.currentScrollPos.x!=this.prevScrollPos.x&&(this.scrollPosChanged.emit({value:this.scrollPos()}),
this.prevScrollPos.x=this.currentScrollPos.x)};c.prototype.changeVerticalScrollPos=function(a){this.currentScrollPos.y=Math.max(0,Math.min(a,this.maxScrollPos.y));this.currentScrollPos.y!=this.prevScrollPos.y&&(this.scrollPosChanged.emit({value:this.scrollPos()}),this.prevScrollPos.y=this.currentScrollPos.y)};c.prototype.scrollPos=function(a){a&&(this.currentScrollPos={x:Math.max(0,Math.min(a.x,this.maxScrollPos.x)),y:Math.max(0,Math.min(a.y,this.maxScrollPos.y))},this.updateSelection(),this.updateView(),
this.scrollPosChanged.emit({value:this.currentScrollPos}));return{x:Math.floor(this.currentScrollPos.x),y:Math.floor(this.currentScrollPos.y)}};c.prototype.processMouseWheel=function(a){if(this.isEnabled){a.preventDefault();this.hoverItem=null;var b=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)),c=1;switch(this.mouseWheelSpeed){case integralui_core_1.IntegralUISpeedMode.VerySlow:c=.25;break;case integralui_core_1.IntegralUISpeedMode.Slow:c=.5;break;case integralui_core_1.IntegralUISpeedMode.Fast:c=
1.5;break;case integralui_core_1.IntegralUISpeedMode.VeryFast:c=3}this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?(c*=this.itemSize.width,b=this.currentScrollPos.x+c*b*-1,this.changeHorizontalScrollPos(b)):(c*=this.itemSize.height,b=this.currentScrollPos.y+c*b*-1,this.changeVerticalScrollPos(b));this.updateSelection();this.updateView();a.stopPropagation()}};c.prototype.updateScrollSize=function(){var a=this.commonService.getBorderWidth(this.blockElem.nativeElement),b=this.commonService.getMargin(this.blockElem.nativeElement),
c=this.commonService.getPadding(this.blockElem.nativeElement);switch(this.scrollMode){case integralui_core_1.IntegralUIScrollMode.Vertical:this.topBottomButtonsElem&&this.blockElem&&(this.contentSize={width:this.clientRect.width,height:this.clientRect.height-(a.top+a.bottom+b.top+b.bottom+c.top+c.bottom+2*this.topBottomButtonsElem.nativeElement.offsetHeight)-2},this.contentPos={left:0,top:this.topBottomButtonsElem.nativeElement.offsetHeight+1},this.topBottomButtonsChildElem&&(this.topBotomMarginLeft=
(this.contentSize.width-this.topBottomButtonsChildElem.nativeElement.offsetWidth)/2));break;default:this.leftrightButtonsElem&&(this.contentSize={width:this.clientRect.width-(a.left+a.right+b.left+b.right+c.left+c.right+2*this.leftrightButtonsElem.nativeElement.offsetWidth)-2,height:this.clientRect.height},this.blockElem&&(this.leftRightMarginTop=(this.clientRect.height-this.leftrightButtonsElem.nativeElement.offsetHeight)/2),this.contentPos={left:this.leftrightButtonsElem.nativeElement.offsetWidth+
1,top:0})}this.scrollSize={width:this.itemSize.width*(this.currentList.length-1),height:this.itemSize.height*(this.currentList.length-1)};this.scrollSize.width=0<this.scrollSize.width?this.scrollSize.width:0;this.scrollSize.height=0<this.scrollSize.height?this.scrollSize.height:0;this.maxScrollPos={x:this.scrollSize.width,y:this.scrollSize.height};this.currentScrollPos.x>this.maxScrollPos.x&&this.changeHorizontalScrollPos(this.maxScrollPos.x);this.currentScrollPos.y>this.maxScrollPos.y&&this.changeVerticalScrollPos(this.maxScrollPos.y);
this.clientSpace={width:this.clientRect.width,height:this.clientRect.height}};c.prototype.changeValueTimerElapsed=function(a){0==this.valueCount&&(this.valueCount=this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?this.itemSize.width:this.itemSize.height);this.stopTimer=!1;this.changeValue(a);this.stopTimer&&(clearInterval(this.valueTimer),this.isChangeActive=!1)};c.prototype.changeValue=function(a){this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?a?this.currentScrollPos.x+
this.valueCount<this.maxScrollPos.x?this.changeHorizontalScrollPos(this.currentScrollPos.x+this.valueCount):(this.stopTimer=!0,this.changeHorizontalScrollPos(this.maxScrollPos.x)):0<this.currentScrollPos.x-this.valueCount?this.changeHorizontalScrollPos(this.currentScrollPos.x-this.valueCount):(this.stopTimer=!0,this.changeHorizontalScrollPos(0)):a?this.currentScrollPos.y+this.valueCount<this.maxScrollPos.y?this.changeVerticalScrollPos(this.currentScrollPos.y+this.valueCount):(this.stopTimer=!0,this.changeVerticalScrollPos(this.maxScrollPos.y)):
0<this.currentScrollPos.y-this.valueCount?this.changeVerticalScrollPos(this.currentScrollPos.y-this.valueCount):(this.stopTimer=!0,this.changeVerticalScrollPos(0));this.updateSelection();this.updateView()};c.prototype.prevItem=function(){this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?this.changeHorizontalScrollPos(this.currentScrollPos.x-this.itemSize.width):this.changeVerticalScrollPos(this.currentScrollPos.y-this.itemSize.height);this.updateSelection();this.updateView()};c.prototype.nextItem=
function(){this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?this.changeHorizontalScrollPos(this.currentScrollPos.x+this.itemSize.width):this.changeVerticalScrollPos(this.currentScrollPos.y+this.itemSize.height);this.updateSelection();this.updateView()};c.prototype.startChange=function(a){var b=this;b.valueTimer&&clearInterval(this.valueTimer);b.valueCount=0;b.isChangeActive=!0;b.valueTimer=setInterval(function(){b.changeValueTimerElapsed(a)},100)};c.prototype.stopChange=function(){this.valueTimer&&
clearInterval(this.valueTimer);this.isChangeActive=!1};c.prototype.findItemById=function(a){return this.dataService.findObjectById(a)};c.prototype.findItemByText=function(a){return this.dataService.findObjectByText(a)};c.prototype.callAfterSelectEvent=function(a){a={item:a};this.afterSelect.emit(a);this.selectionChanged.emit(a)};c.prototype.clearPrevSelection=function(){this.currentSelection&&(this.currentSelection[this.options.dataFields.selected]=!1);this.currentSelection=null};c.prototype.processSelection=
function(a,b){var c=!0;if(a)if(this.isItemEnabled(a)){c=this.currentSelection;var e=!0;c&&(e=!this.commonService.isEqual(c[this.options.dataFields.id],a[this.options.dataFields.id])||0==c[this.options.dataFields.selected]);var d={cancel:!1,item:a};this.beforeSelect.emit(d);c=1==d.cancel?!1:!0;e&&1!=d.cancel&&(this.clearPrevSelection(),this.currentSelection=a,a[this.options.dataFields.selected]=!0,e=this.getItemIndex(a),0<=e&&(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?this.changeHorizontalScrollPos(e*
this.itemSize.width):this.changeVerticalScrollPos(e*this.itemSize.height)),this.callAfterSelectEvent(a),this.refresh())}else this.clearPrevSelection(),this.refresh(),this.selectionChanged.emit({item:null});return c};c.prototype.updateSelection=function(){var a=this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?Math.floor(this.currentScrollPos.x/this.itemSize.width):Math.floor(this.currentScrollPos.y/this.itemSize.height);this.isIndexInRange(a)&&this.processSelection(this.currentList[a].data)};
c.prototype.applySorting=function(a){var b=this;a&&(b.sortComparer?a.sort(b.sortComparer):b.isSortingAllowed()&&a.sort(function(a,c){var d,e;(d=a[b.options.dataFields.value])||(d=a[b.options.dataFields.text]);b.commonService.isObject(d)&&(d=d.value?d.value:d.text);(e=c[b.options.dataFields.value])||(e=c[b.options.dataFields.text]);b.commonService.isObject(e)&&(e=e.value?e.value:e.text);d=void 0!=d?d:null;e=void 0!=e?e:null;switch(b.options.sorting){case integralui_core_1.IntegralUISortOrder.Ascending:if(d<
e)return-1;if(d>e)return 1;break;case integralui_core_1.IntegralUISortOrder.Descending:if(d>e)return-1;if(d<e)return 1;break;default:return 0}}))};c.prototype.isSortingAllowed=function(){return this.options.sorting==integralui_core_1.IntegralUISortOrder.Ascending||this.options.sorting==integralui_core_1.IntegralUISortOrder.Descending};c.prototype.sort=function(a,b){this.options.sorting=a;this.sortComparer=b?b:null;this.updateLayout();this.change.emit({type:"sorting"})};c.prototype.getControlStyle=
function(){var a={};this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?a.height=this.currentItemSize.height+2+"px":a.width=this.currentItemSize.width+2+"px";return a};c.prototype.updateItemStyle=function(a){a&&(a.style={general:[],content:[]},a.style.general.push(this.itemClassName),a.style.general.push(this.options.currentStyle.item.general.normal),a.style.content.push(this.itemContentClassName),a.style.content.push(this.options.currentStyle.item.content.normal),this.isItemEnabled(a.data)?
this.isItemSelected(a.data)?(a.style.general.push(this.options.currentStyle.item.general.selected),a.style.content.push(this.options.currentStyle.item.content.selected)):this.isItemHovered(a.data)&&(a.style.general.push(this.options.currentStyle.item.general.hovered),a.style.content.push(this.options.currentStyle.item.content.hovered)):(a.style.general.push(this.options.currentStyle.item.general.disabled),a.style.content.push(this.options.currentStyle.item.content.disabled)),a.data==this.currentFocusItem&&
a.style.general.push(this.options.currentStyle.item.general.focused))};c.prototype.getItemStyle=function(a){return a?{general:this.getItemGeneralStyle(a.general),content:this.getItemContentStyle(a.content)}:this.getDefaultItemStyle()};c.prototype.getItemGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemClassName+"-focused"),normal:this.commonService.isFieldAvailable(a.normal,
this.itemClassName),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemClassName+"-hovered"),selected:this.commonService.isFieldAvailable(a.selected,this.itemClassName+"-selected")}:this.getDefaultItemGeneralStyle()};c.prototype.getItemContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemContentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemContentClassName+"-focused"),
normal:this.commonService.isFieldAvailable(a.normal,this.itemContentClassName),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemContentClassName+"-hovered"),selected:this.commonService.isFieldAvailable(a.selected,this.itemContentClassName+"-selected")}:this.getDefaultItemContentStyle()};c.prototype.getDefaultListStyle=function(){return{general:this.getDefaultGeneralStyle(),item:this.getDefaultItemStyle()}};c.prototype.getDefaultItemStyle=function(){return{general:this.getDefaultItemGeneralStyle(),
content:this.getDefaultItemContentStyle()}};c.prototype.getDefaultItemGeneralStyle=function(){return{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,normal:this.defaultStyle.item.general.normal,hovered:this.defaultStyle.item.general.hovered,selected:this.defaultStyle.item.general.selected}};c.prototype.getDefaultItemContentStyle=function(){return{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,normal:this.defaultStyle.item.content.normal,
hovered:this.defaultStyle.item.content.hovered,selected:this.defaultStyle.item.content.selected}};c.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),item:this.getItemStyle(a.item)}:this.getDefaultListStyle()};c.\u0275fac=function(a){return new (a||c)(i0.\u0275\u0275directiveInject(i1.IntegralUIDataService),i0.\u0275\u0275directiveInject(i0.ElementRef),i0.\u0275\u0275directiveInject(i2.IntegralUICommonService),i0.\u0275\u0275directiveInject(i0.ComponentFactoryResolver))};
c.\u0275cmp=i0.\u0275\u0275defineComponent({type:c,selectors:[["iui-listscroller"]],contentQueries:function(a,b,c){a&1&&i0.\u0275\u0275contentQuery(c,core_1.TemplateRef,!0);if(a&2){var e;i0.\u0275\u0275queryRefresh(e=i0.\u0275\u0275loadQuery())&&(b.itemTemplate=e.first)}},viewQuery:function(a,b){a&1&&(i0.\u0275\u0275viewQuery(_c0,!0),i0.\u0275\u0275viewQuery(_c1,!0),i0.\u0275\u0275viewQuery(_c2,!0),i0.\u0275\u0275viewQuery(_c3,!0));if(a&2){var c;i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&
(b.blockElem=c.first);i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.leftrightButtonsElem=c.first);i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.topBottomButtonsElem=c.first);i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.topBottomButtonsChildElem=c.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",items:"items",itemSize:"itemSize",mouseWheelSpeed:"mouseWheelSpeed",scrollMode:"scrollMode",
selectedItem:"selectedItem",sorting:"sorting"},outputs:{afterSelect:"afterSelect",beforeSelect:"beforeSelect",change:"change",clear:"clear",itemAdding:"itemAdding",itemAdded:"itemAdded",itemRemoving:"itemRemoving",itemRemoved:"itemRemoved",scrollModeChanged:"scrollModeChanged",scrollPosChanged:"scrollPosChanged",selectionChanged:"selectionChanged",updateComplete:"updateComplete"},features:[i0.\u0275\u0275ProvidersFeature([integralui_data_service_1.IntegralUIDataService]),i0.\u0275\u0275InheritDefinitionFeature],
decls:4,vars:4,consts:[[3,"ngClass","ngStyle","DOMMouseScroll","mousewheel","scroll"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"iui-listscroller-updown-buttons",3,"click","mousedown","mouseup"],["topBottomButtons",""],[1,"iui-listscroller-updown-increase",3,"ngStyle"],["topBottomButtonsChild",""],[3,"ngStyle"],["block",""],[3,"ngClass","ngStyle","click","mousedown","mouseup","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"iui-listscroller-updown-buttons",2,"position","absolute",
"bottom","0",3,"ngStyle","click","mousedown","mouseup"],[1,"iui-listscroller-updown-decrease",3,"ngStyle"],[3,"ngClass","ngStyle","click","mousedown","mouseup","mouseenter","mouseleave"],["itemElem",""],[3,"ngClass","tabindex"],[3,"iuiTemplateOutlet","iuiTemplateOutletContext"],[1,"iui-listscroller-leftright-buttons",2,"float","left",3,"ngStyle","click","mousedown","mouseup"],["leftrightButtons",""],[1,"iui-listscroller-leftright-decrease"],[1,"iui-listscroller-leftright-buttons",2,"float","right",
3,"ngStyle","click","mousedown","mouseup"],[1,"iui-listscroller-leftright-increase"]],template:function(a,b){a&1&&(i0.\u0275\u0275elementStart(0,"div",0),i0.\u0275\u0275listener("DOMMouseScroll",function(a){return b.ctrlMouseWheel(a)})("mousewheel",function(a){return b.ctrlMouseWheel(a)})("scroll",function(a){return b.onScroll(a)}),i0.\u0275\u0275elementStart(1,"span",1),i0.\u0275\u0275template(2,IntegralUIListScroller_span_2_Template,10,17,"span",2),i0.\u0275\u0275template(3,IntegralUIListScroller_span_3_Template,
9,14,"span",3),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementEnd());a&2&&(i0.\u0275\u0275property("ngClass",b.getControlClass())("ngStyle",b.getControlStyle()),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngSwitch",b.scrollMode),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngSwitchCase",1))},directives:[i3.NgClass,i3.NgStyle,i3.NgSwitch,i3.NgSwitchCase,i3.NgSwitchDefault,i3.NgForOf,i4.IntegralUITemplateOutlet],encapsulation:2});return c}(integralui_core_1.IntegralUIBaseComponent);
exports.IntegralUIListScroller=IntegralUIListScroller;
(function(){i0.\u0275setClassMetadata(IntegralUIListScroller,[{type:core_1.Component,args:[{selector:"iui-listscroller",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" (DOMMouseScroll)="ctrlMouseWheel($event)" (mousewheel)="ctrlMouseWheel($event)" (scroll)="onScroll($event)">\n            <span [ngSwitch]="scrollMode">\n                <span *ngSwitchCase="1">\n\t\t\t\t\t<div class="iui-listscroller-updown-buttons" (click)="prevItem()" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" #topBottomButtons>\n\t\t\t\t\t\t<span class="iui-listscroller-updown-increase" [ngStyle]="{ \'margin-left\': topBotomMarginLeft + \'px\' }" #topBottomButtonsChild></span>\n\t\t\t\t\t</div>\n\t\t\t\t    <ul [ngStyle]="{ \'left\': contentPos.left + \'px\', \'top\': contentPos.top + \'px\', width: contentSize.width + \'px\', height: contentSize.height + \'px\', opacity: contentOpacity }" #block>\n\t\t\t\t        <li [ngClass]="item.style.general" *ngFor="let item of scrollItemList; let i = index" (click)="itemClickEvent($event, item)" (mousedown)="itemMouseDown($event, item)" (mouseup)="itemMouseUp($event, item)" (mouseenter)="itemMouseEnter($event, item)" (mouseleave)="itemMouseLeave($event, item)" [ngStyle]="{ \'position\': \'absolute\', \'top\': item.position.y + \'px\', \'left\': item.position.x + \'px\', width: currentItemSize.width + \'px\', height: currentItemSize.height + \'px\' }" #itemElem>\n\t\t\t\t            <div [ngClass]="item.style.content" tabindex="{{item.tabIndex}}">\n\t\t\t\t\t\t\t\t<span [iuiTemplateOutlet]="itemTemplate" [iuiTemplateOutletContext]="{$implicit: (item.data)}"></span>\n\t\t\t\t            </div>\n\t\t\t\t        </li>\n\t\t\t\t    </ul>\n\t\t\t\t\t<div class="iui-listscroller-updown-buttons" (click)="nextItem()" (mousedown)="onMouseDown($event, true)" (mouseup)="onMouseUp($event)" style="position:absolute;bottom:0;" [ngStyle]="{ width: contentSize.width - 2 + \'px\' }">\n\t\t\t\t\t\t<span class="iui-listscroller-updown-decrease" [ngStyle]="{ \'margin-left\': topBotomMarginLeft + \'px\' }"></span>\n\t\t\t\t\t</div>\n                </span>\n                <span *ngSwitchDefault>\n\t\t\t\t\t<div class="iui-listscroller-leftright-buttons" style="float:left" [ngStyle]="{ \'margin-top\': leftRightMarginTop + \'px\' }" (click)="prevItem()" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" #leftrightButtons>\n\t\t\t\t\t\t<span class="iui-listscroller-leftright-decrease"></span>\n\t\t\t\t\t</div>\n\t\t\t\t    <ul [ngStyle]="{ \'left\': contentPos.left + \'px\', \'top\': contentPos.top + \'px\', width: contentSize.width + \'px\', height: contentSize.height + \'px\', opacity: contentOpacity }" #block>\n\t\t\t\t        <li [ngClass]="item.style.general" *ngFor="let item of scrollItemList; let i = index" (click)="itemClickEvent($event, item)" (mousedown)="itemMouseDown($event, item)" (mouseup)="itemMouseUp($event, item)" (mouseenter)="itemMouseEnter($event, item)" (mouseleave)="itemMouseLeave($event, item)" [ngStyle]="{ \'position\': \'absolute\', \'top\': item.position.y + \'px\', \'left\': item.position.x + \'px\', width: currentItemSize.width + \'px\', height: currentItemSize.height + \'px\' }" #itemElem>\n\t\t\t\t            <div [ngClass]="item.style.content" tabindex="{{item.tabIndex}}">\n\t\t\t\t\t\t\t\t<span [iuiTemplateOutlet]="itemTemplate" [iuiTemplateOutletContext]="{$implicit: (item.data)}"></span>\n\t\t\t\t            </div>\n\t\t\t\t        </li>\n\t\t\t\t    </ul>\n\t\t\t\t\t<div class="iui-listscroller-leftright-buttons" style="float:right" [ngStyle]="{ \'margin-top\': leftRightMarginTop + \'px\' }" (click)="nextItem()" (mousedown)="onMouseDown($event, true)" (mouseup)="onMouseUp($event)">\n\t\t\t\t\t\t<span class="iui-listscroller-leftright-increase"></span>\n\t\t\t\t\t</div>\n                </span>\n            </span>\n\t\t</div>\n    ',inputs:"controlStyle data enabled name size state".split(" "),
providers:[integralui_data_service_1.IntegralUIDataService]}]}],function(){return[{type:i1.IntegralUIDataService},{type:i0.ElementRef},{type:i2.IntegralUICommonService},{type:i0.ComponentFactoryResolver}]},{itemTemplate:[{type:core_1.ContentChild,args:[core_1.TemplateRef,{"static":!1}]}],blockElem:[{type:core_1.ViewChild,args:["block",{"static":!1}]}],leftrightButtonsElem:[{type:core_1.ViewChild,args:["leftrightButtons",{"static":!1}]}],topBottomButtonsElem:[{type:core_1.ViewChild,args:["topBottomButtons",
{"static":!1}]}],topBottomButtonsChildElem:[{type:core_1.ViewChild,args:["topBottomButtonsChild",{"static":!1}]}],items:[{type:core_1.Input}],itemSize:[{type:core_1.Input}],mouseWheelSpeed:[{type:core_1.Input}],scrollMode:[{type:core_1.Input}],selectedItem:[{type:core_1.Input}],sorting:[{type:core_1.Input}],afterSelect:[{type:core_1.Output}],beforeSelect:[{type:core_1.Output}],change:[{type:core_1.Output}],clear:[{type:core_1.Output}],itemAdding:[{type:core_1.Output}],itemAdded:[{type:core_1.Output}],
itemRemoving:[{type:core_1.Output}],itemRemoved:[{type:core_1.Output}],scrollModeChanged:[{type:core_1.Output}],scrollPosChanged:[{type:core_1.Output}],selectionChanged:[{type:core_1.Output}],updateComplete:[{type:core_1.Output}]})})();