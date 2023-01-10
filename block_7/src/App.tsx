import {Container} from "./components/Container";
import {TheHrader} from "./components/TheHrader";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";
import {UserMock} from "./mock";

function App() {
  return (
    <Container>
      <TheHrader/>
        <Search onSubmit={()=>{}}/>
        <UserCard  {...UserMock}/>
    </Container>
  );
}

export default App;
