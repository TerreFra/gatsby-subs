import React from 'react';
import { Card } from 'react-bootstrap';
import './CardContainer.scss';

// Static content
import DiscordCard from '../../../static/discordLogo.jpg';

const CardContainer = () => {
    return (
        <div className="cardsContainer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="my-3 text-center">
                            <Card.Header>Light Novel</Card.Header>
                            <Card.Img  src={DiscordCard} />
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="my-3 text-center">
                            <Card.Header>Filmini/Manga</Card.Header>
                            <Card.Img  src={DiscordCard} />
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="my-3 text-center">
                            <Card.Header>Canzoni</Card.Header>
                            <Card.Img  src={DiscordCard} />
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="my-3 text-center">
                            <Card.Header>Donate</Card.Header>
                            <Card.Img  src={DiscordCard} />
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="my-3 text-center">
                            <Card.Header>Guidine</Card.Header>
                            <Card.Img  src={DiscordCard} />
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="my-3 text-center">
                            <Card.Header>Discord</Card.Header>
                            <Card.Img  src={DiscordCard} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardContainer;