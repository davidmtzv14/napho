import { Photo } from '@napho/data';

export interface User {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  birthDate?: Date;
  phone?: string;
  description?: string;
  profileImgUrl?: string;
  salt: string;
  token?: string;
  photos?: Photo[];
  favPhotos?: Photo[];
  following?: Partial<User>[];
}

export interface UserCredentials {
  username: string;
  password: string;
}
