import React from 'react';
import style from './Footer.module.css';
import github_icon from '../Images/github-logo_icon-2.svg';
import vk_icon from '../Images/vk-icon.svg';

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div className={style.icon}>
                <a href="https://vk.com/id327824311">
                    <img src={vk_icon} alt='vk_icon' className={style.vk_icon}/>
                </a>
            </div>
            <div className={style.icon}>
                <a href="https://github.com/EfanovNikita"><img src={github_icon} alt='git_icon' className={style.git_icon}/></a>
            </div>
        </footer>
    )
}

export default Footer;