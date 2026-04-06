export declare class LoginPage {
  constructor(page: any);
  navigate(): Promise<void>;
  login(username: string, password: string): Promise<void>;
}