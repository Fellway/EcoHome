import styled from "styled-components";
import Header from "../../atoms/Header/Header";
import ToggleDeviceButton from "../../atoms/ToogleDeviceButton/ToggleDeviceButton";
import {Tv} from "react-bootstrap-icons";

const DeviceWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 20px;
`

const RoomDetails = ({title, devices}) => (
    <>
        <Header>
            {title}
        </Header>
        <DeviceWrapper>
            {
                devices.map((device) => {
                    return (
                        <ToggleDeviceButton Icon={Tv} isActive={device.status}>
                            {device.name}
                        </ToggleDeviceButton>
                    )
                })
            }
        </DeviceWrapper>
    </>
)
export default RoomDetails;