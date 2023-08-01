import { Outlet, Navigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

import Header from "../components/Header";
import Footer from "../components/Footer";

const RutaProtegida = () => {
    const { auth, cargando } = useAuth();

    if(cargando) return "cargando...."

    return (
        <>
            <Header />
                <h1>esta es una ruta protegida</h1>
                {auth?._id ? (
                    <main className="container mx-auto mt-10">
                        <Outlet />
                    </main>
                ) : <Navigate to='/' /> }
            <Footer />
        
        </>
    )
};

export default RutaProtegida;