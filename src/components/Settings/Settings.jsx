import React from 'react';
import s from "./Settings.module.css";

//при отмене значений через колбек (закоментировал) идет не понятное произвольное оставдение блоков без изменений и добавление вниз пустых. так же при вызове информации время от времени идут непонятные сбои. но цель не докопаться до какой-то редкой ошибки, а просто потренироваться. поэтому отмену значений просто реализовал перезагрузкой страницы.
//  ну и люблю нестандартные решения, так что все равно бы оставил с перезагрузкой!  ;)

// const BACK = 'BACK';

const Settings = (props) => {

    return <div className={s.osn}>
        {props.pages.map(p =>
            <div key={p.id} className={s.dis} onClick={() => { props.onClickPage(p.id) }}>
                <h2> {p.id} </h2>
            </div>)}
        {/* <button className={s.butt} onClick={() => {props.onClickPage(BACK)}}>ОТМЕНИТЬ ВСЁ</button> */}
        <button className={s.butt} onClick={() => { window.location.reload() }}>ОТМЕНИТЬ ВСЁ</button>
    </div>
}

export default Settings;