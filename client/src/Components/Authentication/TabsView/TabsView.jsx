import React, { useState } from 'react';
import CreateProduct from '../../../Auth/CreateProduct/CreateProduct'
import Locations from '../../Common/Locations/Locations';
import BasicData from '../../FormsUser/BasicData/BasicData';
import UserOrders from '../../UserOrders/UserOrders';
import style from './TabsView.module.css';
import AdminView from '../../Pages/AdminView/AdminView';

const TabsView = ({ currentUser }) => {

  const [activeTab, setActiveTab] = useState('myInfo');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'myInfo':
        return <div className={style.uniqueItemContainer}>
          <p>Nombre: {currentUser.firstName}</p>
          <br />
          <p>Email: {currentUser.email}</p>
        </div>;
      case 'viewOrders':
        return <div className={style.uniqueItemContainer}>
          <h3>Mis órdenes</h3>
          <p>Consulta aquí el historial de tus órdenes</p>
          <UserOrders currentUser={currentUser} />
        </div>
      case 'createProd':
        return <div className={style.uniqueItemContainer}> 
          {/* <CreateProduct />  */}
          <AdminView />
        </div>;
      case 'updateLocations':
        return <div className={style.uniqueItemContainer}>
          <Locations currentUser={currentUser} />
        </div>;
      case 'updatePersonal':
        return <div className={style.uniqueItemContainer}>
          <BasicData currentUser={currentUser} />
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className={style.fullTabsContainer}>
      <div className={`${style.myTabsContainer} ${style.otraCosa}`}>
        {
          currentUser.isAdmin ? (<button onClick={() => setActiveTab('createProd')} className={activeTab === 'createProd' ? `active ${style.tabsNavigate}` : `${style.tabsNavigate}`}>
            Panel de administrador
          </button>) : null
        }
        <button onClick={() => setActiveTab('myInfo')} className={activeTab === 'myInfo' ? `active ${style.tabsNavigate}` : `${style.tabsNavigate}`}>
          Mis datos
        </button>
        <button onClick={() => setActiveTab('updatePersonal')} className={activeTab === 'updatePersonal' ? `active ${style.tabsNavigate}` : `${style.tabsNavigate}`}>
          Actualizar Mis Datos
        </button>
        <button onClick={() => setActiveTab('viewOrders')} className={activeTab === 'viewOrders' ? `active ${style.tabsNavigate}` : `${style.tabsNavigate}`}>
          Mis pedidos
        </button>
        <button onClick={() => setActiveTab('updateLocations')} className={activeTab === 'updateLocations' ? `active ${style.tabsNavigate}` : `${style.tabsNavigate}`}>
          Actualizar Ubicaciones
        </button>
      </div>
      <div className="myTabContent">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabsView;
