module.exports = app => {
  // exporta como módulo a função de GET para a rota /formulario_inclusao_noticia
  app.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia"); // chama a view form_add_noticia
  });
};
