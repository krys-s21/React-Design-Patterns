import './App.css';
// import { ControlledOnboardingFlowWrapper } from './components/controlled/ControlledOnboardingFlowWrapper';
// import { PrintPropsWrapper } from './components/highOrder/printPropsWrapper';
// import { WithUserWrapper } from './components/highOrder/withUserWrapper';
// import axios from 'axios';
// import {
//   SplitScreenWrapper
// } from './components/layout/SplitScreenWrapper';
// import {
//   ListsWrapper
// } from './components/layout/ListsWrapper';
// import {
//   Modal
// } from './components/layout/Modal';
// import {
//   CurrentUserLoader
// } from './components/container/CurrentUserLoader';
import {
  UserInfo
} from './components/container/UserInfo';
// import {
//   UserLoader
// } from './components/container/UserLoader';
// import {
//   ResourceLoader
// } from './components/container/ResourceLoader';
import {
  ProductInfo
} from './components/container/ProductInfo';
// import {
//   DataSourceWrapper
// } from './components/container/DataSourceWrapper';

// import { UncontrolledForm } from './components/uncontrolled/UncontrolledForm';
// import { ControlledForm } from './components/controlled/ControlledForm';
// import { ControlledModalWrapper } from './components/controlled/ControlledModalWrapper';
// import { UncontrolledOnboardingFlowWrapper } from './components/uncontrolled/UncontrolledOnboardingFlowWrapper';
// import { UserInfoForm } from './components/highOrder/UserInfoForm';
function App() {
  return (
    <>
      <UserInfo userId="1" />
      <ProductInfo productId="1" />
    </>
  );
}

export default App;