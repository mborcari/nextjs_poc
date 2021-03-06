export default function Header({nome}) {
    return (
        <header>
            <div className="block bg-darkcyan text-white">
                <nav className="navbar navbar-expand-lg">
                    <div className="collapse navbar-collapse justifica-conteudo-centro fs-20" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/Blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/Sobre">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/Descricao">Descrição</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="block">
                    <div className="block-content">
                        <div className="media my-pb-3">
                            <img className="rounded-circle align-self-center mr-3" src="./img/dog.jpg" alt="Dog no PC"/>
                            <div className="media-body mt-4">
                                <h2 className="my-4">{nome}</h2>
                                <p> Maluco que aprendeu a programar depois de trabalhar com redes de computadores e servidores. Minha primeira experiência com desenvolvimento foi com a linguagem Javascript e C++. 
                                    Depois aprendi atrabalhar com Python, automatizando tarefas e criando aplicação Web com o framework Django.
                                    Agora pretendo aprender sobre React.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}