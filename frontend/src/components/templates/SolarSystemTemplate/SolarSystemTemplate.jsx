import MainTemplate from "../MainTemplate/MainTemplate";
import styled from "styled-components";
import {Bar, Line} from "react-chartjs-2";
import 'chart.js/auto';
import {CashCoin, Lightning} from "react-bootstrap-icons";

const ChartTitle = styled.div`
  font-size: 35px;
  margin-top: 50px;
  margin-bottom: 20px;
`
const Wrapper = styled.div`
  padding: 20px 50px 200px;
`

const HeaderNumber = styled.span`
  color: green;
  align-self: end;
  font-size: 40px;
`

const StyledCashCoinIcon = styled(CashCoin)`
  font-size: 52px;
  margin-right: 10px;
`
const StyledLightningIcon = styled(Lightning)`
  font-size: 52px;
  margin-right: 10px;
`

const CardDescription = styled.div`
  font-size: 20px;
`

const CardWrapper = styled.div`
  margin: 50px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Card = styled.div`
  text-align: center;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: #b9cea0;
  border-radius: 20px;
  padding: 10px;
`

const SolarSystemTemplate = () => (
    <MainTemplate>
        <Wrapper>
            <CardWrapper>
                <Card>
                    <HeaderNumber>4</HeaderNumber>
                    <CardDescription>Connected panels</CardDescription>
                </Card>
                <Card>
                    <HeaderNumber>8192 W</HeaderNumber>
                    <CardDescription>Summary power</CardDescription>
                </Card>
                <Card>
                    <HeaderNumber>24,7 kWh</HeaderNumber>
                    <CardDescription>Today produced energy</CardDescription>
                </Card>
                <Card>
                    <HeaderNumber>{24.7 * 0.62} zł</HeaderNumber>
                    <CardDescription>Today saved money</CardDescription>
                </Card>
                <Card>
                    <HeaderNumber>{24.7 * 20 * 0.62} zł</HeaderNumber>
                    <CardDescription>Monthly saved money</CardDescription>
                </Card>
            </CardWrapper>
            <ChartTitle>
                <StyledLightningIcon/>
                Produced energy
            </ChartTitle>
            <Bar
                width={100}
                height={20}
                datasetIdKey='id'
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: [423, 423, 194, 206, 354, 344, 500, 457, 234, 293, 607, 234, 560],
                            backgroundColor: 'rgb(245,124,0)',
                        },
                    ],
                }}
                options={{
                    scales: {
                        y: {
                            max: 650,
                            min: 0,
                            ticks: {
                                stepSize: 100
                            }
                        }
                    }
                }}
                type={"bar"}/>
            <ChartTitle>
                <StyledCashCoinIcon/> Saved money
            </ChartTitle>
            <Line
                width={100}
                height={20}
                datasetIdKey='id'
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: [423 * 0.62, 423 * 0.62, 194 * 0.62, 206 * 0.62, 354 * 0.62, 344 * 0.62, 500 * 0.62, 457 * 0.62, 234 * 0.62, 293 * 0.62 * 0.62, 607 * 0.62, 234 * 0.62, 560 * 0.62],
                            borderColor: 'rgb(245,124,0)',
                        },
                    ],
                }}
                options={{
                    scales: {
                        y: {
                            max: 400,
                            min: 0,
                            ticks: {
                                stepSize: 100
                            }
                        }
                    }
                }}
                type={"line"}/>
        </Wrapper>
    </MainTemplate>
);

export default SolarSystemTemplate;