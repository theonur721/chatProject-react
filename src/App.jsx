import { useEffect, useState } from 'react';
import { auth } from './firebase/firebaseConfig';
import Auth from './pages/Auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Chat from './pages/Chat';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [room, setRoom] = useState(null);

  // kullanıcnın oturumundaki değişimi izler
  // eğer kullanıcı varsa çalıştırdığı fonksiyyona parametre olrak gönderiri
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  // çıkış yapma fonk
  const handleLogout = () => {
    // kullanınıcının oturumunu kapatar
    signOut(auth).catch((err) => console.log('HATA', err));
  };

  // form gödnderilidğinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // kullanıcını giriş yapıcağı odayı belirleme
    setRoom(e.target[0].value);
  };

  /* kullanıcı yoksa giriş ekranını  gösterir */
  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }

  // kullanıcı varsa gösterir
  return (
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom} />
      ) : (
        <form onSubmit={handleSubmit} className="room-container">
          <h1>Chat Room</h1>
          <p>Which Room Will You Enter?</p>
          <input type="text" />

          <button type="submit">Enter the Room</button>

          <button
            onClick={handleLogout}
            className="logout"
            type="button"
          >
            Exit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
