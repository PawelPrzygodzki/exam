export default class LoginService {
    login = ({
        email,
        password,
    }) => {
        return new Promise((resolve, reject) => {
           if(email === 'test@test.pl' && password === 'Password1') {
               return resolve('login success');
           }

           return reject('invalid email or password');
        });
    }
}