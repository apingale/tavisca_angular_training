// EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
//       - Find out the indexes and occurances of character 'a' in it
//       - Findout number of statements in the string. (value after . symbol) 
//       - Convert the first character of the statement in Upper case.

class Logic {
    private str : string;
    constructor(str1: string) {
        this.str = str1;
    }

    getIndexs(matchString: string): Array<number> {
        let indexs = new Array<number>();
        for (var i = 0; i < this.str.length; i++) {
            if(this.str.charAt(i) == matchString)
                indexs.push(i);

        }
        return indexs;
    }

    getNumberOfStatements() : number{        
        return this.str.split('.').length;
    }

    toStatementUpperCase() : string {   
        let str2 : string = this.str;
        this.str.split('.').forEach((statement:string)=> {
            let statementInUpperCase = statement.replace(statement.trim().charAt(0), statement.trim().charAt(0).toLocaleUpperCase());
            str2 = str2.replace(statement, statementInUpperCase);
        });
        return str2;
    }
}

let logic = new Logic("lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean m");
console.log("Indexes for occurences of 'a' -" + JSON.stringify(logic.getIndexs('a')));
console.log("Number of statements - " + JSON.stringify(logic.getNumberOfStatements()));
console.log("Statements in upper cases - " + logic.toStatementUpperCase());


 
