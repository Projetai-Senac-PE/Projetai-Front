import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


// Import API
import Http from '../../../services/Api';

// Import css
import CardsNotRecive from '../../layout/CardsNotRecive';
import { Row, Col } from 'react-bootstrap';
import Title from '../../components/Title';
import CardLayout from '../../layout/Card';
import { Container } from './styles';
import NavegationProjects from '../../layout/NavegationProjects';

function ProjectListFilterPage() {

    const { periodo } = useParams();

    const [projects, setProjects] = useState({});
    
    useEffect(() => {
        Http.get(`/project/${periodo}`).then((response) => {
            setProjects(response.data.message[0]);
        });
    }, [periodo]);

    const { message } = projects;
    console.log(message);

    return (
        <Container>
            <Row className="m-0 p-0">
                <Col xl="2" >
                    <NavegationProjects />
                </Col>
                <Col xl="10" className="bg-light">
                    <div className="text-center container">
                        <Title cName="mt-5" >Lista de projetos</Title>
                    </div>
                    <div className="container">
                        <Row>
                            {message !== undefined ? message.map((array, index) => {
                                return (
                                    <Col className="py-5 px-4" key={index}>
                                        <CardLayout
                                            icon={array.icon} title={array.title}
                                            summary={array.summary} _id={array._id} />
                                    </Col>
                                )
                            }) : <CardsNotRecive />}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectListFilterPage;