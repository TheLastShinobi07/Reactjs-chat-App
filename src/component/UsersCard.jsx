import "./Sidebar.css"
export default function UsersCard(props){
    return(
        <>
            <div className="user-card">
                <div className="img">
                    <img src={props.profile_img} alt="" />
                </div>
                <div className="details">
                    <span className="name">{props.name}</span><br />
                    <span>Hello</span>
                </div>
            </div>
        </>
    )
}