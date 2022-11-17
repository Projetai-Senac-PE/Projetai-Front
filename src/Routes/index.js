import React from "react";
import { Switch, Router, Route } from 'react-router-dom';
import history from './History';

// Import Pages
import SchedulePage from "../core/pages/Schedule";
import NotFoundPage from "../core/pages/NotFound";
import HomePage from "../core/pages/Home";
// import PrimeiroPeriodoManhaPorto from "../core/pages/Projects/PrimeiroPeriodoManhaPorto";
// import PrimeiroPeriodoNoite from "../core/pages/Projects/PrimeiroPeriodoNoite";
// import QuartoPeriodoManha from "../core/pages/Projects/QuartoPeriodoManha";
// import TerceiroPeriodoManhaPorto from "../core/pages/Projects/TerceiroPeriodoManhaPorto";
import PrimeiroPeriodoNoitePage from "../core/pages/Projects/2021_2/PrimeiroPeriodoNoitePage"
import PrimeiroPeriodoManhaPCRPage from "../core/pages/Projects/2021_2/PrimeiroPeriodoManhaPCRPage"
import PrimeiroPeriodoNoitePCRPage from "../core/pages/Projects/2021_2/PrimeiroPeriodoNoitePCRPage"
import SegundoPeriodoManhaPDPage from "../core/pages/Projects/2021_2/SegundoPeriodoManhaPDPage"
import SegundoPeriodoNoitePage from "../core/pages/Projects/2021_2/SegundoPeriodoNoitePage"
import QuartoPeriodoManhaPDPage from "../core/pages/Projects/2021_2/QuartoPeriodoManhaPDPage"
import QuartoPeriodoManhaPage from "../core/pages/Projects/2021_2/QuartoPeriodoManhaPage"
import QuartoPeriodoNoitePage from "../core/pages/Projects/2021_2/QuartoPeriodoNoitePage"
import QuintoPeriodoManhaPage from "../core/pages/Projects/2021_2/QuintoPeriodoManhaPage"
import QuintoPeriodoNoitePage from "../core/pages/Projects/2021_2/QuintoPeriodoNoitePage"

import { ExternalGuestList } from "../core/pages/Guests/GuestInfoList/ExternalGuestList";
import ExternalGuestListComponent from "../core/pages/Guests/ExternalGuests";
import TeacherListComponent from "../core/pages/Guests/Teachers";

// Import Layout
import NavbarLayout from '../core/layout/Navbar';
import FooterLayout from "../core/layout/Footer";
import ScheduleNight from "../core/pages/Schedule/SheduleNight";


function Routes() {
    return (
        <Router history={history} >
            <NavbarLayout />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route exact path="/guests/external" component={ExternalGuestListComponent} />
                <Route exact path="/guests/teacher" component={TeacherListComponent} />


                {/* <Route exact path="/projetos/primeiroperiodopdm" component={PrimeiroPeriodoManhaPorto} />
                <Route exact path="/projetos/primeiroperiodon" component={PrimeiroPeriodoNoite} />
                <Route exact path="/projetos/quartoperiodom" component={QuartoPeriodoManha} />
                <Route exact path="/projetos/terceiroperiodopdm" component={TerceiroPeriodoManhaPorto} /> */}
                <Route exact path="/projetos/1periodo/npd" component={PrimeiroPeriodoNoitePage} />
                <Route exact path="/projetos/1periodo/mpcr" component={PrimeiroPeriodoManhaPCRPage} />
                <Route exact path="/projetos/1periodo/npcr" component={PrimeiroPeriodoNoitePCRPage} />
                <Route exact path="/projetos/2periodo/mpd" component={SegundoPeriodoManhaPDPage} />
                <Route exact path="/projetos/2periodo/noite" component={SegundoPeriodoNoitePage} />
                <Route exact path="/projetos/4periodo/mpd" component={QuartoPeriodoManhaPDPage} />
                <Route exact path="/projetos/4periodo/manha" component={QuartoPeriodoManhaPage} />
                <Route exact path="/projetos/4periodo/noite" component={QuartoPeriodoNoitePage} />
                <Route exact path="/projetos/5periodo/manha" component={QuintoPeriodoManhaPage} />
                <Route exact path="/projetos/5periodo/noite" component={QuintoPeriodoNoitePage} />
                <Route path="/programacao" exact component={SchedulePage} />
                <Route path="/programacao/noite" exact component={ScheduleNight} />

                <Route path="/participantes" component={ExternalGuestList} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
            <FooterLayout />
        </Router>
    )
};

export default Routes;