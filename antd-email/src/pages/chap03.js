import React, { Component } from 'react';
import { Card , Button} from 'antd';
import { connect } from 'dva';


const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace];
    console.log("*********************t101:", cardList)
    return {
        cardList
    }

}


@connect(mapStateToProps)
export default class PuzzleCardsPage extends Component {
    // constructor() {
    //     super()
    //     this.counter = 100;

    //     this.state = {
    //         cardList: [
    //             {
    //                 id: 1,
    //                 setup: 'Did you hear about the two silk worms in a race?',
    //                 punchline: 'It ended in a tie',
    //             },
    //             {
    //                 id: 2,
    //                 setup: 'What happens to a frog\'s car when it breaks down?',
    //                 punchline: 'It gets toad away',
    //             },
    //         ]
    //     }
    // }


    // addNewCard = () => {
    //     this.setState(prevState => {
    //         const prevCardList = prevState.cardList;
    //         this.counter += 1;
    //         const card = {
    //             id: this.counter,
    //             setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    //             punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //         };

    //         return {
    //             cardList: prevState.cardList.concat(card)
    //         }

    //     })
    // }

    render() {
        return (
            <div>
                {
                        this.props.cardList.map(card => {
                            return (
                                <Card key={card.id}>
                                    <div>Q: {card.setup}</div>
                                    <div>
                                        <strong>A: {card.punchline}</strong>
                                    </div>                                
                                </Card>
                            );
                        })
                }

                {/* <Button onClick = {this.addNewCard}>添加卡片</Button> */}
            </div>
        );
    }
}