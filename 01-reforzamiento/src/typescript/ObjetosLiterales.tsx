// las interfaces sirben para colocar reglas de validacion a un objeto. 

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export default function ObjetosLiterales() {

    const persona: Persona = {
        nombreCompleto: 'Hellmuth Trejo',
        edad: 35,
        direccion: {
            pais: 'Chile',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            {/* {JSON.stringify(persona)} */}
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
