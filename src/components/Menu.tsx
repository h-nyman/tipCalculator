import { IonMenu, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel } from "@ionic/react"
import { homeOutline, calculatorOutline } from "ionicons/icons"

const Menu = () => (
  <IonMenu type="overlay" contentId="main">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        <IonMenuToggle autoHide>
          <IonItem routerLink="/welcome">
            <IonIcon slot="start" icon={homeOutline}></IonIcon>
            <IonLabel>Home</IonLabel></IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide>
          <IonItem routerLink="/tip">
            <IonIcon slot='start' icon={calculatorOutline}></IonIcon>
            <IonLabel>Tip Calculator</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
)

export default Menu