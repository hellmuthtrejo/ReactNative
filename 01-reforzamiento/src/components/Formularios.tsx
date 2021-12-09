import { useState } from 'react';
import { useForm } from '../hooks/useForm';
export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'hellmuth',
        password: '123456'
    });
    // const [formulario, setFormulario] = useState({
    //     email: 'hellmuth',
    //     password: '123456'
    // });

    // const onChange = (value: string, campo: string) => {
    //     setFormulario({...formulario, [campo]: value});
    // }

    return (
        <div>
            <h3>Formularios</h3>
            <input 
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({target}) => onChange(target.value, 'email')}
            />

            <input 
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({target}) => onChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </div>
    )
}
