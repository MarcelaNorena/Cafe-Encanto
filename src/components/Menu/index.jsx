import React from 'react'
import CategoriaContainer from '../Categoria'

function Menu() {
    return (
        <div>
            <CategoriaContainer title="Bebidas">
                <div>Bebida 1</div>
                <div>Bebida 2</div>
                <div>Bebida 3</div>
            </CategoriaContainer>
            <CategoriaContainer title="Alimentos">
                <div>Alimento 1</div>
                <div>Alimento 2</div>
                <div>Alimento 3</div>
            </CategoriaContainer>
        </div>
    )
}

export default Menu
