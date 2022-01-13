import styled from "styled-components"
import RoomCard from "../../molecules/RoomCard/RoomCard";
import RoomDetails from "../../molecules/RoomDetails/RoomDetails";
import {Component} from "react";
import {RoomData} from "./dummyData";
import IconButton from "../../atoms/IconButton/IconButton";
import PlusIcon from "../../../assets/icons/plus.svg"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  box-sizing: border-box;

  width: 100%;
  height: 100%;
  padding: 20px;
`
const RoomCardsWrapper = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

const RoomDetailsWrapper = styled.div`
  border-left: 1px solid grey;
  padding: 20px;
  position: relative;
`

const InfoMessage = styled.div`
  font-family: Roboto, 'sans-serif';
  font-size: 2.5rem;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 5px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Button = styled.button`
  width: fit-content;
  border: none;
  background: transparent;
`

const Left = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 50px;
`

class RoomCardGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            room: null
        }
        this.selectRoom = this.selectRoom.bind(this)
    }

    selectRoom(room) {
        this.setState({
            room: this.state.room = room
        });
    }

    render() {
        return (
            <Wrapper>
                <Left>
                    <IconButton icon={PlusIcon}>
                        Add new room
                    </IconButton>
                    <RoomCardsWrapper>
                        {
                            RoomData.map((room) => {
                                return (
                                    <Button onClick={() => this.selectRoom(room)}>
                                        <RoomCard title={room.title} subtext={room.subtext}/>
                                    </Button>
                                )
                            })
                        }
                    </RoomCardsWrapper>
                </Left>

                <RoomDetailsWrapper>
                    {!this.state.room ? <InfoMessage>
                            Select room to see connected devices
                        </InfoMessage> :
                        <RoomDetails title={this.state.room.title} devices={this.state.room.devices}>

                        </RoomDetails>
                    }
                </RoomDetailsWrapper>
            </Wrapper>
        );
    }
}

export default RoomCardGrid;