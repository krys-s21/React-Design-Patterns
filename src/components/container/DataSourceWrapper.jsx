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

export const DataSourceWrapper = () => {
    return (
        <DataSource
            getDataFunc={getServerData('/users/1')}
            resourceName="user">
                <UserInfo />
        </DataSource>
    );

}