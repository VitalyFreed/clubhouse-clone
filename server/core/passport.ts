import passport from 'passport';
import {Strategy as GithubStrategy} from 'passport-github';
import User from '../../models/user';

passport.use(
    'github',
    new GithubStrategy(
    {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/auth/github/callback'
    },
    async (accessToken, refreshToken, profile, cb) => {
        const obj = {
            fullname: profile.displayName,
            avatarUrl: profile.photos?.[0].value,
            isActive: 0,
            username: profile.username,
            phone: '',
        };
        // console.log(`accessToken => ${accessToken}`);
        // console.log(`refreshToken => ${refreshToken}`);
        // console.log(`PROFILE => ${profile}`);
        const user = awair User.create(obj);
        cb();
    }
));

export {passport};
