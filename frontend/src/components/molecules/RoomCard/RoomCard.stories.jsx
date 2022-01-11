import {default as RoomCardComponent} from "./RoomCard";

export default {
    title: 'EcoHome/molecules/RoomCard',
    component: RoomCardComponent
};

const Template = (args) => <RoomCardComponent {...args} />

export const RoomCard = Template.bind({});
RoomCard.args = {
    title: "Kitchen",
    subtext: "2 devices active"
};