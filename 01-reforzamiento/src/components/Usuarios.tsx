import { useEffect, useState, useRef } from "react"
import { reqRespApi } from "../api/reqRes";
import { useUsuarios } from "../hooks/useUsuarios";
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();
    const renderItem = ( { id, first_name, last_name, avatar, email }: Usuario ) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar } 
                        alt={first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{ first_name }</td>
                <td>{ email }</td>
            </tr>
        );
    }
    return (
        <div>
            <h3>Usuarios</h3>      
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // usuarios.map(usuario => renderItem(usuario))
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>      

            <button
                className="btn btn-primary"
                onClick={ () => paginaAnterior() }
            >
                Anteriores
            </button>
            
            &nbsp;

            <button
                className="btn btn-primary"
                onClick={ () => paginaSiguiente() }
            >
                Siguientes
            </button>
        </div>
    )
}
