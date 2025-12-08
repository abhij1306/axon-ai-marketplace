import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { loginSchema } from '@/lib/validations/auth';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = loginSchema.parse(body);

        // Find user by email
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', validatedData.email)
            .single();

        if (error || !user) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(
            validatedData.password,
            user.password_hash
        );

        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Return success with username
        return NextResponse.json(
            {
                success: true,
                message: 'Login successful',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                },
            },
            { status: 200 }
        );

    } catch (error: any) {
        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Invalid input', details: error.errors },
                { status: 400 }
            );
        }

        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
