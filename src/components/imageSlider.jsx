import React from 'react'
import { Carousel, Row, Col, Card, Button } from 'react-bootstrap';
import demon from '../img/demon.jpg'
import baki from '../img/baki.jpg'
import death from '../img/death.jpg'
import sword from '../img/sword.jpg'
import mount from '../img/mount.jpg'
import Daemon from '../img/My Daemon.jpg'
import nocturne from '../img/nocturne.jpg'
import Spirited from '../img/Spirited Away.jpg'
import pokemon from '../img/pokemon.jpg'
import Chis_Sweet from '../img/Chi’s Sweet.jpg'
import saga from'../img/saga.jpg'
import psyco from '../img/psyco.jpg'


const ImageSlider = () => {
    const cardData = [
        {
            img: demon,
            title: "Demon Slayer: Kimetsu no Yaiba"
        },
        {
            img: baki,
            title: "Baki Hanma VS Kengan Ashura"
        },
        {
            img: death,
            title: "DEATH NOTE"
        },
        {
            img: sword,
            title: "The Demon Sword Master of Excalibur Academy"
        },
        {
            img: mount,
            title: "Dead Mount Death Play"
        },
        {
            img: Daemon,
            title: "My Daemon"
        },
        {
            img: nocturne,
            title: "Castlevania: Nocturne"
        },
        {
            img: Spirited,
            title: "Spirited Away"
        },
        {
            img: pokemon,
            title: "Pokémon: Mewtwo Strikes Back - Evolution"
        },
        {
            img: Chis_Sweet,
            title:"Chi’s Sweet Adventure"
        },
          {
            img :saga,
            title:"11.VINLAND SAGA"
          },
          {
            img:psyco,
            title:"12.Mob Psycho 100"
          }
        
    ];

    const Array1 = (arr, size) => {
        const Array2 = [];
        for (let i = 0; i < arr.length; i += size) {
            Array2.push(arr.slice(i, i + size));
        }
        return Array2;
    };

    const cardd1 = Array1(cardData, 3);
    return (
        <>
            <div className='mt-5'>
                <div className='text-center my-5'>
                    <h1>View More</h1>
                </div>
                <Carousel className='mt-3'>
                    {cardd1.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <Row className="justify-content-center">
                                {chunk.map((card, i) => (
                                    <Col key={i} md={4} className="mb-4">
                                        <Card className="text-center shadow m-3" style={{ width: '18rem',  }}>
                                            <Card.Img style={{width:"100%"}} className="card-img-top"  variant="top" src={card.img} />
                                            <Card.Body>
                                                <Card.Title>{card.title}</Card.Title>
                                                <Card.Text>
                                                    {card.text}
                                                </Card.Text>
                                                <Button variant="primary">WATCH MORE</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default ImageSlider