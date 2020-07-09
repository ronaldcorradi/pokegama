import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card'
import { getAll, getPokemon } from './Services/Service'
import { Container, Row, Col, Modal, Button } from 'reactstrap'
import './style.css'
import cartIcon from './img/cart-icon.png'

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [loading, setLoading] = useState(true);
  let initialUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [tipo, setTipo] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const lista = [];

  function addItem(pokemon){
    lista.push(pokemon);
    console.log(lista);
  }

  const next = async () => {
    setLoading(true);
    let data = await getAll(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAll(previousUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }


  useEffect(() => {
    async function fetchData() {
      if(tipo!==""){
        
      }
      let response = await getAll(initialUrl);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);



  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }
  return (
    <Container>
      <Row className="NavSearch">
        <Col className="InputSearch"><input readOnly={true} value={nameSearch} onChange={e => setNameSearch(e.target.value)}></input></Col>
        <Col className="ComboSearch">
          <select name='selectCombo' value={tipo} onChange={e => setTipo(e.target.value)}>
            <option value=""></option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
          </select>
        </Col>
        {/* <Col className="BtnSearch"><button onClick={() => find()}>Pesquisar</button></Col>
        <Col>
          <button className="BtnCart" onClick={handleShow}><img src={cartIcon}></img></button>
        </Col> */}
      </Row>
      <Row>
        <Col className="ButtonsNavTop">
          <button onClick={prev} className="Btn">Anterior</button>
          <button onClick={next}>Próximo</button>
        </Col>
      </Row>
      <Row className="Container">
        <div>
          {loading ? <h1></h1> :
            (
              <>
                <div className='grid-container'>
                  {pokemonData.map((pokemon, i) => {
                    return <Card key={i} pokemon={pokemon} />
                  })}
                </div>
              </>
            )}
        </div>
      </Row>
      <Row>
        <button onClick={prev} className="Btn">Anterior</button>
        <button onClick={next}>Próximo</button>
      </Row>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Poke Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Concluir
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  )
}

export default App;
