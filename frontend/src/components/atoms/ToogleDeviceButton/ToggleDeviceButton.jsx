import styled from "styled-components";
import {ToggleOff, ToggleOn} from "react-bootstrap-icons";
import * as PropTypes from "prop-types";
import {Component} from "react";

const Wrapper = styled.button`
  display: grid;
  grid-template-columns: 80px 1fr 80px;

  width: 300px;
  height: 50px;

  border-style: none;
  border-radius: 15px;
  background-color: ${({status}) => status ? 'rgba(175,175,175,0.63)' : '#e9e9ed'};
  color: ${({status}) => status ? 'black' : '#b7b7b7'};
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

class ToggleDeviceButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.isActive
        }
        this.toggleDevice = this.toggleDevice.bind(this)
    }

    toggleDevice() {
        this.setState((prevState) => ({
            status: !prevState.status
        }));
        console.log(this.state.status)
    }

    render() {
        let {Icon, children} = this.props;
        const {status} = this.state;
        return (
            <Wrapper status={status} onClick={this.toggleDevice}>
                <IconWrapper>
                    <Icon/>
                </IconWrapper>
                <DeviceDescription>
                    {children}
                </DeviceDescription>
                <IconWrapper>
                    {status ?
                        <ToggleOn color="green"/> :
                        <ToggleOff color="red"/>
                    }
                </IconWrapper>

            </Wrapper>
        );
    }
}

ToggleDeviceButton.propTypes = {
    Icon: PropTypes.any,
    isActive: PropTypes.any,
    children: PropTypes.any
}
export default ToggleDeviceButton;