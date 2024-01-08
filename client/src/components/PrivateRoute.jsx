// useSelector is a hook provided by the 'react-redux' library
// that allows to extract data from the Redux store in a functional component.
import {useSelector} from 'react-redux'
//<Outlet /> is used to render the content of the child route,
// and <Navigate /> is used for programmatic navigation.
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
  
}

//