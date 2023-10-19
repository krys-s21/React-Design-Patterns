//import { withEditableUser } from './withEditableUser';
import { withEditableResource } from './withEditableResource';
//export const UserInfoForm = withEditableUser(({user, onChangeUser, onSaveUser, onResetUser})=>{
export const UserInfoForm = withEditableResource(({user, onChangeUser, onSaveUser, onResetUser})=>{
    const {name, age, hairColor}=user ||{};

    return user ? (
        <>
        <label>Name:</label>
        <input value={name} onChange={e=>onChangeUser({name: e.target.value})} />
        <label>Age:</label>
        <input type="number" value={age} onChange={e=>onChangeUser({age: Number(e.target.value)})} />
        <label>Hair Color:</label>
        <input value={hairColor} onChange={e=>onChangeUser({hairColor: e.target.value})} />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : <p>Loading...</p>
}, '/users/2','user');