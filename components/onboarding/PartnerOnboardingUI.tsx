"use client";

import {

    ArrowRight,
    Camera,
    Check,
    ChevronDown,
    FileText,
    Info,
    Lock,
    ShieldCheck,
    UserIcon,

} from "lucide-react";
import { useState } from "react";

interface FieldLabelProps {
    label: string;
    required?: boolean;
    rightText?: string;
}

export function FieldLabel({
    label,
    required = false,
    rightText,
}: FieldLabelProps) {
    return (
        <div className="mb-1.5 flex items-center justify-between gap-2">
            <label className="text-xs font-semibold  font-hanuman text-gray-900">
                {label}
                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            {rightText && (
                <span className="text-[9px] font-medium text-blue-600">
                    {rightText}
                </span>
            )}
        </div>
    );
}

export function PartnerBrandSection() {
    return (
        <div className="flex items-center justify-between px-4 pb-4 sm:px-6">
            <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="text-[7px] font-bold  font-hanuman text-blue-600">
                        XM
                    </div>
                </div>

                <span className="font-serif text-xs font-bold  font-hanuman text-gray-900">
                    XEROXMATE
                </span>
            </div>
        </div>
    );
}

export function ProfilePhotoCard() {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-indigo-50 px-4 py-3.5">
            <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <UserIcon
                    size={25}
                    strokeWidth={1.8}
                    className="text-blue-600"
                />

                <div className="absolute bottom-0 right-0 flex size-6 items-center justify-center rounded-full bg-blue-600">
                    <Camera
                        size={12}
                        className="text-white"
                    />
                </div>
            </div>

            <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                    <span className="text-[16px] font-bold  font-hanuman text-gray-900">
                        Profile Photo
                    </span>

                    <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-medium text-gray-500">
                        Optional
                    </span>
                </div>

                <p className="mt-0.5 text-[12px]   text-gray-500">
                    Helps customers recognize you during
                    drop-offs
                </p>

                <button
                    type="button"
                    className="mt-1 text-[13px] font-bold  font-hanuman text-blue-600"
                >
                    Upload photo
                </button>
            </div>
        </div>
    );
}

export function InputBox({
    icon,
    value,
    placeholder,
    type = "text",
    rightIcon,
    readOnly = false,
}: {
    icon?: React.ReactNode;
    value?: string;
    placeholder?: string;
    type?: string;
    rightIcon?: React.ReactNode;
    readOnly?: boolean;
}) {
    return (
        <div className="flex h-13 items-center rounded-lg border border-blue-100 bg-indigo-50 px-3">
            {icon && (
                <span className="mr-2 shrink-0 text-gray-500">
                    {icon}
                </span>
            )}

            <input
                type={type}
                defaultValue={value}
                placeholder={placeholder}
                readOnly={readOnly}
                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400"
            />

            {rightIcon && (
                <span className="ml-2 shrink-0">
                    {rightIcon}
                </span>
            )}
        </div>
    );
}

export function VerificationCard() {
    return (
        <div className="flex gap-3 rounded-xl bg-indigo-50 px-4 py-3.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                <ShieldCheck
                    size={17}
                    className="text-white"
                />
            </div>

            <div>
                <p className="text-[13px] font-bold  font-hanuman text-gray-900">
                    Fast Verification Active
                </p>

                <p className="mt-1 text-xs   text-gray-500">
                    Details will be securely verified in
                    real-time to activate your on-road hub
                    access.
                </p>
            </div>
        </div>
    );
}

export function SecurityNote() {
    return (
        <div className="flex items-start justify-center gap-2 px-4 text-center">
            <Lock
                size={13}
                className="mt-0.5 shrink-0 text-blue-600"
            />

            <p className="text-xs   text-gray-500">
                Your personal details are encrypted and used
                solely for Xerox Mate verification.
            </p>
        </div>
    );
}

export function ContinueButton({
    children = "Continue",
    onClick,
}: {
    children?: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex h-15 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-xl font-semibold  font-hanuman text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.99]"
        >
            {children}

            <ArrowRight size={18} />
        </button>
    );
}

export function SelectField({
    label,
    value,
    icon,
    topText,
    rightText,
    onClick,
}: {
    label: string;
    value: string;
    icon: React.ReactNode;
    topText: string;
    rightText?: string;
    onClick?: () => void;
}) {
    return (
        <div>
            <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[13px] font-medium text-gray-500">
                    {label}
                    <span className="ml-1 text-red-500">*</span>
                </span>

                {rightText && (
                    <span className="text-[11px] font-medium text-blue-600">
                        {rightText}
                    </span>
                )}
            </div>

            <button
                type="button"
                onClick={onClick}
                className="flex min-h-16 w-full items-center gap-3 rounded-xl bg-indigo-50 px-4 text-left"
            >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    {icon}
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-gray-500">
                        {topText}
                    </p>

                    <p className="mt-0.5 truncate text-lg font-semibold  font-hanuman text-gray-900">
                        {value}
                    </p>
                </div>

                <ChevronDown
                    size={17}
                    className="shrink-0 text-gray-500"
                />
            </button>
        </div>
    );
}

