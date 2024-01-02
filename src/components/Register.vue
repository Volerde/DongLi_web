<script lang="ts">
import { ref, defineComponent, Ref } from 'vue';
import { userRegister } from '../util/register';

interface RegisterData {
    username: string;
    password: string;
}

interface Rules {
    username: { required: boolean; message: string; trigger: string }[];
    password: { required: boolean; message: string; trigger: string }[];
}

export default defineComponent({
    setup() {
        const { username, password, register } = userRegister();
        const registerData: Ref<RegisterData> = ref({ username, password });

        const rules: Rules = {
            username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
            password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
        };

        const registerAction = () => {
            // @ts-ignore
            $refs.registerForm.validate((valid: boolean) => {
                if (valid) {
                    register();
                } else {
                    console.log('Form validation failed');
                }
            });
        };

        return {
            registerData,
            rules,
            registerAction,
        };
    },
});
</script>
