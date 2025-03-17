import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText, IonButtons, IonMenuButton, IonPage } from '@ionic/react';

const Welcome: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Welcome</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Welcome</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonText>
                    <p>This application has two functions:</p>
                    <p>It helps you calculate the total bill, including a specified tip percentage.</p>
                    <p>It also divides the total amount among a group of people.</p></IonText>
                    <div className="center-container">
                        <IonButton routerLink="/tip" shape="round" fill="outline">
                            Go to Tip Calculator
                        </IonButton>
                    </div>
            </IonContent>
        </IonPage>
    );
};
export default Welcome;
