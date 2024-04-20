import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth"

import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";


export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage("createUserWithEmailAndPassword", firebaseError.code)

        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
};


export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { data: userCredential.user };
    } catch (error) {
        const firebaseError = error as FirebaseError;

        const errorMessage = getFirebaseErrorMessage("signInWithEmailAndPassword", firebaseError.code)

        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
};


export const firebaseLogoutUser = async () => {
    try {
        const userCredential = await signOut(auth)

        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage("signOut", firebaseError.code)

        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
};


export const sendEmailToResetPasword = async (email: string) => {
    try {
        const userCredential = await sendEmailToResetPasword(email)

        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage("sendEmailToResetPasword", firebaseError.code)

        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}



export const sendEmailVerificationProcedure = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser)

            return { data: true }
        } catch (error) {
            const firebaseError = error as FirebaseError
            const errorMessage = getFirebaseErrorMessage("sendEmailVerification", firebaseError.code)

            return {
                error: {
                    code: firebaseError.code,
                    message: errorMessage
                },
            }
        }
    } else {
        return {
            error: {
                code: "unknow",
                message: "une erreur est survenue"
            }
        }
    }

};