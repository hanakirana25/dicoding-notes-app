import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AddNotePage from "../pages/AddNotePage";
import RegisterPage from '../pages/RegisPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';

import { ThemeProvider } from "../contexts/ThemeContext";

class App extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            authedUser: null,
            initializing: true,
            theme: localStorage.getItem('theme') || 'light',
            toggleTheme: () => {
                this.setState((prevState) => {
                  // mendapatkan nilai tema baru berdasarkan state sebelumnya
                  const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
                  // menyimpan nilai tema baru ke local storage
                  localStorage.setItem('theme', newTheme);
                  // mengembalikan state dengan nilai theme terbaru.
                  return {
                    theme: newTheme
                  };
                });
            }
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
        this.setState(() => {
          return {
            authedUser: data,
            initializing: false 
          };
        });
        document.documentElement.setAttribute('data-theme', this.state.theme);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
          document.documentElement.setAttribute('data-theme', this.state.theme);
        }
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState(() => {
          return {
            authedUser: data,
          };
        });
    }

    onLogout() {
        this.setState(() => {
          return {
            authedUser: null
          }
        });
        putAccessToken('');
    }


    render() {

        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
              <div className='container'>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                </main>
              </div>
            )
        }

        return(
            <ThemeProvider value={this.state}>
            <div>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage logout={this.onLogout} />} />
                        <Route path="/notes/detail/:id" element={<DetailPage />} />
                        <Route path="/notes/add" element={<AddNotePage />} />
                    </Routes>
                </main>
            </div>
            </ThemeProvider>
        )
    }
}

export default App;