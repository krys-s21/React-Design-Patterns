import { printProps } from './printProps';
import { UserInfo  } from '../container/UserInfo';

const UserInfoWrapped = printProps(UserInfo);

export const PrintPropsWrapper = () => {


    return (
        <UserInfoWrapped a={1} b="Hello" c={{name: "Shaun"}} />
    );
}