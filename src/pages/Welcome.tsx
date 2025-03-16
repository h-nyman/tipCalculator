import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonList, IonItem, IonMenuToggle, IonButton, IonText, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, calculatorOutline } from "ionicons/icons";

const Welcome: React.FC = () => {
    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Welcome</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Welcome</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonText>
                        <p>This application has two functions: </p>
                        <p>It can help you calculate how much your bill is when you add a certain percentage of tip.</p>
                        <p>It can also divide the payment amount between a group of people.</p></IonText>
                    <div className="center-container">
                        <IonButton routerLink="/tip" shape="round" fill="outline">
                            Go to Tip Calculator
                        </IonButton>
                    </div>

                </IonContent>
            </IonPage>
        </>
    );
};
export default Welcome;
