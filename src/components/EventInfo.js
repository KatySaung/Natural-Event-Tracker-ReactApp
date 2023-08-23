const EventInfo = ({ info }) =>{
    return (
        <div className="location-info">
            <h3>Event Date and Location Info</h3>
            <ul>
                <li>ID: { info.id }</li>
                <li>ID: { info.title }</li>
                <li>ID: { info.date }</li>
            </ul>
        </div>
    )
}

export default EventInfo