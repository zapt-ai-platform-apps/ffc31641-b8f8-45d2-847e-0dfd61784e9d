import { createSignal, onMount, createEffect, Show } from 'solid-js';
import { supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-solid';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from '@solidjs/router';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

function App() {
  const [user, setUser] = createSignal(null);
  const navigate = useNavigate();

  const checkUserSignedIn = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
    }
  };

  onMount(checkUserSignedIn);

  createEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) {
        setUser(session.user);
        navigate('/dashboard');
      } else {
        setUser(null);
        navigate('/');
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  });

  return (
    <Show
      when={user()}
      fallback={<LoginPage />}
    >
      <Dashboard user={user} />
    </Show>
  );
}

export default App;