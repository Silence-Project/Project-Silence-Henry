import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CreateProduct from '../../../Auth/CreateProduct/CreateProduct'

const TabsView = ({localUserData}) => {
  const { user } = useAuth0();
  const { nickname, email } = user;

  const [activeTab, setActiveTab] = useState('myInfo');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'myInfo':
        return <div>
          <p>Nombre: {nickname}</p>
          <p>Email: {email}</p>
        </div>;
      case 'createProd':
        return <div> <CreateProduct /> </div>;
      case 'updateLocations':
        return <div>Ubicaciones</div>;
      case 'updatePersonal':
        return <div>Actualizar Información Personal</div>;
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
