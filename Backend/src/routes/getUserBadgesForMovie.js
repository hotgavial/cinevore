const sequelize = require('../db/sequelize');
const { Op } = require('sequelize');
const { Actor, Movie, Review, User, Badge, ActorMovie } = require('../models/Associations');

async function createBadge(category, step, idUser, title, totalUsers, whereClause) {
    let totalMovies = 0
    const badge = await Badge.findOne({
        where: {
            idUser: idUser,
            title: title
        }
    })
    if(!badge) {
        return  {
            title: title,
            category: category,
            currentLevel: 0,
            moviesSeen: 0,
            target: step,
            progress: '0%',
            ranking: totalUsers,
            totalParticipants: totalUsers
        }
    }
    const ranking = await Badge.count({
        where: {
            title: title,
            moviesSeen: {
                [Op.gt]: badge.moviesSeen
            }
        }
    })
    currentLevel = Math.floor(badge.moviesSeen / step)
    if(['actress', 'actor', 'director'].includes(category)) {
        totalMovies = await ActorMovie.count({
            where: {
                idActor: whereClause
            }
        })
    }
    if(category === 'year') {
        totalMovies = await Movie.count({
            where: {
                year: whereClause
            }
        })
    }
    if(category === 'decade') {
        totalMovies = await Movie.count({
            where: {
                year: {
                    [Op.between]: [whereClause, whereClause + 9],
                }
            }
        })
    }
    const target = totalMovies > currentLevel * step + step ? currentLevel + step : totalMovies
    const progress = badge.moviesSeen / target * 100
    const newBadge = {
        title: title,
        category: category,
        currentLevel: currentLevel,
        moviesSeen: badge.moviesSeen,
        target: target,
        progress: `${progress}%`,
        ranking: ranking + 1,
        totalParticipants: totalUsers
    }
    return newBadge
  }

module.exports = (app) => {
    app.get('/api/badges/:idMovie/:idUser', async (req, res) => {
        const badges = []
        
        try {
            const idMovie = req.params.idMovie
            const idUser = req.params.idUser

            const totalUsers = await User.count()

            const movie = await Movie.findByPk(idMovie, {
                include: [
                    {
                        model: Actor,
                        include: Movie
                    }
                ]
            })
            
            let badge = {}
            let category = ''
            let title = ''

            badge = await createBadge('year', 30, idUser, `Films de ${movie.year}`, totalUsers, movie.year)
            badges.push(badge)

            let decade = movie.year.toString().slice(0, -1) + "0";
            decade = parseInt(decade)
            badge = await createBadge('decade', 60, idUser, `Films des années ${decade}`, totalUsers, decade)
            badges.push(badge)
            
            for (let actor of movie.Actors) {
                if(actor.hasBadge && ['actor', 'director'].includes(actor.job)) {
                    if (actor.job === 'director') {
                        category = 'director'
                        title = `Films de ${actor.firstName} ${actor.lastName}`
                        badge = await createBadge(category, 5, idUser, title, totalUsers, actor.idActor)
                    } else {
                        category = actor.isMale ? 'actor' : 'actress'
                        title = `Films avec ${actor.firstName} ${actor.lastName}`
                        badge = await createBadge(category, 10, idUser, title, totalUsers, actor.idActor)
                    }
                    badges.push(badge)
                }
            }

            return res.json(badges);
        } catch (error) {
            console.error('Error while trying to get badge data', error);
            return res.status(500).json({ message: 'Error while trying to get badge data' });
        }
    })
}