"use server";

import { db } from "@/firebase/admin";
import { error } from "console";

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params; 

    try{
        const userRecord = await db.collection('users').doc(uid).get();

        if( userRecord.exits){
            return{
                success: false,
                message: 'User Already exists. Please Sign In Instead.'
            }
        }

        await db.collection('users').doc(uid).set({
            name, email
        })

    }catch (e: any) {
        console.error( 'Error creating a user', e)

        if(e.code === 'auth/email-already-exits'){
            return{
                success: false, 
                message: 'This email is already in use.'
            }
        }
        return{
            success: false,
            message: 'Fail to create an account'
        }
    }

}