export function HubChip({
    children,
    selected = false,
    onClick,
}: {
    children: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium transition ${selected
                ? "bg-blue-100 text-gray-900"
                : "bg-indigo-50 text-gray-700"
                }`}
        >
            {selected && (
                <Check
                    size={11}
                    strokeWidth={3}
                    className="text-blue-600"
                />
            )}

            {children}
        </button>
    );
}

export function WorkInfoCard() {
    return (
        <div className="rounded-xl bg-indigo-50 p-3.5">
            <div className="flex gap-2.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Info
                        size={16}
                        className="text-blue-600"
                    />
                </div>

                <p className="text-sm   text-gray-500">
                    Orders will be offered based on your
                    selected work area. You can expand your
                    delivery radius later in app settings.
                </p>
            </div>

            <div className="mt-3 flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 shadow-sm">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-blue-600" />

                <p className="text-[13px] font-semibold  font-hanuman   text-gray-900">
                    42 active Xerox print hubs in Anna Nagar
                    Zone
                </p>
            </div>
        </div>
    );
}

export function VehicleCard({
    icon,
    title,
    subtitle,
    selected,
    onClick,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    selected?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative min-h-32 rounded-xl p-4 text-left transition ${selected
                ? "bg-blue-100 shadow-sm"
                : "bg-indigo-50"
                }`}
        >
            <div
                className={`flex size-9 items-center justify-center rounded-lg ${selected
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-gray-500"
                    }`}
            >
                {icon}
            </div>

            <p
                className={`mt-3 text-[15px] font-semibold  font-hanuman ${selected
                    ? "text-blue-600"
                    : "text-gray-900"
                    }`}
            >
                {title}
            </p>

            <p className="mt-0.5 text-[11px] text-gray-500">
                {subtitle}
            </p>

            <span
                className={`absolute right-3 top-3 flex size-5 items-center justify-center rounded-full ${selected
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100"
                    }`}
            >
                {selected && (
                    <Check
                        size={12}
                        strokeWidth={3}
                    />
                )}
            </span>
        </button>
    );
}






export function VehicleNumberBox() {
    const [vehicleNumber, setVehicleNumber] = useState("");

    // Exact format: AA 00 AA 0000
    const isValid = /^[A-Z]{2} \d{2} [A-Z]{2} \d{4}$/.test(
        vehicleNumber
    );

    const handleChange = (value: string) => {
        // Remove spaces and convert letters to uppercase
        const cleaned = value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, "");

        let formatted = "";

        // First 2 characters: letters only
        const letters1 = cleaned
            .slice(0, 2)
            .replace(/[^A-Z]/g, "");

        formatted = letters1;

        // Next 2 characters: numbers only
        const numbers1 = cleaned
            .slice(2, 4)
            .replace(/[^0-9]/g, "");

        if (numbers1.length > 0) {
            formatted += " " + numbers1;
        }

        // Next 2 characters: letters only
        const letters2 = cleaned
            .slice(4, 6)
            .replace(/[^A-Z]/g, "");

        if (letters2.length > 0) {
            formatted += " " + letters2;
        }

        // Last 4 characters: numbers only
        const numbers2 = cleaned
            .slice(6, 10)
            .replace(/[^0-9]/g, "");

        if (numbers2.length > 0) {
            formatted += " " + numbers2;
        }

        setVehicleNumber(formatted);
    };

    return (
        <div className="flex h-13 items-center rounded-xl bg-indigo-50 px-4">
            <div className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1">
                <FileText
                    size={12}
                    className="text-gray-500"
                />

                <span className="text-[11px] font-semibold  font-hanuman text-gray-600">
                    IND
                </span>
            </div>

            <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="TN 09 AB 1234"
                maxLength={13}
                autoComplete="off"
                spellCheck={false}
                aria-label="Vehicle registration number"
                aria-invalid={
                    vehicleNumber.length > 0 && !isValid
                }
                className="ml-3 min-w-0 flex-1 bg-transparent text-[15px] font-bold  font-hanuman tracking-wide text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400"
            />

            <div
                className={`ml-auto flex size-6 shrink-0 items-center justify-center rounded-full transition-colors ${isValid ? "bg-blue-600" : "bg-gray-300"
                    }`}
            >
                <Check
                    size={14}
                    strokeWidth={3}
                    className="text-white"
                />
            </div>
        </div>
    );
}




export function VehicleInfoNote() {
    return (
        <div className="mt-2 flex items-start gap-1.5">
            <Info
                size={12}
                className="mt-0.5 shrink-0 text-gray-500"
            />

            <p className="text-[11px]   text-gray-500">
                Must match the Vehicle RC document you upload
                in the next step.
            </p>
        </div>
    );
}