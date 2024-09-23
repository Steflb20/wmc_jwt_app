interface TokenRequest {
    token: string; 
}

function isTokenRequest(obj: any): obj is TokenRequest {
    const tokenKey: keyof TokenRequest = 'token';

    return obj && obj[tokenKey];
}

export { TokenRequest, isTokenRequest };