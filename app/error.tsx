"use client";
import React, {FC} from 'react';
import {useRouter} from "next/navigation";
import { Button } from '@/components/ui/button';


const ErrorPage:FC = () => {
    const history = useRouter();

    const handleGoBack = () => {
        history.back();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">We couldn't find what you are looking for.</p>
            <Button
                onClick={handleGoBack}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go Back
            </Button>
        </div>
    );
};

export default ErrorPage;