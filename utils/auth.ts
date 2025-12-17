import { supabase } from "./supabase/client";

export async function signUpNewUser(email: string, password: string) { 
    const { data, error } = await supabase.auth.signUp({
        email, password,
        options: { 
            data: {
                full_name: email.split("@")[0],
            }
        }
    })

    if (error) {
        console.error("Signup error:", error);
        return { error};
    }

    if (data.user) { 
        const { error: dbError} = await supabase.from("users").insert({
            id: data.user.id,
            email: data.user.email,
        });
        if (dbError) console.error("Database insert error:", dbError);
    }
    return {data};
}

export async function login(email: string, password: string) { 
    const {data, error} = await supabase.auth.signInWithPassword({
        email, password
    });
    if (error) { 
        console.error("Login error:", error);
        return { error };
    }
    return { data };
}

export async function logout() { 
    return await supabase.auth.signOut();
}

export async function getCurrentUser() { 
    const { 
        data: {user},
    } = await supabase.auth.getUser();
    return user;
}