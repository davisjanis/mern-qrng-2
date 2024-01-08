import {useSelector} from 'react-redux';

export default function Certs() {
  
  const {currentUser} = useSelector(state => state.user);

  
  
  return (
    <div>
      Certs
    </div>
  )
}
