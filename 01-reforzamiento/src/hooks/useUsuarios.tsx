import { useState, useEffect, useRef } from 'react';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { reqRespApi } from '../api/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        // Llamado API.
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        const resp = await reqRespApi.get<ReqResListado>('/users', { 
            params: {
                page: paginaRef.current
            }
        });
        if (resp.data.data.length > 0) {
            setUsuarios( resp.data.data );
        } else {
            paginaRef.current--;
            alert('No hay registros');
        }
        
        // if( resp.data.data.length > 0 ){
        //     setUsuarios( resp.data.data );
        //     paginaRef.current++;
        // } else {
        //     alert('No Hay mas Registros');
        // }
        
        // reqRespApi.get<ReqResListado>('/users')
        // .then(resp => {
        //     setUsuarios(resp.data.data);
        // })
        // .catch( console.log );
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios(); 
        } else {
            alert('no puede');
        }
        
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
