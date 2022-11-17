import React from 'react';

// CSS imports 
import Title from '../../../../components/Title';
import { Row, Col, ListGroupItem } from 'react-bootstrap';
import { Card, ListGroup } from "react-bootstrap";
import { Container } from './styles';
import NavegationProjects from '../../../../layout/NavegationProjects';
import WaveFooter from '../../../../layout/WaveFooter';

import { QuintoPeriodoManha } from '../../listProjects/2021_2/QuintoPeriodoManha';
// IMPORT LIST

function QuintoPeriodoManhaPage() {

    return (
        <Container>
            <Row className="m-0 p-0">
                <Col xl="2" className="bg-light rounded" >
                    <div>
                        <NavegationProjects />
                    </div>
                </Col>
                <Col xl="10" >
                    <div className="text-center container">
                        <Title className="mt-5 d-flex" font="25" >Lista de projetos</Title>
                    </div>
                    <div className="container">
                        <Row>
                            {QuintoPeriodoManha.map((array, index) => {
                                return (
                                    <Col className="py-5 px-4 d-flex justify-content-center " key={index}>
                                        <Container>
                                            <Card color="F57C00" className="align-items-center card overflow-auto" style={{ height: '350px', width: '450px' }}>
                                                <Card.Img className="pt-4 rounded-circle imgCard" variant="top" src={array.icon} />
                                                <Card.Body>
                                                    <Card.Title className="text-center">{array.name}</Card.Title>
                                                    <Card.Text className="mb-3 text-muted">{array.description}</Card.Text>
                                                    <Card.Text className="text-center">
                                                        ALUNOS:
                                                    </Card.Text>
                                                    <ListGroup variant="flush">
                                                        {array.students.map((a, i) => {
                                                            return (
                                                                <ListGroup.Item key={i}>
                                                                    {a}
                                                                </ListGroup.Item>
                                                            )
                                                        })}
                                                    </ListGroup>
                                                    <ListGroup>
                                                        <ListGroupItem>
                                                            <a
                                                                href={ array.drive_link }
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className='btn btn-primary'
                                                            >
                                                                Artefatos ( Link de acesso privado )
                                                            </a>
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            <a
                                                                href={array.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className='btn btn-primary'
                                                            >
                                                                Link para o vídeo pitch
                                                            </a>
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            <a
                                                                href={array.apresentacao}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className='btn btn-primary'
                                                            >
                                                                Slide de apresentação do projeto
                                                            </a>
                                                        </ListGroupItem>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card>
                                        </Container>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
            </Row>
            <WaveFooter />
        </Container>
    )
}

export default QuintoPeriodoManhaPage;