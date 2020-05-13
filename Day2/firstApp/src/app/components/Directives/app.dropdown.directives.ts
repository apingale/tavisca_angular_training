import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-dropdown-directives',
    templateUrl: './app.dropdown.directives..html'
})

// tslint:disable-next-line: component-class-suffix
export class DropDownDirective implements OnInit {

    ngOnInit(): void {
        
    }
    private _DataSource: Array<any>;
    // an event that will be emitted
    // with payload as generic data
    // in this case data type is 'any'
    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onSelection: EventEmitter<any>;

    constructor() {
        this._DataSource = new Array<any>();
        this.onSelection = new EventEmitter<any>();
    }

    @Input()
    set DataSource(val: Array<any>) {
        if (val.length > 0) {
            this._DataSource = val;
        } else {
            this._DataSource = new Array<any>();
        }
    }

    get DataSource(): Array<any> {
        return this._DataSource;
    }

    optionSelected(r: any) {
        // emit() method will emit an event
        this.onSelection.emit(r);
    }
}