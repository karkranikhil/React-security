import auth0, {WebAuth} from 'auth0-js'
import history from './history'
class Auth{
    auth0 = new WebAuth({
        domain:'react-security.au.auth0.com',
        clientID:'lLCCEagOgIs6qNRccY5Co9jBhIzxu9f4',
        redirectUri:'http://localhost:1234/callback',
        responseType:'token'
    });
    loggedIn = false
    login = () =>{
       this.auth0.authorize();
    }
    handleAuthentication = () =>{
        this.auth0.parseHash((err, authResult)=>{
            if(authResult){
                console.log(authResult)
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('expires_at', JSON.stringify((authResult.expiresIn*1000)+ new Date().getTime()));
                this.loggedIn = true
                history.replace('/')
            } else if(err){
                console.log('err', err)
            }
            
        })
    }
    logout =()=>{
        //TODO
    }
    isAuthenticated(){
        return this.loggedIn && new Date().getTime() < +localStorage.getItem('expires_at');
    }

}
export default Auth;