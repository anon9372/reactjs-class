import { useAppContext } from './Navbar'
const UserContainer = () => {
  console.log('render 3rd', useAppContext())
  const { user, handleLogout } = useAppContext()

  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={handleLogout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
