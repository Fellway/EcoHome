import styled from "styled-components";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import Navbar from "../../molecules/Navbar/Navbar";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: calc(100% - 150px);
`

const Content = styled.div`
  height: fit-content;
  width: calc(100% - (150px - 80px));
  margin-top: 150px;
  margin-left: 150px;
  background-color: #F8F9FA;
`

const MainTemplate = ({children}) => (
    <Wrapper>
        <Navbar/>
        <Sidebar/>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

export default MainTemplate;