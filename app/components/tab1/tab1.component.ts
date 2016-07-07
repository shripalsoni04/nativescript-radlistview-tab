import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RadListViewComponent, ListViewHeaderDirective, ListViewItemDirective } from 'nativescript-telerik-ui/listview/angular';

@Component({
    selector: 'tab1',
    templateUrl: 'components/tab1/tab1.component.html',
    styleUrls: ['components/tab1/tab1.component.css'],
    directives: [RadListViewComponent, ListViewHeaderDirective, ListViewItemDirective],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Tab1Component{

    listData: any[];
    constructor(){
        this.listData = [
            {text: 'item1'},
            {text: 'item2'},
            {text: 'item3'},
            {text: 'item4'},
            {text: 'item5'},
            {text: 'item6'},
            {text: 'item7'},
            {text: 'item8'},
            {text: 'item9'},
            {text: 'item10'}
        ];
    }
}