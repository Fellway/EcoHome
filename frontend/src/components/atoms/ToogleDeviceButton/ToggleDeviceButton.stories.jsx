import {default as ToggleDeviceButtonComponent} from "./ToggleDeviceButton";
import {Tv} from "react-bootstrap-icons";

export default {
    title: 'EcoHome/atoms/ToggleDeviceButton',
    component: ToggleDeviceButtonComponent
};

const Template = (args) => <ToggleDeviceButtonComponent {...args} />

export const ToggleDeviceButtonTvOff = Template.bind({});
ToggleDeviceButtonTvOff.args = {
    children: "TV",
    Icon: Tv,
    isActive: false
};

export const ToggleDeviceButtonTvOn = Template.bind({});
ToggleDeviceButtonTvOn.args = {
    children: "TV",
    Icon: Tv,
    isActive: true
};
