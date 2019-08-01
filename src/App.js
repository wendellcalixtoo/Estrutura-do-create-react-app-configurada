import React from 'react';

import Tabela from './Components/Tabela'

function App() {
    const autores = [{
        nome:'Paulo',
        livro:'React',
        preco: '1000'
    },
    {
        nome:'Daniel',
        livro:'Java',
        preco: '99'
    },
    {
        nome:'Marcos',
        livro:'Design',
        preco: '150'
    },
    {
        nome:'Bruno',
        livro:'DevOps',
        preco: '100'
    },
    {
        nome:'Wendell',
        livro:'React',
        preco: '1000'
    }]
    return (
        <div className="App">
            <Tabela autores = { autores }/>
        </div>
    );
}

export default App;
