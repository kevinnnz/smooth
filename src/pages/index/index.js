import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDirectory } from '../../store/businessDirectorySlice';

/**
 * This page is the main page in the application. 
 * It displays the business directory table, and tells redux to fetch the API
 * @author Kevin Zaworski
 */
export default function Index() {
  const directory = useSelector((state, selector) => state.businessDirectory.directory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDirectory());
  }, [dispatch])

  return (
    <div className="App">
      <table>
          <thead>
                <tr>
                    <th>Business ID</th>
                    <th>Business Name</th>
                    <th>Website</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                { directory.map((business) => (
                <tr key={business.id}>
                    <td style={{textAlign: 'right'}}>{business.id}</td>
                    <td><Link 
                        to={'/' + business.id}
                        state={{'business' : business }}
                        >{business.company_name}</Link></td>
                    <td>{business.website}</td>
                    <td>{business.address + ', ' + business.city + ', ' + business.province}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}