import {useSelector} from 'react-redux';
import CertsTable from '../components/CertsTable';

export default function Certs() {
  
  // hook 'useSelector' allow extract data from Redux store's state
  //takes a function as argument,
  // returns the part of the state and extracts the 'user' property from Redux state,
  // and make it available as a variable in the current component.
  
  // const {currentUser} = useSelector(state => state.user);

  return (
    <div>
      <CertsTable />
    </div>
  )
}
