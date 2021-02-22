import React from 'react';
import {
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import '../App.scss';

export default function Countries({ counrtriesList, handleClick }) {
    return (
        <Row>
            {counrtriesList?.map(item => {
                return (
                    <Col xs={6} md={4} lg={3} key={item.name} className='country-card'>
                        <Card
                            style={{ width: '16rem' }}
                            className="mb-2"
                            onClick={() => handleClick(item)}
                        >
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <div className='card-image'>
                                    <Card.Img variant="top" src={item.flag} />
                                    <div>
                                        <label className='label-text'>Region: {item.region}</label>
                                        <label className='label-text'>Time zone: {item.timezones[0]}</label>
                                    </div>
                                </div>
                                <Card.Title className='capital'>Capital: {item.capital ? item.capital : '-'} </Card.Title>
                                <Card.Text className='population'>
                                    <label>Population: <b> {item.population} </b></label>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}