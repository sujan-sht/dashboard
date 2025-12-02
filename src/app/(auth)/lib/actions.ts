'use server';
import { z } from "zod";


const UserSchema = z.object({
    id: z.string(),
    fname:z.string().min(1,"First name is required"),
    lname:z.string().min(1,"Last name is required"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be at least 6 characters long"),
    date: z.string(),
});
const RegisterUser = UserSchema.omit({ id: true, date: true });
export type UserState = {
  errors?: {
    fname?: string[];
    lname?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
export async function registerUser(prevState: UserState,formData: FormData) {
    const validateFields = RegisterUser.safeParse({
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        email: formData.get("email"),
        password: formData.get("password"),
    });
    if(!validateFields.success){
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "Validation failed",
        }
    }
    const userData = validateFields.data;

    console.log("User registered successfully:", userData);
}