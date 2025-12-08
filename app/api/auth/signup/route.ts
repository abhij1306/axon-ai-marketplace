import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { signupSchema } from '@/lib/validations/auth';
import { generateUsername } from '@/lib/utils/username-generator';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = signupSchema.parse(body);

        // Check if user already exists
        const { data: existingUser } = await supabase
            .from('users')
            .select('email')
            .eq('email', validatedData.email)
            .single();

        if (existingUser) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 400 }
            );
        }

        // Hash password
        const passwordHash = await bcrypt.hash(validatedData.password, 10);

        // Generate unique username
        let username = generateUsername();
        let attempts = 0;
        while (attempts < 10) {
            const { data: existingUsername } = await supabase
                .from('users')
                .select('username')
                .eq('username', username)
                .single();

            if (!existingUsername) break;
            username = generateUsername();
            attempts++;
        }

        // Insert user
        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    name: validatedData.name,
                    email: validatedData.email,
                    password_hash: passwordHash,
                    username: username,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to create account' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Account created successfully',
                user: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    username: data.username,
                }
            },
            { status: 201 }
        );

    } catch (error: any) {
        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Invalid input', details: error.errors },
                { status: 400 }
            );
        }

        console.error('Signup error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
