import { ref, Ref } from 'vue';

export function userRegister() {
  const username: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const register = () => {
    // Implement registration logic, you can send a request to the backend to create a new user
    console.log('Registering...', username.value, password.value);
  };

  return {
    username,
    password,
    register,
  };
}
