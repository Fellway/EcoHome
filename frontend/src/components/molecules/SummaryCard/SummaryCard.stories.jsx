import {default as SummaryCardComponent} from "./SummaryCard"

export default {
    title: 'EcoHome/molecules/SummaryCard',
    component: SummaryCardComponent
};

const Template = (args) => <SummaryCardComponent {...args} />

export const SummaryCardPowerConsumption = Template.bind({});
SummaryCardPowerConsumption.args = {
    data: {
        "averagePowerConsumption": "20 kWh",
        "averagePowerConsumptionDaily": "120 kWh",
        "averagePowerConsumptionMonthly": "3020 kWh"
    },
    title: "Power consumption"
}

export const SummaryCardWorkHours = Template.bind({});
SummaryCardWorkHours.args = {
    data: {
        "connectedDevices": "5",
        "currentPowerConsumption": "1 kWh",
        "workHours": "200",
    },
    title: "Work hours"
}

export const SummaryCardSolarSystem = Template.bind({});
SummaryCardSolarSystem.args = {
    data: {
        "connectedSolarPanels": "10",
        "currentPowerProduction": "1 kWh",
        "savedEnergyToday": "2 kWh",
        "savedEnergyMonthly": "30 kWh",
    },
    title: "Solar system"
}