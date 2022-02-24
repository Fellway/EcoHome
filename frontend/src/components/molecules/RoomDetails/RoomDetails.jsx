import styled from "styled-components";
import Header from "../../atoms/Header/Header";
import ToggleDeviceButton from "../../atoms/ToogleDeviceButton/ToggleDeviceButton";
import {App,  Fan, Lightbulb, Speaker, Tablet, Tv} from "react-bootstrap-icons";
import IconButton from "../../atoms/IconButton/IconButton";
import * as PropTypes from "prop-types";
import {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`

const DeviceTable = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 20px;
  margin-bottom: 50px;
`

const DeviceDetails = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
`

const AddDevice = styled.div`
  padding: 50px;
  width: 100%;
  height: 60px;
`

const Label = styled.span`
  font-weight: bold;
`

const Summary = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  border-top: 1px solid black;
  padding: 50px;
`

class RoomDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
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

    calculateTotalCost(devices) {
        let sum = 0;
        devices.map(device => {
            sum += ((device.power / 1000) * (device.todayTime / 60) * 0.62);
        });
        return Math.round((sum + Number.EPSILON) * 100) / 100;
    }

    getIcon(deviceType) {
        switch (deviceType) {
            case 'TV':
                return Tv;
            case 'COMPUTER':
                return Tablet;
            case 'LIGHT':
                return Lightbulb;
            case 'SOUND':
                return Speaker;
            case 'FAN':
                return Fan;
            default:
                return App;
        }
    }

    render() {
        let {title, devices} = this.props;
        return (
            <>
                {this.state.isModalOpen &&
                    <ModalWrapper>
                        <Modal show={true} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <Header>Add new device</Header>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="deviceName">
                                        <Form.Label>Device name:</Form.Label>
                                        <Form.Control type="text" placeholder="Provide the room name"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="type">
                                        <Form.Label>Type:</Form.Label>
                                        <Form.Control type="text" placeholder="type"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="power">
                                        <Form.Label>Power in Wats:</Form.Label>
                                        <Form.Control type="number" placeholder="Power"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="energeticClass">
                                        <Form.Label>Energetic class:</Form.Label>
                                        <Form.Control type="text" placeholder="Energetic class"/>
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
                <Header>
                    {title}
                </Header>
                <AddDevice>
                    <IconButton onClick={this.openModal} fullWidth>
                        Add new device
                    </IconButton>
                </AddDevice>
                <DeviceTable>
                    {
                        devices.map((device) => {
                            return (
                                <>
                                    <ToggleDeviceButton Icon={this.getIcon(device.type)} isActive={device.status}>
                                        {device.name}
                                    </ToggleDeviceButton>
                                    <DeviceDetails>
                                        <div>
                                            <Label>Power: </Label>
                                            <span>{device.power + "W"}</span>
                                        </div>
                                        <div>
                                            <Label>Cost for kWh: </Label>
                                            <span>{Math.round(((device.power / 1000 * 0.62) + Number.EPSILON) * 100) / 100 + " zł/kWh"}</span>
                                        </div>
                                        {device.energeticClass && <div>
                                            <Label>Energetic class: </Label>
                                            <span>{device.energeticClass}</span>
                                        </div>}
                                        <div>
                                            <Label>Today running time: </Label>
                                            <span>{String(device.todayTime / 60).split('.')[0] + "h " + (device.todayTime - (Number(String(device.todayTime / 60).split('.')[0]) * 60)) + "m"}</span>
                                        </div>
                                        <div>
                                            <Label>Today cost: </Label>
                                            <span>{Math.round((((device.power / 1000) * (device.todayTime / 60) * 0.62) + Number.EPSILON) * 100) / 100 + "zł"}</span>
                                        </div>
                                    </DeviceDetails>
                                </>)
                        })
                    }
                </DeviceTable>
                <Summary>
                    Today total cost for this room: {this.calculateTotalCost(devices)} zł
                </Summary>
            </>
        );
    }
}

RoomDetails.propTypes = {
    title: PropTypes.any,
    devices: PropTypes.any
}
export default RoomDetails;