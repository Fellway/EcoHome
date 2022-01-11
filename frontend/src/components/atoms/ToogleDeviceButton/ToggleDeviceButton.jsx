import styled from "styled-components";
import {ToggleOff, ToggleOn} from "react-bootstrap-icons";

const Wrapper = styled.button`
  display: grid;
  grid-template-columns: 80px 1fr 80px;

  width: 300px;
  height: 50px;

  border-style: none;
  border-radius: 15px;
`

const IconWrapper = styled.div`
  width: 80px;
  height: 50px;
  font-size: 30px;
  margin-top: 10px;
`

const DeviceDescription = styled.div`
  font-size: 1rem;
  line-height: 50px;
`

const ToggleDeviceButton = ({Icon, isActive, children}) => (
    <Wrapper>
        <IconWrapper>
            <Icon/>
        </IconWrapper>
        <DeviceDescription>
            {children}
        </DeviceDescription>
        <IconWrapper>
            {isActive ?
                <ToggleOn color="green"/> :
                <ToggleOff color="red"/>
            }
        </IconWrapper>

    </Wrapper>
)
export default ToggleDeviceButton;