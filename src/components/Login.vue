<!-- <script lang="ts">
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

<template>
    <div>
        <h1>Login</h1>
        <el-form :model="loginData" label-width="80px" ref="loginForm" :rules="rules">
            <el-form-item label="Username" prop="username">
                <el-input v-model="loginData.username" placeholder="Enter your username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="loginData.password" placeholder="Enter your password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginAction">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template> -->
<script setup lang="ts">

</script>

<template>
  
</template>

<style scoped>

</style>