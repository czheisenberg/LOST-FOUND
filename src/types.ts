// src/types.ts
export interface LoginRequest {
    account: string;
    pwd: string;
}

export interface LoginResponseData {
    tokenName: string;
    tokenValue: string;
    isLogin: boolean;
    loginId: string;
    loginType: string;
    tokenTimeout: number;
    sessionTimeout: number;
    tokenSessionTimeout: number;
    tokenActiveTimeout: number;
    loginDevice: string;
    tag: any;
}

export interface LoginResponse {
    code: number;
    msg: string;
    data: LoginResponseData;
}

export interface RegisterRequest {

    account: string;
    username: string;
    password: string;
    email: string;


}
