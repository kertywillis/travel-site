class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}
	greet() {
		console.log("Hi there, my name is " +this.name+ " and my favorite color is " +this.favoriteColor+ ".");
	}
}

// module.exports = Person;

// Es6 way, plus haut moanière node. On peut utiliser cette syntaxe puisque Babel est installé
export default Person;
