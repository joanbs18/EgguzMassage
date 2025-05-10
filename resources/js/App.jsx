import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load de los componentes
import PrivateRoute from "./components/PrivateRoute";
const ServiciosPage = lazy(() => import("./pages/ServiciosPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Header = lazy(() => import("./components/Header"));
const Index = lazy(() => import("./pages/Index"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Cita = lazy(() => import("./components/Cita"));
const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GestionCitas = lazy(() => import("./pages/GestionCitas"));
const Clientes = lazy(() => import("./pages/Clientes"));
const Servicios = lazy(() => import("./pages/Servicios"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

// Layouts
function MainLayout({ children }) {
    return (
        <Suspense fallback={<div role="status">Cargando...</div>}>
            <Header />
            {children}
        </Suspense>
    );
}

function AdminLayout({ children }) {
    return (
        <Suspense fallback={<div role="status">Cargando...</div>}>
            {children} {/* Sin Header */}
        </Suspense>
    );
}

// Componente principal
function App() {
    return (
        <Router>
            <Routes>
                {/* Rutas con Header */}
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Suspense
                                fallback={
                                    <div role="status">
                                        Cargando página principal...
                                    </div>
                                }
                            >
                                <Index />
                            </Suspense>
                        </MainLayout>
                    }
                />

                <Route
                    path="/citas"
                    element={
                        <MainLayout>
                            <Suspense
                                fallback={
                                    <div role="status">Cargando cita...</div>
                                }
                            >
                                <Cita />
                            </Suspense>
                        </MainLayout>
                    }
                />

                <Route
                    path="/contacto"
                    element={
                        <MainLayout>
                            <Suspense
                                fallback={
                                    <div role="status">
                                        Cargando contacto...
                                    </div>
                                }
                            >
                                <Contact />
                            </Suspense>
                        </MainLayout>
                    }
                />

                <Route
                    path="/servicios"
                    element={
                        <MainLayout>
                            <Suspense
                                fallback={
                                    <div role="status">
                                        Cargando servicios...
                                    </div>
                                }
                            >
                                <ServiciosPage />
                            </Suspense>
                        </MainLayout>
                    }
                />

                <Route
                    path="/nosotros"
                    element={
                        <MainLayout>
                            <Suspense
                                fallback={
                                    <div role="status">
                                        Cargando nosotros...
                                    </div>
                                }
                            >
                                <Nosotros />
                            </Suspense>
                        </MainLayout>
                    }
                />

                {/* Ruta de login sin Header */}
                <Route
                    path="/login"
                    element={
                        <AdminLayout>
                            <Suspense
                                fallback={
                                    <div role="status">Cargando login...</div>
                                }
                            >
                                <LoginPage />
                            </Suspense>
                        </AdminLayout>
                    }
                />

                {/* Rutas de admin protegidas */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <Suspense
                                fallback={
                                    <div role="status">Cargando admin...</div>
                                }
                            >
                                <Admin />
                            </Suspense>
                        </PrivateRoute>
                    }
                >
                    <Route
                        index
                        element={
                            <PrivateRoute>
                                <Suspense
                                    fallback={
                                        <div role="status">
                                            Cargando dashboard...
                                        </div>
                                    }
                                >
                                    <Dashboard />
                                </Suspense>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="citas"
                        element={
                            <PrivateRoute>
                                <Suspense
                                    fallback={
                                        <div role="status">
                                            Cargando gestión de citas...
                                        </div>
                                    }
                                >
                                    <GestionCitas />
                                </Suspense>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="clientes"
                        element={
                            <PrivateRoute>
                                <Suspense
                                    fallback={
                                        <div role="status">
                                            Cargando clientes...
                                        </div>
                                    }
                                >
                                    <Clientes />
                                </Suspense>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="servicios"
                        element={
                            <PrivateRoute>
                                <Suspense
                                    fallback={
                                        <div role="status">
                                            Cargando servicios...
                                        </div>
                                    }
                                >
                                    <Servicios />
                                </Suspense>
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
