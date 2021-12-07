export const TiposBasicos = () => {

    const nombre: string  = 'Fernando';
    const edad: number = 28;
    const estaActivo: boolean = true;
    //const poderes = []; // 'velocidad', 'volar', 'respirar bajo el agua'
    //const poderes: string [] = []; // 'velocidad', 'volar', 'respirar bajo el agua'
    const poderes: (string|number)[] = [];
    // let nombre: string | number = 'Fernando';
    // poderes.push(1);
    
    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'inactivo'}
            <br />
            {poderes.join(', ')}
        </>
    );
}
