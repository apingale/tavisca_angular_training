"use strict";
exports.__esModule = true;
var Logic = /** @class */ (function () {
    function Logic(str1) {
        this.str = str1;
    }
    Logic.prototype.getIndexs = function (matchString) {
        var indexs = new Array();
        for (var i = 0; i < this.str.length; i++) {
            if (this.str.charAt(i) == matchString)
                indexs.push(i);
        }
        return indexs;
    };
    Logic.prototype.getNumberOfStatements = function () {
        return this.str.split('.').length;
    };
    Logic.prototype.toStatementUpperCase = function () {
        var str2 = this.str;
        this.str.split('.').forEach(function (statement) {
            var statementInUpperCase = statement.replace(statement.trim().charAt(0), statement.trim().charAt(0).toLocaleUpperCase());
            str2 = str2.replace(statement, statementInUpperCase);
        });
        return str2;
    };
    return Logic;
}());
var logic = new Logic("lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean m");
console.log("Indexes for occurences of 'a' -" + JSON.stringify(logic.getIndexs('a')));
console.log("Number of statements - " + JSON.stringify(logic.getNumberOfStatements()));
console.log("Statements in upper cases - " + logic.toStatementUpperCase());
