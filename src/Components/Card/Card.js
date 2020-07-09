import React from 'react';
// import './style.css';
import * as S from './Styled'
import tiposCor from './tiposCor'
import cartIcon from '../../img/shopping-cart.png'

function Card({ pokemon,lista }) {
    const listaItems = [];
    return (
        <S.Card className="Card">
            <S.CardImg>
                <S.ImgCard src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} className='imgCard' alt="" />
            </S.CardImg>
            <S.CardName>
                {pokemon.name}
            </S.CardName>
            <S.CardTypes>
                {
                    pokemon.types.map(type => {
                        return (
                            <S.CardType style={{ backgroundColor: tiposCor[type.type.name] }}>
                                {type.type.name}
                            </S.CardType>
                        )
                    })
                }
            </S.CardTypes>
            <S.CardPrice>
                <S.CardPriceTitle>Preço</S.CardPriceTitle>
                <p>{pokemon.height}</p>
            </S.CardPrice>
            <S.CardAddCart onClick={() => lista(pokemon)}>Adicionar<img src={cartIcon}></img></S.CardAddCart>
        </S.Card>
    );
    console.log(listaItems);
}

export default Card;

