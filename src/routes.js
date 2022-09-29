
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CadastroCliente from './pages/CadastroCliente'
import ContaCorrente from './pages/ContaCorrente'
import Financiamento from './pages/Financiamento'
import SobreNos from './pages/SobreNos'
import Header from './Componentes/Header'

function RouterApp() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='cadastrocliente' element={<CadastroCliente />} />
                    <Route path='contacorrente' element={<ContaCorrente />} />
                    <Route path='financiamento' element={<Financiamento />} />
                    <Route path='sobrenos' element={<SobreNos />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RouterApp;

