export interface User {
  _id?: string;
  first_name: string;
  email: string;
  password: string;
  last_name: string;
  type: string;
  address: string;
  qualification: string[];
  gender: string;
  state: string;
  city: string;
  phone_number: string;
  postal: number;
  curriculums: string[];
}