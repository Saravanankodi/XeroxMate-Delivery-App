"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";
import DocumentCard, {
    type DocumentType,
} from "@/components/onboarding/documents/DocumentCard";
import UploadSheet from "@/components/onboarding/documents/UploadSheet";

interface DocumentState {
    uploaded: boolean;
    fileName?: string;
}

const initialDocuments: Record<DocumentType, DocumentState> = {
    aadhaar: {
        uploaded: true,
        fileName: "aadhaar.jpg",
    },
    license: {
        uploaded: false,
    },
    rc: {
        uploaded: false,
    },
};

export default function DocumentsPage() {
    const router = useRouter();

    const [documents, setDocuments] =
        useState<Record<DocumentType, DocumentState>>(initialDocuments);

    const [selectedDocument, setSelectedDocument] =
        useState<DocumentType | null>(null);

    const handleUploaded = (fileName: string) => {
        if (!selectedDocument) return;

        setDocuments((current) => ({
            ...current,
            [selectedDocument]: {
                uploaded: true,
                fileName,
            },
        }));

        setSelectedDocument(null);
    };

    const handleContinue = () => {
        router.push("/partner/onboarding/selfie");
    };

    const selectedDocumentName =
        selectedDocument === "aadhaar"
            ? "Aadhaar Card"
            : selectedDocument === "license"
                ? "Driving Licence"
                : selectedDocument === "rc"
                    ? "Vehicle RC"
                    : "";

    return (
        <main className="min-h-dvh bg-[#FAF8FFCC]">
          

            <div className="mx-auto w-full max-w-md  pb-6">
                <Header
                    title="Upload Your Doc Partner"
                    currentStep={4}
                    totalSteps={4}
                    showProgress
                />

                <section className="mt-4 px-4">
                    <h1 className="font-hanuman text-[22px] font-bold   text-gray-900 mb-2">
                        Verify your documents
                    </h1>

                    <p className="mt-1 max-w-[330px] text-[14px]  text-gray-500">
                        We need a few documents to verify your delivery partner account
                        and guarantee fleet compliance.
                    </p>
                </section>

                <section className="mt-4 space-y-2.5 px-4">
                    <DocumentCard
                        type="aadhaar"
                        title="Aadhaar Card"
                        uploaded={documents.aadhaar.uploaded}
                        onAction={() => setSelectedDocument("aadhaar")}
                    />

                    <DocumentCard
                        type="license"
                        title="Driving Licence"
                        uploaded={documents.license.uploaded}
                        onAction={() => setSelectedDocument("license")}
                    />

                    <DocumentCard
                        type="rc"
                        title="Vehicle RC"
                        uploaded={documents.rc.uploaded}
                        onAction={() => setSelectedDocument("rc")}
                    />
                </section>

                <div className="mt-3 px-4">
                    <Button
                        type="button"
                        onClick={handleContinue}
                        className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(37,99,235,0.25)] transition hover:bg-blue-700"
                    >
                        Continue →
                    </Button>
                </div>

                <div className="mt-1.5 flex items-center justify-center gap-1 text-center px-4">
                    <Info className="size-3 text-gray-500" strokeWidth={2} />

                    <p className="text-[11px] text-gray-500">
                        Upload all 3 remaining documents to proceed
                    </p>
                </div>

                {selectedDocument && (
                    <UploadSheet
                        documentName={selectedDocumentName}
                        onClose={() => setSelectedDocument(null)}
                        onUploaded={handleUploaded}
                    />
                )}
            </div>
        </main>
    );
}