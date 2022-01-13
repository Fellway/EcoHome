import styled from "styled-components";
import Header from "../../atoms/Header/Header";
import * as PropTypes from "prop-types";
import _ from "lodash";
import {Component} from "react";

const Wrapper = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;

  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .5);
`;

const Table = styled.table`
  width: 100%;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin-top: 20px;
`

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #ececec;
  }

  border-bottom: 1px solid #b7b7b7;
`

const TableData = styled.td`
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: .9rem;

  &:nth-child(even) {
    color: green;
  }
`

class SummaryCard extends Component {
    render() {
        console.log(this.props)
        const data = this.props.data;
        const title = this.props.title;
        return (
            <Wrapper>
                <Header uppercase={this.props.uppercase}>{title}</Header>
                <Table>
                    <tbody>
                    {Object.keys(data).map((key, i) => (
                        <>
                            <TableRow>
                                <TableData>{_.lowerCase(key)}</TableData>
                                <TableData>{data[key]}</TableData>
                            </TableRow>
                        </>
                    ))}
                    </tbody>
                </Table>
            </Wrapper>
        );
    }
}

SummaryCard.propTypes = {data: PropTypes.any, title: PropTypes.string}

export default SummaryCard;