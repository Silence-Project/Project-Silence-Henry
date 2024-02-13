import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CreateProduct from '../../../Auth/CreateProduct/CreateProduct'
import Locations from '../../Common/Locations/Locations';
import MyDataForm from '../MyDataForm/MyDataForm';

const TabsView = ({ localUserData, currentUser }) => {
  const { user } = useAuth0();
  const { nickname, email } = user;

  // console.log('que es userData???? ', userData);
  //ESTO NO FUNCIONAAAAAAA, porser

  const [activeTab, setActiveTab] = useState('myInfo');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'myInfo':
        return <div>
          <p>Nombre: {email}</p>
          <p>Email: {email}</p>
        </div>;
      case 'createProd':
        return <div> <CreateProduct /> </div>;
      case 'updateLocations':
        return <div><p>Ubicaciones</p><Locations currentUser={currentUser} /></div>;
      case 'updatePersonal':
        return <div>Actualizar Información Personal
          <MyDataForm currentUser={currentUser} />
        </div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="myTabs">
        <button onClick={() => setActiveTab('myInfo')} className={activeTab === 'myInfo' ? 'active' : ''}>
          Mis datos
        </button>
        <button onClick={() => setActiveTab('updatePersonal')} className={activeTab === 'updatePersonal' ? 'active' : ''}>
          Actualizar Mis Datos
        </button>
        {
          localUserData.isAdmin ? (<button onClick={() => setActiveTab('createProd')} className={activeTab === 'createProd' ? 'active' : ''}>
            Crear Producto
          </button>) : null
        }

        <button onClick={() => setActiveTab('updateLocations')} className={activeTab === 'updateLocations' ? 'active' : ''}>
          Actualizar Ubicaciones
        </button>
      </div>
      <div className="myTab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabsView;
