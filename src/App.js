import './App.css';
import { useState } from 'react';


function App() {

  let [modalStatus, modalFunction] = useState(false);

  return (
    <div className="App">
      <button onClick={() => modalFunction(!modalStatus)} className=' font-bold text-[50px] border-4 px-3 border-[grey] rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500/50 en'>ENQUIRE NOW</button>
      <div className={`modalOverlay ${modalStatus ? 'modalShow' : ''} `}></div>

      <div className={`loginForm ${modalStatus ? 'showLoginForm' : ''}`}>

        <div class="bg-gray-100 flex items-center justify-center ">
          <div class="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-end">
              <button onClick={() => modalFunction(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex justify-center mb-6">
              <span class="inline-block bg-gray-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
              </span>
            </div>
            <h2 class="text-2xl font-semibold text-center mb-2">Create a new account</h2>
            <p class="text-gray-600 text-center mb-6">Enter your details to register.</p>
            <form>
              <div class="mb-2">
                <label for="fullName" class="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                <input type="text" id="fullName" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="James Brown"/>
              </div>
              <div class="mb-2">
                <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                <input type="email" id="email" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com"/>
              </div>
              <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                <input type="password" id="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••"/>
                  <p class="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
              </div>
              <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
              <p class="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's
                <a href="#" class="text-blue-500 hover:underline">Terms and Conditions</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
