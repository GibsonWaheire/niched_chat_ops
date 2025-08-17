const API_BASE_URL = 'http://localhost:3001';

export interface User {
  id: number;
  email: string;
  fullName: string;
  plan: string;
  automationsUsed: number;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export class AuthService {
  private static token: string | null = localStorage.getItem('chatops_token');

  static setToken(token: string) {
    this.token = token;
    localStorage.setItem('chatops_token', token);
  }

  static getToken(): string | null {
    return this.token;
  }

  static clearToken() {
    this.token = null;
    localStorage.removeItem('chatops_token');
  }

  static async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/users?email=${email}`);
      const users = await response.json();
      
      if (users.length === 0) {
        throw new Error('User not found');
      }

      const user = users[0];
      
      // In a real app, you'd verify the password hash
      // For demo purposes, we'll accept any password
      if (user.password === password || password.length > 0) {
        const token = `token_${Date.now()}`;
        this.setToken(token);
        
        return {
          user: {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            plan: user.plan,
            automationsUsed: user.automationsUsed,
            createdAt: user.createdAt
          },
          token
        };
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      throw new Error('Authentication failed');
    }
  }

  static async signUp(email: string, password: string, fullName: string): Promise<AuthResponse> {
    try {
      // Check if user already exists
      const existingUserResponse = await fetch(`${API_BASE_URL}/users?email=${email}`);
      const existingUsers = await existingUserResponse.json();
      
      if (existingUsers.length > 0) {
        throw new Error('User already exists');
      }

      // Create new user
      const newUser = {
        email,
        password: `$2b$10$${Math.random().toString(36).substring(7)}`, // Mock hash
        fullName,
        createdAt: new Date().toISOString(),
        plan: 'free',
        automationsUsed: 0
      };

      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const createdUser = await response.json();
      const token = `token_${Date.now()}`;
      this.setToken(token);

      return {
        user: {
          id: createdUser.id,
          email: createdUser.email,
          fullName: createdUser.fullName,
          plan: createdUser.plan,
          automationsUsed: createdUser.automationsUsed,
          createdAt: createdUser.createdAt
        },
        token
      };
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  static async resetPassword(email: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/users?email=${email}`);
      const users = await response.json();
      
      if (users.length === 0) {
        throw new Error('User not found');
      }

      // In a real app, you'd send an email with reset link
      // For demo purposes, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      throw new Error('Password reset failed');
    }
  }

  static async getCurrentUser(): Promise<User | null> {
    if (!this.token) {
      return null;
    }

    try {
      // In a real app, you'd validate the token with the server
      // For demo purposes, we'll return a mock user
      return {
        id: 1,
        email: 'demo@chatops.com',
        fullName: 'Demo User',
        plan: 'free',
        automationsUsed: 15,
        createdAt: '2024-01-01T00:00:00.000Z'
      };
    } catch (error) {
      this.clearToken();
      return null;
    }
  }

  static isAuthenticated(): boolean {
    return !!this.token;
  }

  static logout(): void {
    this.clearToken();
  }
}
