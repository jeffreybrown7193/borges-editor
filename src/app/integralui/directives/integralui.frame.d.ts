import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIFrame {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer2;
    protected commonService?: IntegralUICommonService;
    private isActive;
    private startPos;
    private currentPos;
    private newSizeDistance;
    private parentElem;
    private resizerElem;
    private _elRend;
    settings: any;
    sizeChanging: EventEmitter<any>;
    sizeChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer2, commonService?: IntegralUICommonService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseEnter(e: any): void;
    onMouseLeave(): void;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    private hideFrame;
    private showFrame;
    private getElemSize;
    updateSize(value: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIFrame, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUIFrame, "[iuiFrame]", never, { "settings": "iuiFrame"; }, { "sizeChanging": "sizeChanging"; "sizeChanged": "sizeChanged"; }, never>;
}
