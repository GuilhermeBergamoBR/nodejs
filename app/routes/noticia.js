module.exports = application => {
	application.get('/noticia', (req, res) => {
		var connection = application.config.dbConnection();
		var noticiaModel = application.app.models.noticiasModel;

		noticiaModel.getNoticia(connection, (error, result) => {
			res.render('noticias/noticia', { noticia: result });
		});
	});
};
