import styled from 'styled-components'

export const Card = styled.div`
    background: white;
    border-radius: 10px;
    border:solid 3px blue;
    width: 200px;
    align-items:center;    
`;

export const ImgCard = styled.img`
    width: 100px;
    height: 100px;
`;

export const CardImg = styled.div`
    text-align: center; 
`;

export const CardTypes = styled.div`
    display: flex;
    justify-content: center;    
`;

export const CardType =styled.div`
    padding: 5px 10px;
    margin: 10px 10px 10px 0;
    border-radius: 5px;
    background: cyan;
    color: #fff;
`

export const CardName = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
`

export const CardPrice = styled.div`
   text-align: center;
`

export const CardPriceTitle = styled.p`
   font-weight: bold;
 `

export const CardAddCart = styled.button`
    width: 99%;
    border: none;
    height: 30px;
    background-color: darkcyan;
    border-radius: 5px;
    margin-bottom: 2px;
`
