import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";
import styles from '../styles/controllersScreen.module.css';




export const ControllerScreeen = () => {
    const { setAuth } = useContext(AuthContext);
    function handleSignOut() {
        signOut(auth)
            .then((res) => {
                setAuth({ email: "", uid: "", isAuthentificated: false });
            })
            .catch(console.log)
    }

    return (
        <>
            <section className={styles.mainContainer}>
                <article className="control-buttons-container">
                    <div></div>
                    <div>
                        <img src="./assets/topArrow.svg" alt="arrow-top" className="arrow" id="topArrow" />
                    </div>
                    <div></div>
                    <div>
                        <img src="./assets/leftArrow.svg" alt="arrow-left" className="arrow" id="leftArrow" />
                    </div>
                    <div></div>
                    <div>
                        <img src="./assets/right-Button.svg" alt="arrow-rigth" className="arrow" id="rightArrow" />
                    </div>
                    <div></div>
                    <div>
                        <img src="./assets/arrowReverse.svg" alt="arrow-reverse" className="arrow" id="backArrow" />
                    </div>
                    <div></div>
                </article>
                <article className="control-light-container">
                    <div className="buttons">
                        <img src="./assets/lightON.svg" alt="on-light" className="light-button" id="front-arrow-on" />
                        <img src="./assets/lightOFF.svg" alt="on-light" className="light-button" id="front-arrow-off" />
                    </div>
                    <div className="buttons">
                        <img src="./assets/lightON.svg" alt="on-light" className="light-button" id="back-arrow-on" />
                        <img src="./assets/lightOFF.svg" alt="on-light" className="light-button" id="back-arrow-off" />
                    </div>
                    <div>
                        <img src="./assets/stop.svg" alt="stop-button" className="stop" />
                    </div>
                </article>
            </section>
        </>
    );
}