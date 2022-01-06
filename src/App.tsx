// components
import Navbar from "./components/Navbar";
import { Layout } from "antd";
// routes
import AppRouter from "./routes/AppRouter";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content
          style={{ padding: "50px", minHeight: "calc(100vh - (68px * 2))" }}
        >
          <AppRouter />
        </Content>
        <Footer>
          <small>React Application Exercise - Pedro Tavares</small>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
