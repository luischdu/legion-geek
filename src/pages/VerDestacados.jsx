import React from 'react'

const VerDestacados = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.imgur.com/HO86JL0.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Gatos Bonachones al Ataque</h5>
                                <p>Gatos Bonachones inundan con su ternura a todo un pais!!</p>
                            </div>
                    </div>
                        <div className="carousel-item">
                            <img src="https://i.imgur.com/HO86JL0.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Los Bonachones en su ultimo Hit</h5>
                                    <p>Famoso Grupo Gato Bonachon con su interpretacion de Bongos, deslumbra en su ultimo concierto.</p>
                                </div>
                        </div>
                            <div className="carousel-item">
                                <img src="https://i.imgur.com/HO86JL0.jpg" className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
    )
}

export default VerDestacados
