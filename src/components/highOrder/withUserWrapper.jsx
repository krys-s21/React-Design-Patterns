import { withUser } from './withUser';
import { UserInfo  } from '../container/UserInfo';

const UserInfoWithLoader = withUser(UserInfo, '1');

export const WithUserWrapper = () => {


    return (
        <UserInfoWithLoader />
    );
}