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
import {
  ResourceLoader
} from './components/container/ResourceLoader';
import {
  ProductInfo
} from './components/container/ProductInfo';

function App() {
  return (
    <>
    <ResourceLoader resourceUrl="/users/1" resourceName="user">
      <UserInfo />
    </ResourceLoader>
    <ResourceLoader resourceUrl="/products/1" resourceName="product">
      <ProductInfo />
    </ResourceLoader>
    <ResourceLoader resourceUrl="/users/1" resourceName="user">
      <UserInfo />
    </ResourceLoader>
    </>
  );
}

export default App;