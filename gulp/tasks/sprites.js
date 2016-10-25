var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

var config = {
	mode : {
		css: {
			sprite: 'sprite.svg',
			render : {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};

// On supprime toute occurence existante. Sinon il y aura plusieurs fichiers si l'on vient à ajouté, supprimer une sprite
gulp.task('beginClean', function() {
	return del(['./app/temp/sprite/', './app/assets/images/sprites']);
});

// On crée la sprite
// L'array signifie que la tâche lancée dépend de celle entre crochet. Tant que celle entre crochet n'est pas finie, la tâche ne se lance pas
gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
	.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
	return del(['./app/temp/sprite/', './app/assets/images/sprites']);
});

// On nettoie le dossier
gulp.task('endClean', ['copySpriteGraphic','copySpriteCSS'], function() {
	return del('./app/temp/sprite/');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);