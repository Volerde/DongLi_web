<script lang="ts">
import { ref, defineComponent, Ref } from 'vue';
import { userLogin } from '../util/login';

interface LoginData {
    username: string;
    password: string;
}

interface Rules {
    username: { required: boolean; message: string; trigger: string }[];
    password: { required: boolean; message: string; trigger: string }[];
}

export default defineComponent({
    setup() {
        const { username, password, login } = userLogin();
        const loginData: Ref<LoginData> = ref({ username, password });

        const rules: Rules = {
            username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
            password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
        };

        const loginAction = () => {
            // @ts-ignore
            $refs.loginForm.validate((valid: boolean) => {
                if (valid) {
                    login();
                } else {
                    console.log('Form validation failed');
                }
            });
        };

        return {
            loginData,
            rules,
            loginAction,
        };
    },
});
</script>
