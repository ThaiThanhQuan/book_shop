import { Outlet } from "react-router-dom"
import AppHeader from "components/layout/app.header"
import { fetchAccountAPI } from "services/api"
import { useCurrentApp } from "components/context/app.context"
import { useEffect } from "react"
import { SyncLoader } from "react-spinners"

function Layout() {
    const { setUser, isAppLoading, setIsAppLoading, setIsAuthenticated } = useCurrentApp()

    useEffect(() => {
        const fetchAccount = async () => {
            const res = await fetchAccountAPI()
            if (res.data) {
                setUser(res.data.user)
                setIsAuthenticated(true)
            }
            setIsAppLoading(false)
        }
        fetchAccount()
    }, [])
    return (
        <>
            {isAppLoading === false ?
                <div>
                    <AppHeader />
                    <Outlet />
                </div> :
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <SyncLoader
                        size={30}
                        color="#1a836e"
                    />
                </div>}
        </>
    )
}

export default Layout