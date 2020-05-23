import { Photo } from '@napho/data';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  birthDate: Date;
  phone: string;
  salt: string;
  token?: string;
  photos?: Photo[];
  favPhotos?: Photo[];
  followers?: Partial<User>[];
  following?: Partial<User>[];
}

export interface UserCredentials {
  username: string;
  password: string;
}
