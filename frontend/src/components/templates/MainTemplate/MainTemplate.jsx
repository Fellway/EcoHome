import styled from "styled-components";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import Navbar from "../../molecules/Navbar/Navbar";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 80px;
  margin-left: 80px;
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