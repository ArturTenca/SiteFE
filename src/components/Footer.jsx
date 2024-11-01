import {FooterStyle} from '../css/FooterStyle'
import { Link } from 'react-router-dom'
import mahindra from "../../public/mahindrab.png"
import email from "../../public/icons8-nova-mensagem-24.png"
import insta from "../../public/icons8-instagram-24.png"
import linha1 from "../../public/Line 10.png"
import linha2 from "../../public/Line 11.png"
import logob from "../../public/logob.png"
import fe from "../../public/Fe.png"


const Footer = () => {
    return (
        <FooterStyle>
            <section className='footer1'>
                <div className='div'>
                    <img src={mahindra} alt="techmahindra" className='img' />
                    <div className='email'>
                        <img src={email} alt="" />
                        <p>Contato@TechMahindra.com.br</p>
                    </div>

                    <div className='insta'>
                        <img src={insta} alt="" />
                        <a href="https://www.instagram.com/techmahindra_official/">Tech Mahindra</a>
                    </div>
                </div>

                <img src={linha1} alt="" className='line' />
                <img src={linha2} alt="" className='line1' />


                <div className='div'>
                    <img src={fe} alt="" className='img' />
                    <div className='email'>
                        <img src={email} alt="" />
                        <p>Contato@FormulaE.com.br</p>
                    </div>

                    <div className='insta'>
                        <img src={insta} alt="" />
                        <a href="https://www.instagram.com/fiaformulae/">Formula E</a>
                    </div>
                </div>

                <img src={linha1} alt="" className='line' />
                <img src={linha2} alt="" className='line1' />

                <div className='Div1'>
                    <img src={logob} alt="" className='imlogo' />
                    <div className='email'>
                        <img src={email} alt="" />
                        <p>Contato@DataSphere.com.br</p>
                    </div>

                    <div className='insta'>
                        <img src={insta} alt="" />
                        <a href="https://www.instagram.com/datasphere_solutions/">Data Sphere</a>
                    </div>
                </div>
            </section>

            <section className='footer2'>
                <nav>
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/Atividades" className="navLink">Atividades</Link>
                    <Link to='/login' className="navLink">Login</Link>
                    <Link to='/login' className="navLink">Agendamentos</Link>
                </nav>

                <h5>@2024 - Todos direitos reservados à DataSphere/TechMahindra/FormulaE</h5>
            </section>
        </FooterStyle>
    )
}
export default Footer