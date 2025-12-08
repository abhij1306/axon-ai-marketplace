import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { contactSchema } from '@/lib/validations/auth';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = contactSchema.parse(body);

        // Insert contact submission
        const { data, error } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    name: validatedData.name,
                    email: validatedData.email,
                    message: validatedData.message,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to submit message' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully! We\'ll get back to you soon.',
                submission: {
                    id: data.id,
                    created_at: data.created_at,
                },
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

        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
