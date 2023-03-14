import React from 'react'
import CategoriaContainer from '../Categoria'
import ProductCard from '../Producto'

function Menu() {
    return (
        <div>
            <CategoriaContainer title="Bebidas">
                <ProductCard title="Capuccino" imageSrc="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/bebidas-alcoholicas-que-se-pueden-mezclar-con-cafe.jpg" price={15000} />
                <ProductCard title="Frape" imageSrc="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/bebidas-alcoholicas-que-se-pueden-mezclar-con-cafe.jpg" price={13000} />
                <ProductCard title="Mocaccino" imageSrc="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/bebidas-alcoholicas-que-se-pueden-mezclar-con-cafe.jpg" price={17000} />
            </CategoriaContainer>
            <CategoriaContainer title="Alimentos">
                <ProductCard title="Waffles" imageSrc="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/09/04093356/RFB-2708-1-tortafriadeguanabana.jpg" price={25000} />
                <ProductCard title="Pai de limon" imageSrc="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/09/04093356/RFB-2708-1-tortafriadeguanabana.jpg" price={33000} />
                <ProductCard title="Torta Fria" imageSrc="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/09/04093356/RFB-2708-1-tortafriadeguanabana.jpg" price={42000} />
            </CategoriaContainer>
        </div>
    )
}

export default Menu
