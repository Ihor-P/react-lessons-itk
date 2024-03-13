import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.imagebeach}>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt='main_photo(seaBeach)'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='фото профілю'/>
                <div>Про мене: {props.profile.aboutMe}</div>
                <div>Зв'язатися: {props.profile.contacts.vk}</div>
                <div>Шукаю роботу: {props.profile.lookingForAJob ? <span>так ˙◠˙ {props.profile.lookingForAJobDescription}</span> : <span>ні ヅ</span>}</div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;