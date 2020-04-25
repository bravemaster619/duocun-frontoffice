export interface LocationInterface {
  lat: number;
  lng: number;
  placeId?: string;
  streetNumber?: string;
  streetName?: string;
  subLocality?: string;
  city?: string;
  province?: string;
  postalCode?: string;
}

export interface AccountInterface {
  _id?: string;
  username?: string;
  password?: string;
  passwordConfirmation?: string;
  phone?: string;
  location?: LocationInterface;
}
