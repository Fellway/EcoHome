import {default as IconButtonComponent} from "./IconButton";
import HomeIcon from "../../../../assets/home.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";

export default {
    title: 'EcoHome/atoms/IconButton',
    component: IconButtonComponent
};

const Template = (args) => <IconButtonComponent {...args} />

export const IconButtonHome = Template.bind({});
IconButtonHome.args = {
    icon: HomeIcon,
    children: "Example Home Button Too long"
}

export const IconButtonPlus = Template.bind({});
IconButtonPlus.args = {
    icon: PlusIcon,
    children: "Add new room"
}