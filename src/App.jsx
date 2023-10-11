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
import {
  UserLoader
} from './components/container/UserLoader';

function App() {
  return (
    <>
    <UserLoader userId='1'>
      <UserInfo />
    </UserLoader>
    <UserLoader userId='2'>
      <UserInfo />
    </UserLoader>
    <UserLoader userId='3'>
      <UserInfo />
    </UserLoader>
    </>
  );
}

export default App;