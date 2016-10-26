var $ = require('jquery');
// var Person = require('./modules/Person');

// ES6 way, idem que node js. On peut utiliser cette syntaxe puisque Babel est installé
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.payTaxes();
jane.greet();

$("h1").remove();