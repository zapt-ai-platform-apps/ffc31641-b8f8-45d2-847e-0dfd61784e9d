import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <div class={`bg-darkBackground ${isOpen() ? 'w-64' : 'w-20'} transition-all duration-300 h-full shadow-lg`}>
      <div class="flex items-center justify-between p-4">
        <span class="text-lightGray text-xl font-semibold">Serverse</span>
        <button
          class="text-lightGray focus:outline-none"
          onClick={() => setIsOpen(!isOpen())}
        >
          {isOpen() ? '<' : '>'}
        </button>
      </div>
      <nav class="mt-4">
        <A href="/dashboard" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Dashboard
        </A>
        <A href="/leads" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Leads
        </A>
        <A href="/communications" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Communications
        </A>
        <A href="/sales-pipeline" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Sales Pipeline
        </A>
        <A href="/customer-satisfaction" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Customer Satisfaction
        </A>
        <A href="/predictive-analytics" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Predictive Analytics
        </A>
        <A href="/settings" class="block py-2.5 px-4 text-lightGray hover:bg-neonBlue hover:text-white transition-colors">
          Settings
        </A>
      </nav>
    </div>
  );
}

export default Sidebar;