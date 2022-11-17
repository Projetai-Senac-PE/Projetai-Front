import React, { useContext } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { ThemeContext } from 'styled-components';

import LinkButton from '../../components/LinkButton';
import WaveFooter from '../../layout/WaveFooter';
import ListSheduleDay from './listScheduleDay';
import { Container } from './styles';
import TimeLine from './TimeLine';

// Import styles
function SchedulePage() {
    const { colors } = useContext(ThemeContext);
    return (
        <Container className="pt-5" bgColor={colors.cWhiteBlue}>
            <div className="container">
                <div className="d-flex justify-content-center py-5">
                    <div>
                        <LinkButton
                            cName="mx-5"
                            path="/programacao"
                            borderColor={colors.cOrange}
                            bgColor={colors.cOrange}
                            bgHover="transparent">
                            Programação do Dia
                        </LinkButton>
                        <LinkButton
                            path="/programacao/noite"
                            cName="mx-5"
                            borderColor={colors.cOrange}
                            bgColor={colors.cOrange}
                            bgHover="transparent">
                            Programação do Noite
                        </LinkButton>
                    </div>
                </div>
            </div>
            <VerticalTimeline>
                {ListSheduleDay.map((item, index) => {
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
            <WaveFooter />
        </Container>
    )
}

export default SchedulePage;