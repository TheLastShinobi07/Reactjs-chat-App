import "./Sidebar.css"
import UsersCard from "./UsersCard"
export default function Sidebar(){
    return(
        <>
            <div className="users-list">
                <h1>Chats</h1>
                <div className="card-container">
                    
                    <UsersCard profile_img="https://i.pinimg.com/originals/1b/e2/9b/1be29b7fc26f3c7afbadf1a3a6fa579f.jpg" name="Kirito" />

                    <UsersCard profile_img="https://preview.redd.it/i7r46sfxcxm21.jpg?auto=webp&s=e9e329b7229f15bc2ed3c7d98fa9861cf29ee3d1" name="Asuna" />

                    <UsersCard profile_img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22a16b68-46a4-4641-9cb7-2366d09e0cab/df4t92h-868efc97-2fef-4215-999a-47035c6d2eaa.jpg/v1/fill/w_1280,h_1280,q_75,strp/mastered_ui_goku_by_ramonfer_by_ramonfer_df4t92h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIyYTE2YjY4LTQ2YTQtNDY0MS05Y2I3LTIzNjZkMDllMGNhYlwvZGY0dDkyaC04NjhlZmM5Ny0yZmVmLTQyMTUtOTk5YS00NzAzNWM2ZDJlYWEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JnqI5VXi6UMm4mrLWZvoHa37tlGIYomWdkZQH4yL_k8" name="Kirito" />

                </div>
            </div>
        </>
    )
}