import './App.css';
import {
  SplitScreenWrapper
} from './components/layout/SplitScreenWrapper';
import {
  ListsWrapper
} from './components/layout/ListsWrapper';
import {
  Modal
} from './components/layout/Modal';
import {
  CurrentUserLoader
} from './components/container/CurrentUserLoader';
import {
  UserInfo
} from './components/container/UserInfo';


function App() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default App;