// Recupera o oobjeto noticias e realiza uma interação, criando quantos objetos tiver
export default function ElementsSection (param) {
    const noticias = param.noticias;
    const listanoticias = noticias.map( (noticia, index) =>
                    (
                        <div key={index}  className="row justifica-conteudo-centro mt-4">
                            <div className="col-md-8 col-md-offset-4">
                                <h3 className='text-flowerblue'>{noticia.title}</h3>
                                <p>{noticia.description}</p>
                            </div>
                        </div>
                    )
            )
    
        
    return (
        <div className="block-content justifica-conteudo-centro my-mt-3">
            <div className="row justifica-conteudo-centro mt-4">
                <div className="col-md-8 col-md-offset-4">
                    <h1>Últimas notícias do blog</h1>
                </div>
            </div>
            {listanoticias}
        </div>
    )
}