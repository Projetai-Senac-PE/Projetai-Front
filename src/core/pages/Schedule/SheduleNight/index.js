import React, { useContext } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { ThemeContext } from 'styled-components';

// CSS import
import { Container } from './styles';
import TimeLine from './TimeLine';
import LinkButton from '../../../components/LinkButton';
import ListSheduleNight from './listScheduleNight';

// Assets import 
import { FaCalendarAlt } from 'react-icons/fa';

function ScheduleNight() {
    const { colors } = useContext(ThemeContext);
    return (
        <Container className="pt-5" bgColor={colors.cDark}>
            
            <div className="container">
                <div className="d-flex justify-content-center py-5">
                    <div>
                        <LinkButton
                            className="mx-5"
                            path="/programacao"
                            borderColor={colors.cOrange}
                            bgColor={colors.cOrange}
                            bgHover="transparent">
                            Programação do Dia
                        </LinkButton>
                        <LinkButton
                            path="/programacao/noite"
                            className="mx-5"
                            borderColor={colors.cOrange}
                            bgColor={colors.cOrange}
                            bgHover="transparent">
                            Programação da Noite
                        </LinkButton>
                    </div>
                </div>
            </div>
            <VerticalTimeline>
                {ListSheduleNight.map((item, index) => {
                    return (
                        <TimeLine
                            cBackground={item.bg}
                            iconColor={item.iconColor}
                            day={item.day}
                            col1={item.col1}
                            col2={item.col2}
                            col3={item.col3}
                            textColor={item.textColor}
                            projects={item.projects}
                            guests={item.guests}
                            teachers={item.teachers}
                            key={index}>
                            <FaCalendarAlt />
                        </TimeLine>
                    );
                })}
            </VerticalTimeline>
        </Container>
    )
}

export default ScheduleNight;