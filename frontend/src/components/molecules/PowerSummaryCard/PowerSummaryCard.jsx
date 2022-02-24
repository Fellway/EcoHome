import {Component} from "react";
import styled from "styled-components";
import {Lightning} from "react-bootstrap-icons";
import {Line} from "react-chartjs-2";
import 'chart.js/auto';

const Wrapper = styled.div`
  padding: 25px;
  width: auto;
  height: fit-content;
  text-align: center;
`

const PowerWrapper = styled.div`
  position: relative;
  font-size: 35px;
  font-weight: bold;
  height: 53px;
`

const PowerText = styled.div`
  width: 380px;
  margin: 0 auto;
`

const DateWrapper = styled.div`
  font-size: 20px;
  color: #5b5b5b;
  margin-bottom: 50px;
`

const StyledLightning = styled(Lightning)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-220px, -50%);
`

const RangeSelect = styled.div`
  margin: 20px auto;
  display: grid;
  width: fit-content;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`

const RangeButton = styled.div`
  background-color: ${({selected}) => selected ? "#F57C00" : "none"};
  color: ${({selected}) => selected ? "#ececec" : "#5b5b5b"};
  width: 150px;
  font-weight: bold;
  border-radius: 15px;
  height: 40px;
  line-height: 40px;
  cursor: ${({selected}) => selected ? "default" : "pointer"};
  transition: .3s;

  :hover {
    scale: ${({selected}) => selected ? "1" : "1.1"};
  }
`

class PowerSummaryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            daily: true,
            monthly: false
        }
        this.setDaily = this.setDaily.bind(this)
        this.setMonthly = this.setMonthly.bind(this)
    }

    setDaily() {
        this.setState({
            daily: true,
            monthly: false
        })
    }

    setMonthly() {
        this.setState({
            daily: false,
            monthly: true
        })
    }

    getDate() {
        return new Date();
    }

    render() {
        const {daily, monthly} = this.state;
        return (
            <Wrapper>
                <RangeSelect>
                    <RangeButton selected={daily} onClick={this.setDaily}>
                        Daily
                    </RangeButton>
                    <RangeButton selected={monthly} onClick={this.setMonthly}>
                        Weekly
                    </RangeButton>
                </RangeSelect>
                {daily && <PowerWrapper>
                    <PowerText>
                        <StyledLightning/>
                        {this.props.data.today + " kWh / " + this.props.data.today * 0.62 + " zł"}
                    </PowerText>
                </PowerWrapper>}
                { monthly && <PowerWrapper>
                    <PowerText>
                        <StyledLightning/>
                        {this.props.data.month + " kWh / " + this.props.data.month * 0.62 + " zł"}
                    </PowerText>
                </PowerWrapper>}
                <DateWrapper>
                    {this.getDate().getDay() + " " + this.getDate().toLocaleString('default', {month: 'long'}) + " " + this.getDate().getFullYear()}
                </DateWrapper>
                {daily && <Line
                    width={100}
                    height={20}
                    datasetIdKey='id'
                    data={{
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [
                            {
                                id: 1,
                                label: '',
                                data: [456, 536, 345, 567, 891, 345, 501],
                                borderColor: 'rgb(245,124,0)',
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            y: {
                                max: 1000,
                                min: 0,
                                ticks: {
                                    stepSize: 50
                                }
                            }
                        }
                    }}
                    type={"line"}/>}
                {monthly && <Line
                    width={100}
                    height={20}
                    datasetIdKey='id'
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                            {
                                id: 1,
                                label: '',
                                data: [4230, 4236, 1945, 2067, 3541, 3445, 5001, 4572, 2340, 2935, 6075, 2345, 5604],
                                borderColor: 'rgb(245,124,0)',
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            y: {
                                max: 9000,
                                min: 0,
                                ticks: {
                                    stepSize: 100
                                }
                            }
                        }
                    }}
                    type={"line"}/>}
            </Wrapper>
        );
    }
}

export default PowerSummaryCard;