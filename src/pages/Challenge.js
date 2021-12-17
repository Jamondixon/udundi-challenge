import React from 'react'
import './Challenge.css'
import plus from '../Images/Plus.png'
import instagram from '../Images/Instagram.png'
import facebook from '../Images/Facebook.png'
import { BsXLg } from 'react-icons/bs'

export default function Challenge(props) {

    const showInitialInfo = () => {
        const info = document.querySelector(".initial-container")
        info.style.display = ''
    }
    

    function toggleBox() {
        var myBox = document.querySelector(".content-container")

        var displaySetting = myBox.style.display;

        if (displaySetting === 'block') {
            myBox.style.display = 'none'
        } else {
            myBox.style.display = 'block'
            
            const info = document.querySelector(".initial-container")
            info.style.display = 'none'
        }
    }

    const hideContentInfo = () => {
        const contentInfo = document.querySelector(".content-container")
        contentInfo.style.display = 'none'
        showInitialInfo()
    }


    return (
        <div className="challenge-container">
            <div className="initial-container">
                <div className="title-container">
                    <h1 className="text-white">Explore</h1>
                </div>
                <p className="text-white details">More Details</p>
            </div>
            <div className="sidebar w-25"></div>
            <div className="content-container">
                <h3 className="exit-icon" onClick={hideContentInfo}><BsXLg/></h3>
                <h2 className="content-title">Explore</h2>
                <hr className="gradient-line" />
                <p className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
                <div className="button-container">
                    <button className="text-white read-more">READ MORE</button>
                </div>
            </div>
            <button  onClick={toggleBox}><img src={plus} alt="plus icon" className="plus-icon"/></button>
            <img src={facebook} alt="facebook" className="facebook-icon"/>
            <img src={instagram} alt="instagram" className="instagram-icon"/>
        </div>
    )
}