import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/Firebase';
 
 export  const AuthContext = createContext(null)
 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [newsData, setNewsData] = useState([]);
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app);



    const createUser =(email, password) =>{
      setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser=(email, password) =>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
      setLoading(true)
       return signOut(auth)
    }
    useEffect((()=>{
        onAuthStateChanged(auth, currentUser=>{
                  console.log('current User value is', currentUser);
                  setUser(currentUser)
                  setLoading(false)

        })
    }),[])

 
    // load data 
    
    useEffect((()=>{
        fetch('../../public/news.json')
        .then(res => res.json())
        .then(data => setNewsData(data))
      }),[])



    const authInfo ={
        user,
        createUser,
        loginUser,
        logOut,
        newsData,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;