import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import AppThemeProvider from "./context/AppThemeProvider";
import { AppLangProvider } from "./context/AppLangProvider";
import SimpleReactLightbox from "simple-react-lightbox";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./config/fbConfig";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <BrowserRouter>

                    <AppThemeProvider>
                        <AppLangProvider>
                            <SimpleReactLightbox>
                                <App />
                            </SimpleReactLightbox>
                        </AppLangProvider>
                    </AppThemeProvider>

                </BrowserRouter>
            </ReactReduxFirebaseProvider>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
