import { IonContent, IonHeader, IonInput, IonItem, IonList, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonPage } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Tip = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [people, setPeople] = useState(1);

  const tip = (tipPercentage * bill) / 100;
  const total = bill + tip;
  const totalPerPerson = total / people;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tip Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tip Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem>
            <IonInput label="Total bill: " type="number" value={bill} onIonInput={e => setBill(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Tip %: " value={tipPercentage} type="number" onIonInput={e => setTipPercentage(parseFloat(e.detail.value!))}></IonInput>
          </IonItem>
        </IonList>

        <IonList>
          <IonItem>
            <IonSelect label="Split (Number of people): " value={people} onIonChange={(e) => setPeople(parseFloat(e.detail.value!))}>
              <IonSelectOption value={1}>1</IonSelectOption>
              <IonSelectOption value={2}>2</IonSelectOption>
              <IonSelectOption value={3}>3</IonSelectOption>
              <IonSelectOption value={4}>4</IonSelectOption>
              <IonSelectOption value={5}>5</IonSelectOption>
              <IonSelectOption value={6}>6</IonSelectOption>
              <IonSelectOption value={7}>7</IonSelectOption>
              <IonSelectOption value={8}>8</IonSelectOption>
              <IonSelectOption value={9}>9</IonSelectOption>
              <IonSelectOption value={10}>10</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <p className='ion-padding'>
          <IonText>
            Total: {total.toFixed(2)}
          </IonText>
        </p>
        <p className='ion-padding'>
          <IonText>
            Total per person: {totalPerPerson.toFixed(2)}
          </IonText>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tip;
