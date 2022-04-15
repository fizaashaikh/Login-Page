import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	url = "http://localhost:9000"

	constructor(private http:HttpClient) { }

	// Calling the server to generate token
	generateToken(credentials:any) {
		// token generate
		return this.http.post(`${this.url}/token`,credentials)
	}

	// For login User
	loginUser(token: string) {
		localStorage.setItem("token", token);
		return true;
	}

	// Check if already logged in
	isLoggedIn() {
		let token = localStorage.getItem("token");

		if (token == undefined || token == '' || token == null) {
			return false;
		} else {
			return true;
		}
	}

	// User Logout
	logout() {
		localStorage.removeItem("token");
		return true;
	}

	// Getting the token
	getToken() {
		return localStorage.getItem("token");
	}
}
