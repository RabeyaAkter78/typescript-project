import {info} from "./UserInfo"
 type AdminInfo=info &{
    admin:string
 }
const AdminInfo = ({username,age,email,location,admin}:AdminInfo) => {
    return (
        <div>
        <ul>
          <li>   <h1>Name:{username}</h1></li>
          <li>   <h1>Email:{email}</h1></li>
          <li>   <h1>Location:{JSON.stringify(location)}</h1></li>
          <li>   <h1>age:{age}</h1></li>
          <li>   <h1>admin:{admin}</h1></li>
        </ul>
          </div>
    );
};

export default AdminInfo;