import './App.css';
import axios from 'axios';
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
import {
  ResourceLoader
} from './components/container/ResourceLoader';
import {
  ProductInfo
} from './components/container/ProductInfo';
import {
  DataSourceWrapper
} from './components/container/DataSourceWrapper';

import { UncontrolledForm } from './components/uncontrolled/UncontrolledForm';

function App() {
  return (
    <>
      <UncontrolledForm />
    </>
  );
}

export default App;