
import {HomeStyle}  from "../css/HomeStyle"
import mah from '../../public/mahindra.png'
import dot from '../../public/dot.png'
import fe from '../../public/Formula_E2.png'
import teste from '../../public/data.png'
const Home = () => {
    return (

        <HomeStyle>
            <section class="form-container">
                <div class="container">
                    <form>
                        <div className="logos">
                            <img className="fe" src={fe} alt="Formula1" />
                            <img className="dot" src={dot} alt="teste" />
                            <img className="mahindra" src={mah} alt="teste" />
                        </div>
                        <p>A Tech Mahindra em parceria com a Formula E colaboraram para aprimorar o desenvolvimento de soluções tecnológicas e digitais nas experiências da Formula E no Brasil. As mesmas colaboraram com a Data Sphere Solutions para expandir a popularidade da categoria no país.</p>
                    </form>
                </div>
            </section>

            <section class="form-container">
                <div class="container2">
                    <form className="form2">
                        <h2>O que é a Data Sphere?</h2>
                        <img src={teste} alt="teste" />
                        <p>Data Sphere é uma empresa fictícia criada para simular uma equipe do mercado representando ao nosso grupo para as entregas dos trabalhos. Nossa solução para este problema foi a criação de atividades escolares. Para mais informações, veja a página de <a href="/atividades">Atividades</a>. </p>
                    </form>
                </div>

            </section>
        </HomeStyle>

    )
}
export default Home