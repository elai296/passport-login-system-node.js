const LocalStrategy = require('passport-local').Strategy

function initialize (passport) {
    const authenticateUser = (email, password, done)=>{
        const user = getUserByEmail(email)
        if (user == null){
            return done(null, false { message: 'No User with that email'})
        }
        try {
            if(await bcrypt.compare(password, user.password))
        } else{
            catch {

        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email'}), authenticateUser)
    passport.serializeUser((user,done) => {  });
    passport.deserializeUser((id, done) => { });
}