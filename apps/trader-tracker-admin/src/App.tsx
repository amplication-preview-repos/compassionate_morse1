import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PositionList } from "./position/PositionList";
import { PositionCreate } from "./position/PositionCreate";
import { PositionEdit } from "./position/PositionEdit";
import { PositionShow } from "./position/PositionShow";
import { TraderList } from "./trader/TraderList";
import { TraderCreate } from "./trader/TraderCreate";
import { TraderEdit } from "./trader/TraderEdit";
import { TraderShow } from "./trader/TraderShow";
import { FollowingList } from "./following/FollowingList";
import { FollowingCreate } from "./following/FollowingCreate";
import { FollowingEdit } from "./following/FollowingEdit";
import { FollowingShow } from "./following/FollowingShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TraderTracker"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Position"
          list={PositionList}
          edit={PositionEdit}
          create={PositionCreate}
          show={PositionShow}
        />
        <Resource
          name="Trader"
          list={TraderList}
          edit={TraderEdit}
          create={TraderCreate}
          show={TraderShow}
        />
        <Resource
          name="Following"
          list={FollowingList}
          edit={FollowingEdit}
          create={FollowingCreate}
          show={FollowingShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
