
const authorise = (req, res, next) => {

    const { user } = req.query;
    if (user === '007' ) {
        req.user = { name: 'James', id: '007'}
        console.log('authorised')
        next()
    } else {
        res.status(401).json({error: 'Unauthorised'})
    }
}

module.exports = authorise;