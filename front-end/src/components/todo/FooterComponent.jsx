import { useContext } from "react";
import { useAuth } from './security/AuthContext'


function FooterComponent() {
  const authContext = useAuth()

  console.log(`Footer component - ${authContext.number}`);

  return (
    <footer className="footer">
      <div className="container">
        Your Footer
      </div>
    </footer>
  )
}

export default FooterComponent