function movieInformation (movie) {
    console.log( movie.title + " last for " + movie.duration + ". Stars:" + movie.stars)
}
const movie = {
    title: 'Puff the Magic Dragon',
    duration: '30 minutes',
    stars: 'Puff, Jackie, Living Sneezes'
}

movieInformation(movie)