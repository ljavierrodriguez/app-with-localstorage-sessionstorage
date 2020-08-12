const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            apiUrl: "https://5000-cdcb3de0-9bdd-4f18-bbb2-876b573fcc12.ws-us02.gitpod.io",
            username: 'lrodriguez@4geeks.co',
            password: '123456',
            currentUser: null,
            error: null,
            isAuth: false
        },
        actions: {
            handleChange: e => {
                const {name, value} = e.target;
                setStore({
                    [name]: value
                })
            },
            getLogin: async (e, history) => {
                e.preventDefault();

                const store = getStore();
                const data = {
                    username: store.username,
                    password: store.password
                }

                const resp = await fetch(`${store.apiUrl}/api/login`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const result = await resp.json();
                if(result.msg){
                    setStore({
                        error: result.msg,
                        isAuth: false
                    })
                }else{
                    setStore({
                        username: '',
                        password: '',
                        error: null,
                        currentUser: result,
                        isAuth: true
                    });

                    //localStorage.setItem("currentUser", JSON.stringify(result))
                    //localStorage.setItem("isAuth", true)
                    sessionStorage.setItem("currentUser", JSON.stringify(result))
                    sessionStorage.setItem("isAuth", true)

                    history.push("/")
                }
            },
            isAuthenticated: () => {
                //localStorage.getItem("isAuth")
                if(sessionStorage.getItem("isAuth")){
                    setStore({
                        //currentUser: JSON.parse(localStorage.getItem("currentUser")),
                        //isAuth: JSON.parse(localStorage.getItem("isAuth"))
                        currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
                        isAuth: JSON.parse(sessionStorage.getItem("isAuth"))
                    })
                }
            },
            logout: (history) => {
                if(sessionStorage.getItem("isAuth")){
                    sessionStorage.removeItem("isAuth");
                    sessionStorage.removeItem("currentUser");
                    setStore({
                        error: null,
                        isAuth: false,
                        currentUser: null,
                    });
                    history.push("/login");
                }
            }
        }
    }
}

export default getState;