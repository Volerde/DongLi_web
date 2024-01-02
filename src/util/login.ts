import { ref, Ref } from 'vue';

export function userLogin() {
    const username: Ref<string> = ref('');
    const password: Ref<string> = ref('');

    const login = () => {
        // Implement login logic, you can send a request to the backend for authentication
        console.log('Logging in...', username.value, password.value);
    };

    return {
        username,
        password,
        login,
    };
}
