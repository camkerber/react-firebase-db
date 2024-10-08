import { DatabaseReference } from "firebase/database";

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN: string;
  }
}

export interface Firebase {
  dbRef: DatabaseReference;
  initializing: boolean;
}

export {};
