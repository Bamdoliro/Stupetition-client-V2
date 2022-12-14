import React from "react"
import "./MainContent.css"
import PetitionList from "../PetitionList/PetitionList.js"

export default function MainContent({SchoolName}) {
    const PostOnClick = () => {
        console.log("Post Btn Click")
    }

    return (
        <div className="main-container">
            <div className="main-container-bar">
                <div className="main-school-name">
                    <span>
                        {SchoolName}
                    </span>
                </div>
                <div className="main-post-area">
                    <button className="main-add-post-btn" onClick={PostOnClick}>
                        게시물 추가
                    </button>
                </div>
            </div>
            <ul className="main-petition-ul">
                <PetitionList 
                    Title = {"아침운동 없애주세요"}
                    Date = {"02/02 - 04/02"}
                    MessageNumber = {23}
                    ProgressDate = {60}
                />
                <PetitionList 
                    Title = {"사감쌤 없애주세요"}
                    Date = {"12/03 - 12/10"}
                    MessageNumber = {23}
                    ProgressDate = {100}
                />
            </ul>
        </div>
    )
}