// Components
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SignInForm from '../components/SigninForm'

export default function SignIn() {
  document.title = 'Argent Bank - Login'
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </> 
  )
} 