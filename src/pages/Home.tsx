import { IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [people, setPeople] = useState(1);

  const tip = (tipPercentage*bill)/100;
  const total = bill + tip;
  const totalPerPerson = total/people;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
            <IonSelectOption value="2">2</IonSelectOption>
            <IonSelectOption value="3">3</IonSelectOption>
            <IonSelectOption value="4">4</IonSelectOption>
            <IonSelectOption value="5">5</IonSelectOption>
            <IonSelectOption value="6">6</IonSelectOption>
            <IonSelectOption value="7">7</IonSelectOption>
            <IonSelectOption value="8">8</IonSelectOption>
            <IonSelectOption value="9">9</IonSelectOption>
            <IonSelectOption value="10">10</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      <IonText>
        Total per person: {totalPerPerson}
      </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
