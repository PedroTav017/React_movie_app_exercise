// components
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import styled from "styled-components";
// routes
import AppRouter from "./routes/AppRouter";

const { Header, Footer, Content } = Layout;

// CSS-in-JS styles using styled-components & inline styles
const ContentDiv = styled.div`
  padding: 50px;
  min-height: calc(100vh - (68px * 2));
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

function App() {
  return (
    <div>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <ContentDiv>
            <AppRouter />
          </ContentDiv>
        </Content>
        <Footer>
          <small>React Application Exercise - Pedro Tavares</small>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
