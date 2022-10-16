import React, { useState } from "react";
import { 
    Button,
    Modal, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';

const Pokemon = ({id, name, image, type, weight, height, pokemon}) => {

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    
    const style = `thumb-container ${type}`
    const modalImage = `img-background ${type}`

    return (
        <div className="container">
            <div className={style}>
                <div className="overlay">
                    <div className="text">
                        <Button className="button-detail" onClick={toggle}>
                            Detail
                        </Button>
                        <Modal isOpen={modal} toggle={toggle} size="md" centered scrollable>
                            <ModalBody>
                                <div className="border">
                                    <div className="d-flex justify-content-center mt-4">
                                        <div className={modalImage}>
                                            <img src={image} alt={name} style={{height:'90px', width:'90px'}} />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2 mb-4">
                                        <strong style={{fontSize: '25px'}}>{name}</strong>
                                    </div>
                                    <div className="barProgress">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-danger ml-2 mr-2" role="progressbar" style={{width: '100%'}} />
                                        </div>
                                        <div className="row mt-2">
                                            <div className="d-flex justify-content-center col">HP {pokemon.stats[0].base_stat} / {pokemon.stats[0].base_stat}</div>
                                            <div className="d-flex justify-content-center col">EXP {pokemon.base_experience}</div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <p>Pokemon <strong>{name}</strong> merupakan pokemon bertipe <strong>{type}</strong>. Dengan salah satu kemampuannya yaitu <strong>{pokemon.abilities[0].ability.name}</strong> dan dipadukan oleh gerakan <strong>{pokemon.moves[0].move.name}</strong> pokemon ini mampu bertarung dengan hebatnya.</p>
                                    </div>
                                    <div className="d-flex justify-content-center row mt-2">                            
                                        <div className="d-flex justify-content-center col">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item" style={{fontWeight:'bold'}}>Type</li>
                                                <li className="li">{type}</li>
                                            </ul>
                                        </div>
                                        <div className="d-flex justify-content-center col">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item" style={{fontWeight:'bold'}}>Weight</li>
                                                <li className="li">{weight/10} kg</li>
                                            </ul>
                                        </div>
                                        <div className="d-flex justify-content-center col">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item" style={{fontWeight:'bold'}}>Height</li>
                                                <li className="li">{height/10} m</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center row mt-2">                            
                                        <div className="d-flex justify-content-center col">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item li" style={{fontWeight:'bold'}}>Moves</li>
                                                <li className="li">
                                                    { 
                                                    pokemon.moves.slice(0,5).map(poke=>{
                                                        return(
                                                            <>
                                                            <div className="group">
                                                                {poke.move.name}
                                                            </div>
                                                            </>
                                                        )
                                                    })
                                                }</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center row mt-2">                            
                                        <div className="d-flex justify-content-center col">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item" style={{fontWeight:'bold'}}>Stat</li>
                                                <li className="li">
                                                    <div>
                                                        {
                                                            pokemon.stats.map(poke =>{
                                                                return(
                                                                    <>
                                                                    <div className="base-stat">{poke.stat.name}: {poke.base_stat}</div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex justify-content-center col">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item" style={{fontWeight:'bold'}}>Abilities</li>
                                                <li className="li">
                                                    <div>
                                                        {
                                                            pokemon.abilities.map(poke =>{
                                                                return(
                                                                    <>
                                                                    <div className="base-stat">{poke.ability.name}</div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                            <Button color="secondary" onClick={toggle}>
                                Close
                            </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
                <div className="number" style={{marginRight:'5px', marginLeft:'10px'}}>
                    <small>#0{id}</small>
                </div>
                <img src={image} alt={name} style={{marginRight:'5px'}} />
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
            </div>
        </div>
    )
}

export default Pokemon