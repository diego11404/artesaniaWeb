"use strict"
class CError {
    error401(req, res, next) {
        let err = new Error()
        err.status = 401
        err.statusText = 'Usuario no encontrado' 
        res.render('error', { error: err , title: "Error " , user: ""})
    }
    error404(req, res, next) {
        let err = new Error()
        err.status = 404
        err.statusText = 'La página que estás buscando no se puede encontrar'
        res.render('error', { error: err , title: "Error " , user: ""})
    }
    error500(req, res, next) {
        let err = new Error()
        err.status = 500
        err.statusText = 'Internal Server Error'
        res.render('error', { error: err , title: "Error " , user: ""})
    }
}
module.exports = new CError()