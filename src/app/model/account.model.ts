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
  username?: string;
  password?: string;
  passwordConfirmation?: string;
  phoneNumber?: string;
  location?: LocationInterface;
}