import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import IndividualTeammate from "../components/landing/IndividualTeammate";
import {Image, Row} from "react-bootstrap";
import teammateRecommdations from "../assets/teammateRecommdations.png";

export class Recommendations extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={teammateRecommdations} alt="Teammate Recommendations"/>
                <Row className="game-container" xs={1} md={2} lg={4}>
                    {/*TODO make recommendations dynamic*/}
                    <IndividualTeammate key={"1"}/>
                    <IndividualTeammate key={"2"}/>
                </Row>
            </div>
        )
    }
}

export default (Recommendations);