import styled from "styled-components"
import RoomCard from "../../molecules/RoomCard/RoomCard";
import RoomDetails from "../../molecules/RoomDetails/RoomDetails";
import {Component} from "react";
import {RoomData} from "./dummyData";
import IconButton from "../../atoms/IconButton/IconButton";
import PlusIcon from "../../../assets/icons/plus.svg"
import {Button, Form, Modal} from "react-bootstrap";
import Header from "../../atoms/Header/Header";

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
  grid-gap: 50px;
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

const MyButton = styled.button`
  width: fit-content;
  border: none;
  background: transparent;
`

const Left = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 50px;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`

class RoomCardGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            room: null
        }
        this.selectRoom = this.selectRoom.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal() {
        this.setState({
            isModalOpen: this.state.isModalOpen = true
        });
    }

    closeModal() {
        this.setState({
            isModalOpen: this.state.isModalOpen = false
        });
    }

    selectRoom(room) {
        this.setState({
            room: this.state.room = room
        });
    }

    render() {
        return (
            <Wrapper>
                {this.state.isModalOpen &&
                    <ModalWrapper>
                        <Modal show={true} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <Header>Add new room</Header>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="roomName">
                                        <Form.Label>Room name:</Form.Label>
                                        <Form.Control type="text" placeholder="Provide the room name"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="image">
                                        <Form.Label>Image url:</Form.Label>
                                        <Form.Control type="text" placeholder="Image url"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="devices">
                                        <Form.Label>Devices JSON:</Form.Label>
                                        <Form.Control type="text" placeholder="Provide JSON structure with devices"/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.closeModal}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </ModalWrapper>

                }
                <Left>
                    <IconButton onClick={this.openModal} icon={PlusIcon}>
                        Add new room
                    </IconButton>
                    <RoomCardsWrapper>
                        {
                            RoomData.map((room) => {
                                return (
                                    <MyButton onClick={() => this.selectRoom(room)}>
                                        <RoomCard img={room.img} title={room.title} subtext={room.subtext}/>
                                    </MyButton>
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