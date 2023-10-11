import axios from 'axios';
import {
    DataSource
  } from './/DataSource';
  import {
    UserInfo
  } from './UserInfo';  

const getServerData = url => async() => {
    const response = await axios.get(url);
    return response.data;
}
const getLocalStorage = key => () => {
    return localStorage.getItem(key);
}

const Text = ({message}) => <h1>{message}</h1>
export const DataSourceWrapper = () => {
    return (
        <>
        <DataSource
        getDataFunc={getLocalStorage('message')}
        resourceName="message">
            <Text />
        </DataSource>
        <DataSource
        getDataFunc={getServerData('/users/1')}
        resourceName="user">
            <UserInfo />
        </DataSource>
    </>
    );

}