export type info={
   username:string;
   email:string ;
   age:number;
   location:string[]

}

const UserInfo = ({username,age,email,location}:info) => {
    return (
        <div>
      <ul>
        <li>   <h1>Name:{username}</h1></li>
        <li>   <h1>Email:{email}</h1></li>
        <li>   <h1>Location:{JSON.stringify(location)}</h1></li>
        <li>   <h1>age:{age}</h1></li>
      </ul>
        </div>
    );
};

export default UserInfo;