import { AbstractControl, ValidatorFn } from '@angular/forms';

export class UniqueFieldValidator {
    static HasUnique(source: number[]): ValidatorFn {
        return (ctrl: AbstractControl): { [key: string]: boolean } | null => {
            const val: number = parseInt(ctrl.value);
            if (source.includes(val)) {
                return { notunique: true };
            } else {
                return null;
            }
        }
    }
}

export class FirstCharacterUpperCaseFieldValidator {
    static checkUpperCase(cntrl: AbstractControl): any {
        const val: string = cntrl.value;
        const char = val.charAt(0);
        if (char === char.toLocaleUpperCase()) {
            return null;
        } else if (char === char.toLocaleLowerCase()) {
            return { notuppercase: true };
        }
    }
}
    
