import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIContentVisibility, IntegralUISelectionMode } from '../../../integralui/components/integralui.core';
import { IntegralUITreeView } from '../../../integralui/components/integralui.treeview';

@Component({
  selector: 'app-project-files',
  templateUrl: './project-files.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProjectFilesComponent {
  @ViewChild('application', {read: ViewContainerRef, static: true}) applicationRef: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview: IntegralUITreeView;

    public items: Array<any>;

    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false;
    public hoverItem: any = null;

    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;

    public ctrlStyle: any = {
        general: {
            normal: 'trw-overview'
        }
    }

    constructor(){
        this.items = [
            {
                id: 1,
                text: "Favorites",
                icon: "computer-icons favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop", icon: "computer-icons empty-doc" },
                    { id: 12, pid: 1, text: "Downloads", icon: "computer-icons downloads", checkState: "checked" }
                ]
            },
            {
                id: 2,
                text: "Libraries",
                icon: "computer-icons folder",
                expanded: false,
                items: [
                    {
                        id: 21,
                        pid: 2,
                        text: "Documents",
                        icon: "computer-icons documents",
                        expanded: false,
                        checkState: "checked",
                        items: [
                            { id: 211, pid: 21, text: "My Documents", icon: "computer-icons empty-doc", checkState: "checked" },
                            { id: 212, pid: 21, text: "Public Documents", icon: "computer-icons empty-doc", checkState: "checked" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music", icon: "computer-icons music" },
                    { id: 23, pid: 2, text: "Pictures", icon: "computer-icons pictures", checkState: "checked" },
                    { id: 24, pid: 2, text: "Videos", icon: "computer-icons videos" }
                ]
            },
            {
                id: 3,
                text: "Computer",
                icon: "computer-icons pc",
                checkState: "checked",
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", icon: "computer-icons disk", checkState: "checked" },
                    { id: 32, pid: 3, text: "Storage (D:)", icon: "computer-icons disk", checkState: "checked" }
                ]
            },
            { id: 4, text: "Network", icon: "computer-icons network" },
            { id: 5, text: "Recycle Bin", icon: "computer-icons recycle" }
        ];
    }

    ngAfterViewInit(){
        let self = this;

        let initTimeout = setTimeout(function(){
            let list = self.treeview.getFullList();
            for (let i = 0; i < list.length; i++)
                self.updateParentItemCheckValue(list[i]);

            clearTimeout(initTimeout);
        }, 250);
    }

    // Edit Item ---------------------------------------------------------------------------------

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    showEditor(item: any){
        this.originalText = item.text;
        this.isEditActive = true;
        this.editItem = item;
        this.editorFocused = true;

        item.allowDrag = false;
    }

    closeEditor(){
        if (this.editItem)
            this.editItem.allowDrag = true;

        this.editItem = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        if (this.editItem){
            switch (e.keyCode){
                case 13: // ENTER
                    this.closeEditor();
                    this.treeview.updateLayout();
                    break;

                case 27: // ESCAPE
                    this.editItem.text = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editItem)
            this.editItem.text = this.originalText;

        this.closeEditor();
    }

    // Item CheckBox -----------------------------------------------------------------------------

    checkItem(e: any, item: any){
        if (item){
            let checkValue = this.getItemCheckValue(item);
            switch (checkValue){
                case 'unchecked':
                    checkValue = 'checked';
                    break;

                case 'indeterminate':
                    checkValue = 'checked';
                    break;

                case 'checked':
                    checkValue = 'unchecked';
                    break;
            }

            this.updateCheckValue(item, checkValue);

            this.updateChildItemCheckValue(item);
            this.updateParentItemCheckValue(item);
        }

        e.stopPropagation();
    }

    getItemCheckValue(item: any){
        if (item)
            return item.checkState == undefined ? 'unchecked' : item.checkState;

        return 'unchecked';
    }

    updateCheckValue(item: any, value: string){
        if (item){
            switch (value){
                case 'unchecked':
                    item.checkState = 'unchecked';
                    break;

                case 'indeterminate':
                    item.checkState = 'indeterminate';
                    break;

                case 'checked':
                    item.checkState = 'checked';
                    break;
            }
        }
    }

    // Update the checkbox of parent items
    updateParentItemCheckValue(item: any){
        let parent = this.treeview.getItemParent(item);
        while (parent){
            let list = parent.items;

            if (list){
                let checkCount = 0;
                let indeterminateCount = 0;
                for (let i = 0; i < list.length; i++){
                    let checkValue = this.getItemCheckValue(list[i]);
                    if (checkValue == 'checked')
                        checkCount++;
                    else if (checkValue == 'indeterminate')
                        indeterminateCount++;
                }

                let parentCheckValue = 'unchecked';
                if (checkCount == list.length)
                    parentCheckValue = 'checked';
                else if (checkCount > 0 || indeterminateCount > 0)
                    parentCheckValue = 'indeterminate';

                this.updateCheckValue(parent, parentCheckValue);
            }

            parent = this.treeview.getItemParent(parent);
        }
    }

    // Update the checkbox of child items
    updateChildItemCheckValue(parent: any){
        if (parent && parent.items){
            for (let i = 0; i < parent.items.length; i++){
                let checkValue = this.getItemCheckValue(parent);
                if (checkValue == 'checked')
                    this.updateCheckValue(parent.items[i], 'checked');
                else
                    this.updateCheckValue(parent.items[i], 'unchecked');

                this.updateChildItemCheckValue(parent.items[i]);
            }
        }
    }

    getCheckBoxClass(item: any){
        let cbClass: string = 'trw-overview-item-cbox';

        switch (item.checkState){
            case 'indeterminate':
                cbClass += ' trw-overview-item-cbox-indeterminate';
                break;

            case 'checked':
                cbClass += ' trw-overview-item-cbox-checked';
                break;
        }

        return cbClass;
    }

    onAfterExpand(e: any){
        this.treeview.updateLayout();
    }
}
