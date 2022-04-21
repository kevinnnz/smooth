import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
/**
 * Displays detailed information about the business.
 * The business gets passed in through the location.state property from react-router-dom.
 * If there is no location.state then we redirect back to the homepage.
 * @author Kevin Zaworski
 */
export default function BusinessDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [business, setBusiness] = useState();
    
    useEffect(() => {
        if(location.state === null) return navigate("/");
        
        setBusiness(location.state.business);
    },[location.state, navigate]);

    // if we have a business... wait for it to get added to state
    if(business === undefined) return <></>
    return(
        <div className="grid-container">
            <div>
                <img src={business.image} alt="Place holder" />
            </div>  
            <div>
                <p><strong>Business Name: </strong>{ business.company_name }</p>
                <p><strong>Address: </strong>{ business.company_name }</p>
                <p><strong>Website: </strong>{business.address + ', ' + business.city + ', ' + business.province}</p>
                <p><strong>Hours: </strong></p>
                <ul>
                    { business.hours.map((hour, index) => (
                        <li key={index}>{hour.day}: {hour.open} - {hour.close}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}