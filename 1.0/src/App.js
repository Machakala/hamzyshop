import React,{ useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import HomeScreenSell from './screens/HomeScreenSell';
import HomeScreenBuy from './screens/HomeScreenBuy';
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import calculator from './screens/calculator';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import SellerRoute from './components/SellerRoute';
import ProductListScreen from './screens/ProductListScreen';
import AdminRoute from './components/AdminRoute';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import DashboardScreen from './screens/DashboardScreen';
import SellerScreen from './screens/SellerScreen';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';
import { listProductCategories } from './actions/productActions';

import MapScreen from './screens/MapScreen';
import WalletScreen from './screens/WalletScreen';

export default function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
    return ( <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      
        <main >
                   <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>

         <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>

            <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
          <SellerRoute
          path="/productlist/seller"
          component={ProductListScreen}
        ></SellerRoute>
        <SellerRoute
          path="/orderlist/seller"
          component={OrderListScreen}
        ></SellerRoute>
            <Route path="/seller/:id" component={SellerScreen}></Route>

            <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
            <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
            <AdminRoute
            path="/userlist"
            component={UserListScreen}
            exact
          ></AdminRoute>
            <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
            <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
            <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
            <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>

            <Route path="/orderhistory" component={OrderHistoryScreen}></Route>

            <Route path="/order/:id" component={OrderScreen}></Route>

            <Route path="/placeorder" component={PlaceOrderScreen}></Route>

            <Route path="/payment" component={PaymentMethodScreen}></Route>

            <Route path="/shipping" component={ShippingAddressScreen}></Route>

            <Route path="/calculate" component={calculator}></Route>

            <Route path="/register" component={RegisterScreen}></Route>

            <Route path="/signin" component={SigninScreen}></Route>
            <
                Route path = "/buyproduct"
            component = {HomeScreenBuy}
            /> <
                Route path = "/sellproduct"
            component = {HomeScreenSell}
            />
            
            <
                Route path = "/wallet"
            component = {WalletScreen}
            />
            <
                Route path = "/cart/:id?"
            component = { CartScreen }
            />

            <
            Route path = "/product/:id"
            component = { ProductScreen }
            exact / >
                <
                Route path = '/Homescreen'
            component = { Homescreen }
             / >
            <
            Route path = '/'
        component = { Home }
        exact / >
                <
                /main> <
            footer className = "row center" >
                All Rights reserved 2021. by hamzy 
                {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
                <
                /footer> < /
            div > <
                /BrowserRouter>
        )
    }