import type { Metadata } from "next";
import { Suspense } from "react";
import SignInForm from "./SignInForm";

export const metadata: Metadata = {
    title: "সাইন ইন",
    description: "বাজার দর অ্যাকাউন্টে সাইন ইন করে বিস্তারিত বাজারদর, বাজার তুলনা ও আপনার প্রোফাইল দেখুন।",
};

type SignInPageProps = {
    searchParams: Promise<{ redirect?: string; reason?: string }>;
};

async function SignInContent({ searchParams }: SignInPageProps) {
    const { redirect, reason } = await searchParams;

    return <SignInForm redirectTo={redirect ?? "/"} reason={reason} />;
}

export default function SignInPage({ searchParams }: SignInPageProps) {
    return (
        <Suspense fallback={<p className="px-4 py-8 text-center" role="status">লোড হচ্ছে…</p>}>
            <SignInContent searchParams={searchParams} />
        </Suspense>
    );
}
