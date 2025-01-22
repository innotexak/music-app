import passport from 'passport'
import UserSchema from '../models/user'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

// Passport configuration
// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await UserSchema.findOne({ googleId: profile.id })
        if (existingUser) {
          return done(null, existingUser)
        }
        const newUser = new UserSchema({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        })
        await newUser.save()
        return done(null, newUser)
      } catch (error) {
        return done(error, null)
      }
    },
  ),
)

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: 'YOUR_FACEBOOK_APP_ID',
      clientSecret: 'YOUR_FACEBOOK_APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await UserSchema.findOne({
          facebookId: profile.id,
        })
        if (existingUser) {
          return done(null, existingUser)
        }
        const newUser = new UserSchema({
          facebookId: profile.id,
          name: profile.displayName,
          email: profile._json.email,
        })
        await newUser.save()
        return done(null, newUser)
      } catch (error) {
        return done(error, null)
      }
    },
  ),
)

// Local Strategy
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await UserSchema.findOne({ email })
        if (!user)
          return done(null, false, { message: 'Invalid email or password' })

        const isMatch = await bcrypt.compare(user.password, password)
        if (!isMatch)
          return done(null, false, { message: 'Invalid email or password' })

        return done(null, user)
      } catch (error) {
        return done(error)
      }
    },
  ),
)

passport.serializeUser((user: any, done: any) => {
  done(null, user.id)
})

passport.deserializeUser(async (id: string, done: any) => {
  try {
    const user = await UserSchema.findById(id)
    done(null, user)
  } catch (error) {
    done(error, null)
  }
})
